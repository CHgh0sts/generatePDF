'use client';

import React, { useState, useRef } from 'react';
import InvoiceRenderer, { EditorElement, GlobalSettings } from '@/components/InvoiceRenderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, ArrowLeft, AlertCircle, Plus, Trash2, Table as TableIcon } from 'lucide-react';
import Link from 'next/link';

export default function PdfGenerator({ template }: { template: any }) {
  const [elements, setElements] = useState<EditorElement[]>([]);
  const [globalSettings, setGlobalSettings] = useState<GlobalSettings | undefined>(undefined);

  const [isGenerating, setIsGenerating] = useState(false);

  // État pour les variables détectées
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [detectedVars, setDetectedVars] = useState<string[]>([]);
  
  // État pour les lignes des tableaux : { tableId: [ { colId: value }, ... ] }
  const [tableRows, setTableRows] = useState<Record<string, Record<string, string>[]>>({});

  React.useEffect(() => {
    try {
       const parsed = JSON.parse(template.content);
       let parsedElements: EditorElement[] = [];
       
       if (Array.isArray(parsed)) {
          parsedElements = parsed;
          setElements(parsed);
       } else {
          parsedElements = parsed.elements || [];
          setElements(parsed.elements || []);
          setGlobalSettings(parsed.globalSettings);
       }

       // Détecter toutes les variables {{...}} dans le template
       const varSet = new Set<string>();
       const varRegex = /\{\{(\w+)\}\}/g;
       
       parsedElements.forEach(el => {
         if (el.type === 'text' && el.content) {
           let match;
           while ((match = varRegex.exec(el.content)) !== null) {
             varSet.add(match[1]);
           }
         }
         
         // Vérifier aussi dans les colonnes de tableau (label et value)
         if (el.type === 'table' && el.columns) {
           el.columns.forEach(col => {
             if (col.label) {
               let match;
               while ((match = varRegex.exec(col.label)) !== null) {
                 varSet.add(match[1]);
               }
             }
             if (col.value) {
               let match;
               while ((match = varRegex.exec(col.value)) !== null) {
                 varSet.add(match[1]);
               }
             }
           });
         }
       });

       const varsArray = Array.from(varSet).sort();
       setDetectedVars(varsArray);
       
       // Initialiser les variables avec des valeurs par défaut
       const initialVars: Record<string, string> = {};
       varsArray.forEach(varName => {
         initialVars[varName] = '';
       });
       setVariables(initialVars);
       
       // Initialiser les tableaux avec une ligne vide par défaut
       const initialTableRows: Record<string, Record<string, string>[]> = {};
       parsedElements.forEach(el => {
         if (el.type === 'table' && el.columns && el.columns.length > 0) {
           const emptyRow: Record<string, string> = {};
           el.columns.forEach(col => {
             emptyRow[col.id] = '';
           });
           initialTableRows[el.id] = [emptyRow];
         }
       });
       setTableRows(initialTableRows);
       
    } catch {
       setElements([]);
    }
  }, [template.content]);

  const rendererRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    setIsGenerating(true);
    
    try {
      // Fonction pour normaliser les couleurs en format supporté
      const normalizeColor = (color: any): any => {
        if (typeof color !== 'string') return color;
        // Si c'est déjà un format valide (hex, rgb, rgba), on le garde
        if (color.match(/^#[0-9a-fA-F]{3,8}$/) || 
            color.match(/^rgba?\(/i) || 
            color.match(/^hsla?\(/i)) {
          return color;
        }
        // Pour tout autre format non standard, on retourne une couleur par défaut
        return color;
      };

      // Fonction pour nettoyer les styles
      const cleanStyle = (style: any) => {
        if (!style) return style;
        const cleaned = { ...style };
        if (cleaned.backgroundColor) cleaned.backgroundColor = normalizeColor(cleaned.backgroundColor);
        if (cleaned.color) cleaned.color = normalizeColor(cleaned.color);
        if (cleaned.borderColor) cleaned.borderColor = normalizeColor(cleaned.borderColor);
        return cleaned;
      };

      // Prétraitement des images : Conversion URL externe -> Base64 via Proxy
      // Cela contourne les restrictions CORS de html2canvas pour les URLs externes
      const processedElements = await Promise.all(elements.map(async (el) => {
        // Nettoyer les styles de l'élément
        const cleanedEl = { ...el, style: cleanStyle(el.style) };
        
        if (el.type === 'image' && el.content && el.content.startsWith('http')) {
          try {
            const response = await fetch(`/api/proxy-image?url=${encodeURIComponent(el.content)}`);
            if (!response.ok) throw new Error('Proxy failed');
            const blob = await response.blob();
            const base64 = await new Promise<string>((resolve) => {
               const reader = new FileReader();
               reader.onloadend = () => resolve(reader.result as string);
               reader.readAsDataURL(blob);
            });
            return { ...cleanedEl, content: base64 };
          } catch (e) {
            console.error('Image processing failed', e);
            return cleanedEl;
          }
        }
        return cleanedEl;
      }));

      setElements(processedElements);

      // Attendre que React mette à jour le DOM avec les nouvelles sources d'images (Base64)
      await new Promise(resolve => setTimeout(resolve, 1000));

      const element = document.getElementById('print-target');
      if (!element) return;
      
      // Créer une copie temporaire pour le rendu sans les classes Tailwind problématiques
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.innerHTML = element.innerHTML;
      document.body.appendChild(tempContainer);
      
      // Remplacer toutes les classes text-gray-* par des styles inline
      const allTextElements = tempContainer.querySelectorAll('.text-gray-900, .text-gray-800, .text-gray-700, .text-gray-600');
      allTextElements.forEach((el: any) => {
        el.style.color = 'rgb(17, 24, 39)'; // gray-900 en RGB
        el.classList.remove('text-gray-900', 'text-gray-800', 'text-gray-700', 'text-gray-600');
      });
      
      // Remplacer les bg-gray-* 
      const allBgElements = tempContainer.querySelectorAll('.bg-gray-50, .bg-gray-100');
      allBgElements.forEach((el: any) => {
        el.style.backgroundColor = 'rgb(249, 250, 251)'; // gray-50 en RGB
        el.classList.remove('bg-gray-50', 'bg-gray-100');
      });
  
      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: false,
        foreignObjectRendering: false,
        onclone: (clonedDoc) => {
          // Nettoyer tous les styles inline et computed problématiques dans le document cloné
          const allElements = clonedDoc.querySelectorAll('*');
          allElements.forEach((el: any) => {
            // Obtenir le style calculé de l'élément original
            const originalEl = document.querySelector(`[data-element-id="${el.getAttribute('data-element-id')}"]`) || el;
            const computedStyle = window.getComputedStyle(originalEl);
            
            // Forcer les couleurs en format RGB/RGBA
            ['backgroundColor', 'color', 'borderColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'].forEach(prop => {
              try {
                const computed = (computedStyle as any)[prop];
                if (computed && computed !== 'transparent' && computed !== 'rgba(0, 0, 0, 0)') {
                  // Convertir toute couleur en RGB pour éviter les formats non supportés
                  if (computed.includes('lab(') || computed.includes('lch(') || computed.includes('oklch(') || 
                      !computed.match(/^(#|rgb|rgba|transparent)/i)) {
                    // Utiliser une valeur par défaut sûre
                    if (prop.includes('background')) {
                      el.style[prop] = 'rgb(255, 255, 255)';
                    } else if (prop.includes('border')) {
                      el.style[prop] = 'rgb(209, 213, 219)'; // gray-300
                    } else {
                      el.style[prop] = 'rgb(0, 0, 0)';
                    }
                  } else {
                    el.style[prop] = computed;
                  }
                }
              } catch (e) {
                // En cas d'erreur, utiliser une valeur sûre
                console.warn('Color conversion error for', prop, e);
              }
            });
            
            // Forcer aussi les bordures à être explicites
            if (el.style.border || computedStyle.border) {
              const borderWidth = computedStyle.borderWidth || '1px';
              const borderStyle = computedStyle.borderStyle || 'solid';
              const borderColor = computedStyle.borderColor || 'rgb(209, 213, 219)';
              
              if (borderColor.includes('lab(') || borderColor.includes('lch(')) {
                el.style.border = `${borderWidth} ${borderStyle} rgb(209, 213, 219)`;
              }
            }
          });
        }
      });
  
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Nom du fichier basé sur la première variable ou le nom du template
      const firstVar = detectedVars.length > 0 ? variables[detectedVars[0]] : template.name;
      const fileName = firstVar ? `${firstVar.replace(/[^a-z0-9]/gi, '_')}.pdf` : 'document.pdf';
      pdf.save(fileName);
      
      // Nettoyer le conteneur temporaire
      document.body.removeChild(tempContainer);
    } catch (error) {
      console.error('PDF generation error:', error);
      // Nettoyer en cas d'erreur aussi
      const tempContainer = document.querySelector('div[style*="-9999px"]');
      if (tempContainer) document.body.removeChild(tempContainer);
      throw error;
    } finally {
      setIsGenerating(false);
    }
  };

  // Inject variables into elements for rendering
  const renderedElements = elements.map(el => {
    if (el.type === 'text' && el.content) {
      let newContent = el.content;
      Object.entries(variables).forEach(([key, value]) => {
        newContent = newContent.replace(new RegExp(`{{${key}}}`, 'g'), value);
      });
      return { ...el, content: newContent };
    }
    
    // Inject table rows data
    if (el.type === 'table') {
      const rows = tableRows[el.id] || [];
      // Remplacer les variables dans les valeurs des lignes
      const processedRows = rows.map(row => {
        const processedRow: Record<string, string> = {};
        Object.entries(row).forEach(([colId, value]) => {
          let newValue = value;
          Object.entries(variables).forEach(([key, varValue]) => {
            newValue = newValue.replace(new RegExp(`{{${key}}}`, 'g'), varValue);
          });
          processedRow[colId] = newValue;
        });
        return processedRow;
      });
      
      return { ...el, data: { rows: processedRows } };
    }
    
    return el;
  });

  return (
    <div className="min-h-screen bg-gray-100/50 flex flex-col">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
               <ArrowLeft size={20} />
            </Link>
            <div>
               <h1 className="font-bold text-gray-900 text-lg">Générer la facture</h1>
               <p className="text-xs text-gray-800">Modèle : {template.name}</p>
            </div>
          </div>
          <button 
            onClick={handleDownload}
            disabled={isGenerating}
            className="bg-green-600 text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-green-700 shadow-lg shadow-green-600/20 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-wait"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Génération...
              </>
            ) : (
              <>
                <Download size={18} /> Télécharger PDF
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-1 max-w-7xl mx-auto w-full p-8 gap-8 justify-center items-start">
        {/* Form Panel */}
        <div className="w-96 bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
          {/* Variables Section */}
          {detectedVars.length > 0 && (
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Données variables</h3>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100 mb-6">
                <AlertCircle className="text-blue-600 shrink-0 mt-0.5" size={18} />
                <p className="text-xs text-blue-700 leading-relaxed">
                  Remplissez les champs ci-dessous pour mettre à jour la facture en temps réel.
                </p>
              </div>
              
              <div className="space-y-5">
                {detectedVars.map(varName => (
                  <div key={varName}>
                    <label htmlFor={`var-${varName}`} className="block text-sm font-medium text-gray-800 mb-1.5 capitalize">
                      {varName.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <input 
                      id={`var-${varName}`}
                      type="text" 
                      value={variables[varName] || ''} 
                      onChange={e => setVariables({...variables, [varName]: e.target.value})}
                      className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-shadow"
                      placeholder={`Entrez ${varName}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tables Section */}
          {elements.filter(el => el.type === 'table').map(tableElement => {
            const tableColumns = tableElement.columns || [];
            const rows = tableRows[tableElement.id] || [];
            
            if (tableColumns.length === 0) return null;
            
            return (
              <div key={tableElement.id} className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center gap-2 mb-4">
                  <TableIcon size={20} className="text-gray-700" />
                  <h3 className="font-bold text-gray-900 text-lg">Lignes du tableau</h3>
                </div>
                
                <div className="space-y-4">
                  {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Ligne {rowIndex + 1}</span>
                        <button
                          onClick={() => {
                            const newRows = rows.filter((_, i) => i !== rowIndex);
                            setTableRows({ ...tableRows, [tableElement.id]: newRows });
                          }}
                          className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                          title="Supprimer la ligne"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        {tableColumns.map(col => (
                          <div key={col.id}>
                            <label htmlFor={`table-${tableElement.id}-row-${rowIndex}-col-${col.id}`} className="block text-xs font-medium text-gray-800 mb-1">
                              {col.label}
                            </label>
                            <input
                              id={`table-${tableElement.id}-row-${rowIndex}-col-${col.id}`}
                              type="text"
                              value={row[col.id] || ''}
                              onChange={(e) => {
                                const newRows = [...rows];
                                newRows[rowIndex] = { ...row, [col.id]: e.target.value };
                                setTableRows({ ...tableRows, [tableElement.id]: newRows });
                              }}
                              className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 text-sm focus:border-blue-500 focus:ring-blue-500"
                              placeholder={col.value || `Valeur pour ${col.label}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={() => {
                      const emptyRow: Record<string, string> = {};
                      tableColumns.forEach(col => {
                        emptyRow[col.id] = '';
                      });
                      setTableRows({ ...tableRows, [tableElement.id]: [...rows, emptyRow] });
                    }}
                    className="w-full py-2.5 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <Plus size={18} />
                    Ajouter une ligne
                  </button>
                </div>
              </div>
            );
          })}
          
          {detectedVars.length === 0 && elements.filter(el => el.type === 'table').length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">Aucune variable ou tableau détecté dans ce modèle.</p>
              <p className="text-gray-400 text-xs mt-2">Utilisez la syntaxe <code className="bg-gray-100 px-1.5 py-0.5 rounded">{'{{nomVariable}}'}</code> dans vos éléments.</p>
            </div>
          )}
        </div>

        {/* Preview */}
        <div className="flex-1 overflow-auto flex justify-center">
           <div className="bg-white shadow-2xl border border-gray-200">
              <div id="print-target">
                 <InvoiceRenderer elements={renderedElements} globalSettings={globalSettings} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
