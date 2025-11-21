import React from 'react';

export interface GlobalSettings {
  padding: number;
  headerHeight?: number;
  footerHeight?: number;
}

export interface TableColumn {
  id: string;
  label: string;
  value?: string; // Valeur de la cellule (peut contenir des variables {{...}})
  width?: number;
  align?: 'left' | 'center' | 'right'; // Alignement du texte dans la colonne
  fontWeight?: 'normal' | 'bold'; // Gras
  fontStyle?: 'normal' | 'italic'; // Italique
  textDecoration?: 'none' | 'underline'; // Souligné
}

export interface EditorElement {
  id: string;
  type: 'text' | 'image' | 'box' | 'line' | 'table' | 'container';
  x: number;
  y: number;
  w: number | string;
  h: number | string;
  parentId?: string | null;
  content?: string;
  style?: React.CSSProperties;
  data?: any; // Pour les données complexes comme les tableaux
  columns?: TableColumn[]; // Pour les colonnes des tableaux
}

export default function InvoiceRenderer({ elements, globalSettings, id }: { elements: EditorElement[], globalSettings?: GlobalSettings, id?: string }) {
  const padding = globalSettings?.padding ?? 0;
  const headerHeight = globalSettings?.headerHeight ?? 0;
  const footerHeight = globalSettings?.footerHeight ?? 0;

  // Helper pour le rendu récursif
  const renderElement = (element: EditorElement) => {
    const children = elements.filter(e => e.parentId === element.id);

    return (
        <div
          key={element.id}
          style={{
            position: 'absolute',
            top: element.y,
            left: element.x,
            width: element.w,
            height: element.h,
            ...element.style,
          }}
        >
          {element.type === 'text' && (
            <div 
              className="w-full h-full whitespace-pre-wrap" 
              style={{ 
                color: element.style?.color,
                textAlign: element.style?.textAlign as any,
                fontSize: element.style?.fontSize,
                fontWeight: element.style?.fontWeight,
                fontStyle: element.style?.fontStyle,
                textDecoration: element.style?.textDecoration
              }}
            >
              {element.content}
            </div>
          )}
          
          {(element.type === 'box' || element.type === 'container') && (
            <div 
              className="w-full h-full relative"
              style={{ 
                backgroundColor: element.style?.backgroundColor || (element.type === 'container' ? 'transparent' : '#e5e7eb'), 
                borderColor: element.style?.borderColor || '#9ca3af',
                borderWidth: element.style?.borderWidth || '1px',
                borderStyle: 'solid',
                borderRadius: element.style?.borderRadius || '0px'
              }} 
            >
               {/* Rendu des enfants pour les conteneurs */}
               {children.map(renderElement)}
            </div>
          )}

          {element.type === 'image' && element.content && (
            <div 
              className="w-full h-full overflow-hidden"
              style={{
                borderRadius: element.style?.borderRadius || '0px'
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={element.content} 
                alt="Element" 
                className="w-full h-full object-cover block" 
                style={{
                  pointerEvents: 'none' 
                }}
              />
            </div>
          )}
          
          {element.type === 'line' && (
            <div 
              className="w-full h-full flex items-center"
            >
               <div 
                 className="w-full" 
                 style={{ 
                   height: element.style?.height || '2px', 
                   backgroundColor: element.style?.backgroundColor || 'black' 
                 }} 
               />
            </div>
          )}

          {element.type === 'table' && (
            <div className="w-full h-full overflow-hidden">
              <table className="w-full border-collapse text-sm text-gray-900">
                <thead>
                  <tr style={{ backgroundColor: element.style?.backgroundColor || '#f3f4f6' }}>
                    {(element.columns || [{ id: '1', label: 'Colonne 1' }, { id: '2', label: 'Colonne 2' }]).map((col) => (
                      <th 
                        key={col.id} 
                        className="border p-2 text-gray-900"
                        style={{ 
                          borderColor: element.style?.borderColor || '#d1d5db',
                          minWidth: col.width || 100,
                          textAlign: col.align || 'left',
                          fontWeight: col.fontWeight || 'bold',
                          fontStyle: col.fontStyle || 'normal',
                          textDecoration: col.textDecoration || 'none'
                        }}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Afficher les lignes de données si disponibles, sinon afficher des exemples */}
                  {element.data?.rows && element.data.rows.length > 0 ? (
                    element.data.rows.map((row: Record<string, string>, rowIndex: number) => (
                      <tr key={rowIndex}>
                        {(element.columns || []).map((col) => (
                          <td 
                            key={col.id} 
                            className="border p-2 text-gray-900"
                            style={{ 
                              borderColor: element.style?.borderColor || '#d1d5db',
                              textAlign: col.align || 'left',
                              fontWeight: col.fontWeight || 'normal',
                              fontStyle: col.fontStyle || 'normal',
                              textDecoration: col.textDecoration || 'none'
                            }}
                          >
                            {row[col.id] || col.value || ''}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <>
                      <tr>
                        {(element.columns || [{ id: '1', label: 'Colonne 1' }, { id: '2', label: 'Colonne 2' }]).map((col) => (
                          <td 
                            key={col.id} 
                            className="border p-2 text-gray-900"
                            style={{ 
                              borderColor: element.style?.borderColor || '#d1d5db',
                              textAlign: col.align || 'left',
                              fontWeight: col.fontWeight || 'normal',
                              fontStyle: col.fontStyle || 'normal',
                              textDecoration: col.textDecoration || 'none'
                            }}
                          >
                            {col.value || 'Exemple'}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        {(element.columns || [{ id: '1', label: 'Colonne 1' }, { id: '2', label: 'Colonne 2' }]).map((col) => (
                          <td 
                            key={col.id} 
                            className="border p-2 text-gray-900"
                            style={{ 
                              borderColor: element.style?.borderColor || '#d1d5db',
                              textAlign: col.align || 'left',
                              fontWeight: col.fontWeight || 'normal',
                              fontStyle: col.fontStyle || 'normal',
                              textDecoration: col.textDecoration || 'none'
                            }}
                          >
                            {col.value || 'Exemple'}
                          </td>
                        ))}
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
    );
  };

  // On ne rend que les éléments racine (sans parent)
  const rootElements = elements.filter(el => !el.parentId);

  return (
    <div 
      id={id}
      className="bg-white shadow-none relative print:shadow-none"
      style={{ 
        width: '794px', 
        height: '1123px', 
        position: 'relative', 
        overflow: 'hidden',
        padding: `${padding}px`,
        paddingTop: `${padding + headerHeight}px`,
        paddingBottom: `${padding + footerHeight}px`
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
         {rootElements.map(renderElement)}
      </div>
    </div>
  );
}
