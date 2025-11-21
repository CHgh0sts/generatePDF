import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Fonction pour extraire une valeur depuis un objet JSON avec notation pointée
function getValueByPath(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// POST - Générer un PDF depuis une route API
export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Récupérer la route API
    const apiRoute = await prisma.apiRoute.findUnique({
      where: { slug },
      include: {
        template: true
      }
    });

    if (!apiRoute) {
      return NextResponse.json({ error: 'Route non trouvée' }, { status: 404 });
    }

    if (!apiRoute.isActive) {
      return NextResponse.json({ error: 'Route désactivée' }, { status: 403 });
    }

    // Vérifier la clé API si requise
    if (apiRoute.apiKey) {
      const apiKey = request.headers.get('X-API-Key') || new URL(request.url).searchParams.get('apiKey');
      if (apiKey !== apiRoute.apiKey) {
        return NextResponse.json({ error: 'Clé API invalide' }, { status: 401 });
      }
    }

    // Récupérer les données JSON envoyées (peut être vide)
    let jsonData = {};
    try {
      const text = await request.text();
      if (text && text.trim()) {
        jsonData = JSON.parse(text);
      }
    } catch (e) {
      // Si pas de body ou body invalide, utiliser un objet vide
      jsonData = {};
    }

    // Parser le mapping des variables
    let variableMapping: Record<string, string> = {};
    try {
      variableMapping = JSON.parse(apiRoute.variableMapping) as Record<string, string>;
    } catch (e) {
      // Si pas de mapping, utiliser un objet vide
      variableMapping = {};
    }

    // Parser le template
    const templateData = JSON.parse(apiRoute.template.content);
    const elements = templateData.elements || [];
    const globalSettings = templateData.globalSettings;

    // Appliquer le mapping des variables
    const processedElements = elements.map((element: any) => {
      // Traiter les éléments texte
      if (element.type === 'text' && element.content) {
        let newContent = element.content;

        // Remplacer chaque variable du template par la valeur correspondante du JSON
        Object.entries(variableMapping).forEach(([jsonPath, templateVar]) => {
          const value = getValueByPath(jsonData, jsonPath);
          if (value !== undefined) {
            // Enlever les accolades de la variable template si présentes
            const cleanVar = templateVar.replace(/[{}]/g, '');
            newContent = newContent.replace(new RegExp(`{{${cleanVar}}}`, 'g'), String(value));
          }
        });

        return { ...element, content: newContent };
      }
      
      // Traiter les tableaux avec colonnes
      if (element.type === 'table' && element.columns) {
        const processedColumns = element.columns.map((col: any) => {
          let processedCol = { ...col };
          
          // Traiter le label de la colonne (variables simples uniquement, pas de boucle)
          if (col.label) {
            let newLabel = col.label;
            Object.entries(variableMapping).forEach(([jsonPath, templateVar]) => {
              // Ignorer les chemins avec [] (ce sont des boucles)
              if (!jsonPath.includes('[]')) {
                const value = getValueByPath(jsonData, jsonPath);
                if (value !== undefined) {
                  const cleanVar = templateVar.replace(/[{}]/g, '');
                  newLabel = newLabel.replace(new RegExp(`{{${cleanVar}}}`, 'g'), String(value));
                }
              }
            });
            processedCol.label = newLabel;
          }
          
          return processedCol;
        });
        
        // Détecter si on a des mappings avec boucle (contenant [])
        const loopMappings = Object.entries(variableMapping).filter(([jsonPath]) => jsonPath.includes('[]'));
        
        let processedRows: any[] = [];
        
        if (loopMappings.length > 0) {
          // Mode boucle : extraire le tableau source
          // Ex: "depenses[].prixTTC" -> extraire "depenses"
          const firstLoopPath = loopMappings[0][0];
          const arrayPath = firstLoopPath.split('[]')[0];
          const arrayData = getValueByPath(jsonData, arrayPath);
          
          if (Array.isArray(arrayData)) {
            // Boucler sur chaque élément du tableau
            processedRows = arrayData.map((item: any) => {
              const processedRow: Record<string, string> = {};
              
              element.columns.forEach((col: any) => {
                let cellValue = '';
                
                if (col.value) {
                  cellValue = col.value;
                  
                  // Remplacer les variables de boucle
                  loopMappings.forEach(([jsonPath, templateVar]) => {
                    // Ex: "depenses[].prixTTC" -> extraire "prixTTC"
                    const propertyPath = jsonPath.split('[]')[1];
                    const cleanPath = propertyPath.startsWith('.') ? propertyPath.substring(1) : propertyPath;
                    
                    const value = getValueByPath(item, cleanPath);
                    if (value !== undefined) {
                      const cleanVar = templateVar.replace(/[{}]/g, '');
                      cellValue = cellValue.replace(new RegExp(`{{${cleanVar}}}`, 'g'), String(value));
                    }
                  });
                  
                  // Remplacer aussi les variables simples (non-boucle)
                  Object.entries(variableMapping).forEach(([jsonPath, templateVar]) => {
                    if (!jsonPath.includes('[]')) {
                      const value = getValueByPath(jsonData, jsonPath);
                      if (value !== undefined) {
                        const cleanVar = templateVar.replace(/[{}]/g, '');
                        cellValue = cellValue.replace(new RegExp(`{{${cleanVar}}}`, 'g'), String(value));
                      }
                    }
                  });
                }
                
                processedRow[col.id] = cellValue;
              });
              
              return processedRow;
            });
          }
        } else {
          // Mode ancien : chercher des données de lignes classiques
          const possibleRowKeys = ['tableData', 'rows', 'items', 'data', `table_${element.id}`];
          let rowsData: any[] | null = null;
          
          for (const key of possibleRowKeys) {
            const data = getValueByPath(jsonData, key);
            if (Array.isArray(data)) {
              rowsData = data;
              break;
            }
          }
          
          if (rowsData && Array.isArray(rowsData)) {
            processedRows = rowsData.map((rowData: any) => {
              const processedRow: Record<string, string> = {};
              
              element.columns.forEach((col: any) => {
                let cellValue = '';
                
                if (col.value) {
                  cellValue = col.value;
                  Object.entries(variableMapping).forEach(([jsonPath, templateVar]) => {
                    const value = getValueByPath(rowData, jsonPath.split('.').pop() || jsonPath);
                    if (value !== undefined) {
                      const cleanVar = templateVar.replace(/[{}]/g, '');
                      cellValue = cellValue.replace(new RegExp(`{{${cleanVar}}}`, 'g'), String(value));
                    }
                  });
                } else {
                  const colKey = col.label.toLowerCase().replace(/\s+/g, '_');
                  cellValue = rowData[colKey] || rowData[col.label] || '';
                }
                
                processedRow[col.id] = String(cellValue);
              });
              
              return processedRow;
            });
          }
        }
        
        return { 
          ...element, 
          columns: processedColumns,
          data: processedRows.length > 0 ? { rows: processedRows } : element.data
        };
      }
      
      return element;
    });

    // Selon le type de réponse demandé
    if (apiRoute.responseType === 'base64') {
      // Retourner les données en JSON pour que le client génère le PDF
      return NextResponse.json({
        elements: processedElements,
        globalSettings,
        format: 'base64'
      });
    } else if (apiRoute.responseType === 'url') {
      // TODO: Implémenter le stockage et retourner une URL
      return NextResponse.json({
        message: 'Type URL pas encore implémenté',
        elements: processedElements,
        globalSettings
      });
    } else {
      // responseType === 'download'
      // Retourner les données pour génération côté client
      // Note: La génération réelle du PDF nécessite html2canvas qui ne fonctionne que côté client
      return NextResponse.json({
        elements: processedElements,
        globalSettings,
        templateName: apiRoute.template.name,
        format: 'download'
      });
    }
  } catch (error) {
    console.error('Erreur génération PDF:', error);
    return NextResponse.json({ 
      error: 'Erreur lors de la génération',
      details: (error as Error).message 
    }, { status: 500 });
  }
}

