'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  DndContext, 
  useDraggable, 
  useDroppable, 
  DragOverlay, 
  MouseSensor, 
  TouchSensor, 
  useSensor, 
  useSensors, 
  DragEndEvent, 
  DragStartEvent
} from '@dnd-kit/core';
import { 
  Save, Type, Image as ImageIcon, Minus, Box, ArrowLeft, 
  Table as TableIcon, Eye, X, Trash2, Group,
  AlignLeft, AlignCenter, AlignRight, LayoutTemplate, 
  Upload, Link as LinkIcon, Palette, Settings, FileText,
  Plus, ChevronUp, ChevronDown, Bold, Italic, Underline
} from 'lucide-react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import InvoiceRenderer from '@/components/InvoiceRenderer';
import IconSelector from './IconSelector';

// --- Types ---
type ElementType = 'text' | 'image' | 'box' | 'line' | 'table' | 'container';

export interface GlobalSettings {
  padding: number;
  headerHeight: number;
  footerHeight: number;
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
  type: ElementType;
  x: number;
  y: number;
  w: number | string;
  h: number | string;
  parentId: string | null; // null = page root
  content?: string;
  style?: React.CSSProperties;
  data?: any;
  columns?: TableColumn[]; // Pour les tableaux
}

// --- Constants ---
const CANVAS_WIDTH = 794; // A4 Width in px (approx)
const CANVAS_HEIGHT = 1123; // A4 Height in px

// --- Helper Components ---

// Input with Unit Selector
interface InputWithUnitProps {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  id: string;
}

function InputWithUnit({ label, value, onChange, id }: InputWithUnitProps) {
  const parseValue = (val: string | number) => {
    const strVal = String(val);
    // Extract unit: check for % first, then check for letters at the end
    let unit = 'px';
    let numStr = strVal;
    
    if (strVal.includes('%')) {
      unit = '%';
      numStr = strVal.replace('%', '');
    } else if (strVal.match(/[a-zA-Z]+$/)) {
      unit = strVal.match(/[a-zA-Z]+$/)?.[0] || 'px';
      numStr = strVal.replace(/[a-zA-Z]+$/, '');
    }
    
    const num = parseFloat(numStr);
    return { num: isNaN(num) ? 0 : num, unit };
  };

  const { num, unit } = parseValue(value);

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNum = e.target.value;
    if (newNum === '') {
        onChange(unit === 'px' ? 0 : `0${unit}`);
        return;
    }
    const parsed = parseFloat(newNum);
    const valToEmit = isNaN(parsed) ? 0 : parsed;
    onChange(unit === 'px' ? valToEmit : `${valToEmit}${unit}`);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newUnit = e.target.value;
    onChange(newUnit === 'px' ? num : `${num}${newUnit}`);
  };

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-xs font-medium text-gray-900">{label}</label>
      <div className="flex rounded-md shadow-sm">
        <input
          type="number"
          id={id}
          value={num}
          onChange={handleNumChange}
          step="any"
          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md text-sm text-gray-900 border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
        />
        <select
          id={`${id}-unit`}
          title="Unité"
          value={unit}
          onChange={handleUnitChange}
          className="inline-flex items-center px-2 py-2 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="px">px</option>
          <option value="%">%</option>
          <option value="em">em</option>
          <option value="rem">rem</option>
        </select>
      </div>
    </div>
  );
}


// --- Components ---

// 1. Sidebar Item (Source)
function SidebarItem({ type, icon: Icon, label }: { type: ElementType, icon: any, label: string }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: `sidebar-${type}`,
    data: { type, isSidebar: true },
  });

  return (
    <div 
      ref={setNodeRef} 
      {...listeners} 
      {...attributes} 
      className="group p-3 bg-white border border-gray-200 rounded-lg cursor-grab hover:bg-blue-50 hover:border-blue-200 shadow-sm transition-all flex items-center gap-3"
    >
      <div className="p-1.5 bg-gray-100 rounded-md text-gray-800 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
         <Icon size={18} />
      </div>
      <span className="font-medium text-sm text-gray-800 group-hover:text-blue-700">{label}</span>
    </div>
  );
}

// 2. Draggable Rendered Element
interface DraggableElementProps {
  element: EditorElement;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onResize: (id: string, w: number | string, h: number | string) => void;
  children?: React.ReactNode;
}

function DraggableElement({ element, isSelected, onSelect, onResize, children }: DraggableElementProps) {
  const { 
    attributes, 
    listeners, 
    setNodeRef: setDraggableRef, 
    transform, 
    isDragging 
  } = useDraggable({
    id: element.id,
    data: { ...element, isSidebar: false },
  });

  // Make containers droppable
  const { setNodeRef: setDroppableRef, isOver: isDroppableOver } = useDroppable({
    id: element.id,
    data: { isContainer: true, element },
    disabled: element.type !== 'container'
  });

  const elementRef = useRef<HTMLElement | null>(null);

  // Merge refs
  const setRefs = useCallback((node: HTMLElement | null) => {
    setDraggableRef(node);
    if (element.type === 'container') {
        setDroppableRef(node);
    }
    elementRef.current = node;
  }, [setDraggableRef, setDroppableRef, element.type]);

  // Resize Logic
  const resizeRef = useRef<{ 
    w: number, 
    h: number, 
    startX: number, 
    startY: number,
    unitW: string,
    unitH: string,
    parentW: number,
    parentH: number
  } | null>(null);

  const handleResizeStart = (e: React.MouseEvent, handle: string) => {
    e.stopPropagation();
    
    // Use actual visual dimensions for smooth resizing from current state
    let currentW = 100;
    let currentH = 100;
    let parentW = 0;
    let parentH = 0;

    if (elementRef.current) {
        currentW = elementRef.current.offsetWidth;
        currentH = elementRef.current.offsetHeight;
        if (elementRef.current.parentElement) {
            parentW = elementRef.current.parentElement.offsetWidth;
            parentH = elementRef.current.parentElement.offsetHeight;
        }
    } else {
        currentW = typeof element.w === 'number' ? element.w : parseFloat(String(element.w)) || 100;
        currentH = typeof element.h === 'number' ? element.h : parseFloat(String(element.h)) || 100;
    }

    const getUnit = (val: number | string) => {
        if (typeof val === 'number') return 'px';
        return String(val).replace(/^[-\d.]+/g, '') || 'px';
    };

    resizeRef.current = { 
        w: currentW, 
        h: currentH, 
        startX: e.clientX, 
        startY: e.clientY,
        unitW: getUnit(element.w),
        unitH: getUnit(element.h),
        parentW,
        parentH
    };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!resizeRef.current) return;
      const dx = moveEvent.clientX - resizeRef.current.startX;
      const dy = moveEvent.clientY - resizeRef.current.startY;

      let newW_px = resizeRef.current.w;
      let newH_px = resizeRef.current.h;

      if (handle.includes('e')) newW_px += dx;
      if (handle.includes('s')) newH_px += dy;
      
      newW_px = Math.max(20, newW_px);
      newH_px = Math.max(20, newH_px);

      let finalW: number | string = newW_px;
      let finalH: number | string = newH_px;

      // Preserve Unit: %
      if (resizeRef.current.unitW === '%' && resizeRef.current.parentW > 0) {
          finalW = `${((newW_px / resizeRef.current.parentW) * 100).toFixed(2)}%`;
      }
      
      if (resizeRef.current.unitH === '%' && resizeRef.current.parentH > 0) {
          finalH = `${((newH_px / resizeRef.current.parentH) * 100).toFixed(2)}%`;
      }
      
      onResize(element.id, finalW, finalH);
    };

    const handleMouseUp = () => {
      resizeRef.current = null;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Styles
  const style: React.CSSProperties = {
    position: 'absolute',
    top: element.y,
    left: element.x,
    width: element.w,
    height: element.h,
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    zIndex: isSelected ? 50 : (element.type === 'container' ? 10 : 20),
    opacity: isDragging ? 0.5 : 1,
    ...element.style
  };

  // Visual feedback for Drop Target (Container)
  const isContainerActive = isDroppableOver && element.type === 'container' && !isDragging;
  const containerStyle: React.CSSProperties = {
    ...style,
    backgroundColor: isContainerActive ? 'rgba(59, 130, 246, 0.1)' : style.backgroundColor,
    borderColor: isContainerActive ? '#3b82f6' : (isSelected ? '#2563eb' : (style.borderColor || 'transparent')),
    borderWidth: isContainerActive || isSelected ? '2px' : (style.borderWidth || (element.type === 'container' ? '1px' : '0')),
    borderStyle: element.type === 'container' ? 'dashed' : 'solid',
  };

  const renderContent = () => {
    switch (element.type) {
      case 'text':
        return <div className="w-full h-full overflow-hidden leading-tight" style={{ 
          color: element.style?.color,
          fontWeight: element.style?.fontWeight,
          fontStyle: element.style?.fontStyle,
          textDecoration: element.style?.textDecoration
        }}>{element.content}</div>;
      case 'image':
        return (
          <div 
            className="w-full h-full overflow-hidden flex items-center justify-center bg-gray-50 border border-dashed border-gray-300"
            style={{ borderRadius: element.style?.borderRadius || '0px' }}
          >
            {element.content ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={element.content} alt="Element" className="w-full h-full object-cover" />
            ) : (
              <div className="text-gray-800 flex flex-col items-center"><ImageIcon size={24} /><span className="text-[10px]">Image</span></div>
            )}
          </div>
        );
      case 'box':
      case 'container':
        return (
           <div className="w-full h-full relative">
              {element.type === 'container' && <div className="absolute top-0 right-0 p-1"><span className="text-[10px] text-gray-800 bg-gray-100 px-1 rounded">Groupe</span></div>}
             {children}
          </div>
        );
      case 'line':
         return <div className="w-full h-full flex items-center"><div className="w-full" style={{ height: element.style?.height || '2px', backgroundColor: element.style?.backgroundColor || 'black' }}></div></div>;
      case 'table':
        const columns = element.columns || [{ id: '1', label: 'Colonne 1' }, { id: '2', label: 'Colonne 2' }];
        return (
           <div className="w-full h-full overflow-hidden bg-white border border-gray-200 text-xs text-gray-900">
              <div className="p-2 bg-gray-50 border-b text-center text-gray-900">Tableau</div>
              <div className="p-2">
                 <div className="flex border-b pb-1 font-bold text-gray-900">
                   {columns.map((col, idx) => (
                     <div key={col.id} className="flex-1 px-1" style={{ 
                       minWidth: col.width || 100, 
                       textAlign: col.align || 'left',
                       fontWeight: col.fontWeight || 'bold',
                       fontStyle: col.fontStyle || 'normal',
                       textDecoration: col.textDecoration || 'none'
                     }}>
                       {col.label}
                </div>
                   ))}
                </div>
                 <div className="flex text-gray-900 mt-2">
                   {columns.map((col) => (
                     <div key={col.id} className="flex-1 px-1 truncate" style={{ 
                       minWidth: col.width || 100, 
                       textAlign: col.align || 'left',
                       fontWeight: col.fontWeight || 'normal',
                       fontStyle: col.fontStyle || 'normal',
                       textDecoration: col.textDecoration || 'none'
                     }}>
                       {col.value || 'Exemple'}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div 
      ref={setRefs} 
      style={containerStyle}
      {...listeners} 
      {...attributes}
      onClick={(e) => { e.stopPropagation(); onSelect(element.id); }}
      className={`group cursor-move`}
    >
      {renderContent()}
       
       {isSelected && !isDragging && (
        <>
          <div className="absolute -top-6 left-0 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded shadow-md whitespace-nowrap z-50">
             x:{Math.round(element.x)} y:{Math.round(element.y)}
        </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-white border border-blue-600 cursor-se-resize z-50 -mr-1.5 -mb-1.5" onMouseDown={(e) => handleResizeStart(e, 'se')} />
          <div className="absolute top-1/2 right-0 w-3 h-3 bg-white border border-blue-600 cursor-e-resize z-50 -mr-1.5 -mt-1.5" onMouseDown={(e) => handleResizeStart(e, 'e')} />
          <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white border border-blue-600 cursor-s-resize z-50 -mb-1.5 -ml-1.5" onMouseDown={(e) => handleResizeStart(e, 's')} />
        </>
      )}
    </div>
  );
}

// --- Main Builder Client ---

export default function BuilderClient({ template }: { template: any }) {
  // State
  const [elements, setElements] = useState<EditorElement[]>([]);
  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>({ padding: 40, headerHeight: 0, footerHeight: 0 });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeDragItem, setActiveDragItem] = useState<any>(null); // For DragOverlay
  
  // UI State
  const [templateName, setTemplateName] = useState(template.name);
  const [customIcon, setCustomIcon] = useState<string>(template.customIcon || 'File');
  const [isMounted, setIsMounted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [imageTab, setImageTab] = useState<'url' | 'upload'>('url');
  const [showTableDialog, setShowTableDialog] = useState(false);
  const [editingTableId, setEditingTableId] = useState<string | null>(null);

  const alignElement = (alignment: 'left' | 'center' | 'right') => {
    if (!selectedId) return;
    const el = elements.find(e => e.id === selectedId);
    if (!el) return;

    const canvasWidth = 794;
    const padding = globalSettings.padding;
    let newX = el.x;
    const elWidth = typeof el.w === 'number' ? el.w : 100; // Fallback for non-px width in alignment calc

    switch (alignment) {
        case 'left':
            newX = padding;
            break;
        case 'center':
            newX = (canvasWidth - elWidth) / 2;
            break;
        case 'right':
            newX = canvasWidth - elWidth - padding;
            break;
    }

    updateElement(selectedId, { x: newX });
  };

  const addVariable = (variable: string) => {
    if (!selectedId) return;
    const el = elements.find(e => e.id === selectedId);
    if (el && el.type === 'text') {
      const newContent = (el.content || '') + ` {{${variable}}}`;
      updateElement(selectedId, { content: newContent });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedId) return;
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateElement(selectedId, { content: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // Sensors
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }), // 5px movement required to start drag
    useSensor(TouchSensor)
  );

  // Init
  useEffect(() => {
    setIsMounted(true);
    try {
      const parsed = JSON.parse(template.content);
      if (parsed.elements) {
        setElements(parsed.elements);
        setGlobalSettings(parsed.globalSettings || { padding: 40, headerHeight: 0, footerHeight: 0 });
      } else if (Array.isArray(parsed)) {
        setElements(parsed);
      }
    } catch {
      setElements([]);
    }
  }, [template.content]);

  // Canvas Droppable
  const { setNodeRef: setCanvasRef, isOver: isCanvasOver } = useDroppable({
    id: 'canvas-root',
    data: { isRoot: true }
  });

  // --- Helpers ---
  const getElementRect = (id: string) => {
    // This is a simplified logical rect finder for calculations, 
    // relying on React state rather than DOM for truth
    return elements.find(e => e.id === id);
  };

  // --- Handlers ---

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveDragItem(active.data.current);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveDragItem(null);

    const activeId = active.id as string;
    const isSidebarItem = active.data.current?.isSidebar;
    
    // --- CAS 1 : NOUVEL ÉLÉMENT (SIDEBAR) ---
    // On l'ajoute TOUJOURS, même si lâché "à côté" (over est null)
    if (isSidebarItem) {
       const type = active.data.current?.type as ElementType;
       if (!type) return;

       let newParentId: string | null = null;
       let newX = 50; // Position par défaut (coin haut gauche)
       let newY = 50;

       // Si on a une cible valide (survol d'un container ou du canvas)
       if (over) {
           const overElement = elements.find(e => e.id === over.id);
           
           // Gestion parenté
           if (overElement && overElement.type === 'container') {
               newParentId = overElement.id;
           }
           
           // Calcul position relative précis
           const activeRect = active.rect.current?.translated;
           const overRect = over.rect;

      if (activeRect && overRect) {
         newX = activeRect.left - overRect.left;
         newY = activeRect.top - overRect.top;
               
               // Ajustement pour le Padding/Header si on est sur le root
               if (newParentId === null) {
                  newX -= globalSettings.padding;
                  newY -= (globalSettings.padding + globalSettings.headerHeight);
               }
           }
       } else {
           // Si lâché dans le vide (zone grise), on met des coordonnées par défaut
           // pour que l'utilisateur voie l'élément apparaitre
           console.log("Drop hors zone détecté, ajout forcé sur le root");
      }

       // Sécurité : empêcher les coordonnées négatives
       // Pour le root (qui a des marges), on autorise un peu de débordement négatif si l'utilisateur le veut vraiment,
       // mais par défaut on snap à 0.
       newX = Math.max(0, newX);
       newY = Math.max(0, newY);

      const newElement: EditorElement = {
        id: uuidv4(),
        type,
        x: newX, 
        y: newY,
          w: type === 'container' ? 300 : (type === 'table' ? 500 : 200),
          h: type === 'container' ? 200 : (type === 'line' ? 5 : 100),
        parentId: newParentId,
          content: type === 'text' ? 'Texte' : undefined,
          style: { 
            backgroundColor: type === 'box' ? '#f3f4f6' : undefined,
            borderColor: '#000000',
            fontSize: '14px'
          },
          columns: type === 'table' ? [
            { id: uuidv4(), label: 'Colonne 1', value: '', align: 'left', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
            { id: uuidv4(), label: 'Colonne 2', value: '', align: 'left', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' }
          ] : undefined
       };
       
       setElements(prev => [...prev, newElement]);
      setSelectedId(newElement.id);
       return;
    }

    // --- CAS 2 : DÉPLACEMENT D'UN ÉLÉMENT EXISTANT ---
    if (!over) return; 
    
    // Eviter le drop sur soi-même (particulièrement pour les conteneurs)
    if (active.id === over.id) return;

    // 1. Determine Drop Target (Parent)
    let newParentId: string | null = null; 
    
    // ... suite logique existante pour le déplacement ...
    if (over.id !== 'canvas-root') {
       const overElement = elements.find(e => e.id === over.id);
       if (overElement && overElement.type === 'container') {
          // Vérification anti-boucle : ne pas devenir enfant de soi-même
          if (overElement.id !== activeId) {
              newParentId = overElement.id;
          }
       }
    }

    const activeRect = active.rect.current?.translated;
    const overRect = over.rect;

    if (!activeRect || !overRect) return;

    let newX = activeRect.left - overRect.left;
    let newY = activeRect.top - overRect.top;

    // Ajustement pour le Padding/Header si on est sur le root
    if (newParentId === null) {
        newX -= globalSettings.padding;
        newY -= (globalSettings.padding + globalSettings.headerHeight);
    }

    newX = Math.max(0, newX);
    newY = Math.max(0, newY);

    setElements(prev => prev.map(el => {
        if (el.id === activeId) {
          // Si la largeur est de 100%, on force X à 0 pour rester aligné avec le conteneur parent (ou les marges)
          const finalX = (el.w === '100%') ? 0 : newX;

          return {
            ...el,
            x: finalX,
            y: newY,
            parentId: newParentId
          };
        }
        return el;
     }));
  };

  // --- Element Manipulators ---
  const updateElement = (id: string, updates: Partial<EditorElement>) => {
    setElements(prev => prev.map(el => el.id === id ? { ...el, ...updates } : el));
  };

  const deleteElement = (id: string) => {
    // Also delete children
    setElements(prev => {
      const toDelete = new Set<string>([id]);
      let added = true;
      while(added) {
        added = false;
        prev.forEach(el => {
          if (el.parentId && toDelete.has(el.parentId) && !toDelete.has(el.id)) {
            toDelete.add(el.id);
            added = true;
          }
        });
      }
      return prev.filter(el => !toDelete.has(el.id));
    });
    setSelectedId(null);
  };

  // --- Rendering ---

  // Recursive Renderer
  const renderElements = (parentId: string | null) => {
     return elements
       .filter(el => el.parentId === parentId)
       .map(el => (
         <DraggableElement
           key={el.id}
           element={el}
           isSelected={selectedId === el.id}
           onSelect={setSelectedId}
           onResize={(id, w, h) => updateElement(id, { w, h })}
         >
            {/* Recursion for children */}
            {renderElements(el.id)}
         </DraggableElement>
       ));
  };

  if (!isMounted) return null;

  const selectedElement = elements.find(e => e.id === selectedId);

  return (
    <DndContext 
      sensors={sensors} 
      onDragStart={handleDragStart} 
      onDragEnd={handleDragEnd}
    >
       <div className="h-[calc(100vh-64px)] flex flex-col bg-gray-100">
          {/* Header / Toolbar */}
          <div className="h-16 bg-white border-b px-6 flex items-center justify-between shadow-sm shrink-0 z-20">
           <div className="flex items-center gap-4">
                <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full text-gray-800 hover:text-gray-900"><ArrowLeft size={20}/></Link>
             <div>
               <h1 className="font-bold text-gray-900">{templateName}</h1>
             </div>
           </div>
             <div className="flex items-center gap-3">
                <button onClick={() => setShowPreview(true)} className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-gray-700"><Eye size={16}/> Aperçu</button>
           <button 
                  onClick={async () => {
                    setSaving(true);
                    await fetch(`/api/templates/${template.id}`, {
                       method: 'PUT', 
                       body: JSON.stringify({ 
                         content: JSON.stringify({ elements, globalSettings }), 
                         name: templateName,
                         customIcon: customIcon
                       })
                    });
                    setSaving(false);
                  }} 
             disabled={saving}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-blue-700 disabled:opacity-50"
            >
                   <Save size={16}/> {saving ? '...' : 'Enregistrer'}
           </button>
             </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
             <div className="w-72 bg-white border-r p-4 overflow-y-auto shrink-0 z-10">
                <h2 className="text-xs font-bold text-gray-800 uppercase mb-4">Éléments</h2>
            <div className="space-y-2">
            <SidebarItem type="text" icon={Type} label="Texte" />
            <SidebarItem type="image" icon={ImageIcon} label="Image" />
                   <SidebarItem type="container" icon={Group} label="Groupe / Conteneur" />
              <SidebarItem type="box" icon={Box} label="Forme" />
            <SidebarItem type="line" icon={Minus} label="Ligne" />
              <SidebarItem type="table" icon={TableIcon} label="Tableau" />
            </div>
                <div className="mt-8 p-3 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100">
                   Glissez un élément "Groupe" pour créer des zones imbriquées.
            </div>
          </div>

             {/* Main Canvas Area */}
             <div className="flex-1 overflow-auto bg-gray-100/50">
                <div className="min-w-full min-h-full w-fit p-8 flex justify-center items-center">
             <div 
               ref={setCanvasRef}
                     className={`relative bg-white shadow-xl transition-all duration-200 ${isCanvasOver ? 'ring-4 ring-blue-200' : ''}`}
               style={{ 
                        width: `${CANVAS_WIDTH}px`, 
                        height: `${CANVAS_HEIGHT}px`,
                        minWidth: `${CANVAS_WIDTH}px`,
                        minHeight: `${CANVAS_HEIGHT}px`,
                     }}
                     onClick={() => setSelectedId(null)}
                   >
                      {/* Guides / Padding Visuals */}
                      <div className="absolute inset-0 pointer-events-none border border-dashed border-gray-200 z-0"
                 style={{ 
                   top: globalSettings.padding + globalSettings.headerHeight, 
                   bottom: globalSettings.padding + globalSettings.footerHeight, 
                   left: globalSettings.padding, 
                   right: globalSettings.padding 
                 }} 
               />
               
                      {/* Elements Render - Wrapper pour respecter les marges du Root */}
                      <div style={{
                          position: 'absolute',
                          top: globalSettings.padding + globalSettings.headerHeight,
                          left: globalSettings.padding,
                          right: globalSettings.padding,
                          bottom: globalSettings.padding + globalSettings.footerHeight,
                      }}>
                          {renderElements(null)}
                     </div>

                      {elements.length === 0 && (
                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                            <div className="text-center">
                               <Box size={64} className="mx-auto mb-2 text-gray-700"/>
                               <p className="text-gray-800 font-medium">Glisser des éléments ici</p>
                    </div>
                 </div>
               )}
                   </div>
             </div>
          </div>

          {/* Properties Panel */}
             <div className="w-72 bg-white border-l border-gray-200 p-4 overflow-y-auto shrink-0 z-10 shadow-[-4px_0_24px_rgba(0,0,0,0.02)] relative">
            {selectedElement ? (
              <div className="space-y-6 pt-8">
                {/* Bouton Supprimer (Positionné en absolu) */}
                <button 
                  onClick={() => deleteElement(selectedElement.id)}
                  className="absolute top-4 right-4 p-2 bg-white text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-full border border-gray-200 hover:border-red-200 shadow-sm transition-all"
                  title="Supprimer l'élément"
                >
                  <Trash2 size={16} />
                </button>

                <div className="pb-4 border-b border-gray-100">
                  <label className="block text-xs font-medium text-gray-800 uppercase mb-1">Type d'élément</label>
                  <div className="text-gray-900 font-medium capitalize flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                     {selectedElement.type === 'box' ? 'Boîte' : selectedElement.type === 'table' ? 'Tableau' : selectedElement.type}
                  </div>
                </div>
                
                {/* Alignement Position (Global) */}
                <div className="pb-4 border-b border-gray-100">
                   <label className="block text-xs font-medium text-gray-800 uppercase mb-2">Positionnement</label>
                   <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200">
                      <button 
                        onClick={() => alignElement('left')}
                        title="Aligner à gauche"
                        className="flex-1 py-1.5 flex justify-center rounded hover:bg-white hover:shadow-sm text-gray-700 hover:text-gray-900 transition-all"
                      >
                        <LayoutTemplate size={16} className="rotate-180" />
                      </button>
                      <button 
                        onClick={() => alignElement('center')}
                        title="Centrer horizontalement"
                        className="flex-1 py-1.5 flex justify-center rounded hover:bg-white hover:shadow-sm text-gray-700 hover:text-gray-900 transition-all"
                      >
                        <LayoutTemplate size={16} />
                      </button>
                      <button 
                        onClick={() => alignElement('right')}
                        title="Aligner à droite"
                        className="flex-1 py-1.5 flex justify-center rounded hover:bg-white hover:shadow-sm text-gray-700 hover:text-gray-900 transition-all"
                      >
                        <LayoutTemplate size={16} />
                      </button>
                  </div>
                </div>
                
                {/* Common Props - Utilisation du nouveau composant InputWithUnit */}
                <div className="grid grid-cols-2 gap-4">
                   <InputWithUnit 
                     id="pos-x" 
                     label="Position X" 
                     value={selectedElement.x} 
                     onChange={(val) => updateElement(selectedElement.id, { x: val as number })} 
                   />
                   <InputWithUnit 
                     id="pos-y" 
                     label="Position Y" 
                     value={selectedElement.y} 
                     onChange={(val) => updateElement(selectedElement.id, { y: val as number })} 
                   />
                   <InputWithUnit 
                     id="size-w" 
                     label="Largeur" 
                     value={selectedElement.w} 
                     onChange={(val) => {
                        const updates: Partial<EditorElement> = { w: val };
                        // Si on met la largeur à 100%, on remet X à 0 pour éviter le débordement
                        if (val === '100%') {
                           updates.x = 0;
                        }
                        updateElement(selectedElement.id, updates);
                     }} 
                   />
                   <InputWithUnit 
                     id="size-h" 
                     label="Hauteur" 
                     value={selectedElement.h} 
                     onChange={(val) => updateElement(selectedElement.id, { h: val })} 
                   />
                </div>

                {/* Styles de base */}
                <div className="space-y-4 border-t border-gray-100 pt-4">
                   <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                     <Palette size={12} /> Apparence
                   </h4>
                   
                   {/* Couleur de texte (pour Text) */}
                   {selectedElement.type === 'text' && (
                     <div>
                        <label htmlFor="text-color" className="block text-xs font-medium text-gray-800 mb-1">Couleur du texte</label>
                        <div className="flex items-center gap-2">
                           <input 
                             id="text-color"
                             type="color" 
                             value={selectedElement.style?.color || '#000000'} 
                             onChange={(e) => updateElement(selectedElement.id, { style: { ...selectedElement.style, color: e.target.value } })} 
                             className="h-8 w-8 rounded cursor-pointer border border-gray-200 p-0.5"
                           />
                           <span className="text-xs text-gray-800">{selectedElement.style?.color || '#000000'}</span>
                        </div>
                     </div>
                   )}

                   {/* Couleur de fond (pour Box, Line, Table) */}
                   {(selectedElement.type === 'box' || selectedElement.type === 'line' || selectedElement.type === 'table' || selectedElement.type === 'container') && (
                     <div>
                        <label htmlFor="bg-color" className="block text-xs font-medium text-gray-800 mb-1">
                           {selectedElement.type === 'line' ? 'Couleur de la ligne' : 'Couleur de fond'}
                        </label>
                        <div className="flex items-center gap-2">
                           <input 
                             id="bg-color"
                             type="color" 
                             value={selectedElement.style?.backgroundColor || (selectedElement.type === 'line' ? '#000000' : '#ffffff')} 
                             onChange={(e) => updateElement(selectedElement.id, { style: { ...selectedElement.style, backgroundColor: e.target.value } })} 
                             className="h-8 w-8 rounded cursor-pointer border border-gray-200 p-0.5"
                           />
                        </div>
                     </div>
                   )}

                   {/* Bordure (pour Box et Container) */}
                   {(selectedElement.type === 'box' || selectedElement.type === 'container') && (
                     <>
                       <div>
                          <label htmlFor="border-color" className="block text-xs font-medium text-gray-800 mb-1">Couleur Bordure</label>
                          <input 
                             id="border-color"
                             type="color" 
                             value={selectedElement.style?.borderColor || '#000000'} 
                             onChange={(e) => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderColor: e.target.value } })} 
                             className="h-8 w-8 rounded cursor-pointer border border-gray-200 p-0.5"
                           />
                       </div>
                       <div>
                          <label htmlFor="border-width" className="block text-xs font-medium text-gray-800 mb-1">Épaisseur bordure (px)</label>
                          <input 
                             id="border-width"
                             type="number" 
                             value={parseInt(selectedElement.style?.borderWidth as string) || 1} 
                             onChange={(e) => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderWidth: `${e.target.value}px` } })} 
                             className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                           />
                       </div>
                       <div>
                          <label htmlFor="border-style" className="block text-xs font-medium text-gray-800 mb-1">Style de bordure</label>
                          <select
                             id="border-style"
                             value={selectedElement.style?.borderStyle || 'solid'}
                             onChange={(e) => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderStyle: e.target.value } })}
                             className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                          >
                             <option value="solid">Solide</option>
                             <option value="dashed">Tirets</option>
                             <option value="dotted">Points</option>
                             <option value="double">Double</option>
                             <option value="none">Aucune</option>
                          </select>
                       </div>
                       <div>
                          <label htmlFor="border-radius" className="block text-xs font-medium text-gray-800 mb-1">Arrondi (px)</label>
                          <input 
                             id="border-radius"
                             type="number" 
                             value={parseInt(selectedElement.style?.borderRadius as string) || 0} 
                             onChange={(e) => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderRadius: `${e.target.value}px` } })} 
                             className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                           />
                       </div>
                     </>
                   )}
                </div>

                      {/* Specific Props */}
                {selectedElement.type === 'text' && (
                  <div className="space-y-4 border-t border-gray-100 pt-4">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                     <Type size={12} /> Contenu
                    </h4>
                    
                    <div className="space-y-1">
                       <label className="block text-xs font-medium text-gray-800">Alignement</label>
                       <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200">
                          <button 
                            onClick={() => updateElement(selectedElement.id, { style: { ...selectedElement.style, textAlign: 'left' } })}
                            className={`flex-1 py-1 flex justify-center rounded ${(!selectedElement.style?.textAlign || selectedElement.style?.textAlign === 'left') ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                            title="Gauche"
                          >
                            <AlignLeft size={16} />
                          </button>
                          <button 
                            onClick={() => updateElement(selectedElement.id, { style: { ...selectedElement.style, textAlign: 'center' } })}
                            className={`flex-1 py-1 flex justify-center rounded ${selectedElement.style?.textAlign === 'center' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                            title="Centre"
                          >
                            <AlignCenter size={16} />
                          </button>
                          <button 
                            onClick={() => updateElement(selectedElement.id, { style: { ...selectedElement.style, textAlign: 'right' } })}
                            className={`flex-1 py-1 flex justify-center rounded ${selectedElement.style?.textAlign === 'right' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                            title="Droite"
                          >
                            <AlignRight size={16} />
                          </button>
                       </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="text-content" className="block text-xs font-medium text-gray-800">Texte</label>
                      <textarea 
                        id="text-content"
                        value={selectedElement.content} 
                        onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 min-h-[80px]"
                        rows={4}
                      />
                    </div>
                    
                    <div>
                       <label className="block text-xs font-medium text-gray-800 mb-2">Insérer une variable</label>
                       <div className="flex flex-wrap gap-2">
                          <button onClick={() => addVariable('client')} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded border border-blue-100 hover:bg-blue-100">Client</button>
                          <button onClick={() => addVariable('date')} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded border border-blue-100 hover:bg-blue-100">Date</button>
                          <button onClick={() => addVariable('number')} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded border border-blue-100 hover:bg-blue-100">Numéro</button>
                       </div>
                    </div>

                    <div className="space-y-1">
                       <label htmlFor="text-size" className="block text-xs font-medium text-gray-800">Taille de police (px)</label>
                       <input 
                         id="text-size"
                         type="text" 
                         value={selectedElement.style?.fontSize || ''} 
                         onChange={(e) => updateElement(selectedElement.id, { style: { ...selectedElement.style, fontSize: e.target.value } })} 
                         className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                       />
                    </div>
                    
                    <div className="space-y-1">
                       <label className="block text-xs font-medium text-gray-800 mb-2">Style du texte</label>
                       <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200">
                          <button 
                            onClick={() => updateElement(selectedElement.id, { 
                              style: { 
                                ...selectedElement.style, 
                                fontWeight: selectedElement.style?.fontWeight === 'bold' ? 'normal' : 'bold' 
                              } 
                            })}
                            className={`flex-1 py-1.5 flex justify-center items-center gap-1 rounded ${selectedElement.style?.fontWeight === 'bold' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                            title="Gras"
                          >
                            <Bold size={16} />
                            <span className="text-xs">Gras</span>
                          </button>
                          <button 
                            onClick={() => updateElement(selectedElement.id, { 
                              style: { 
                                ...selectedElement.style, 
                                fontStyle: selectedElement.style?.fontStyle === 'italic' ? 'normal' : 'italic' 
                              } 
                            })}
                            className={`flex-1 py-1.5 flex justify-center items-center gap-1 rounded ${selectedElement.style?.fontStyle === 'italic' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                            title="Italique"
                          >
                            <Italic size={16} />
                            <span className="text-xs">Italique</span>
                          </button>
                          <button 
                            onClick={() => updateElement(selectedElement.id, { 
                              style: { 
                                ...selectedElement.style, 
                                textDecoration: selectedElement.style?.textDecoration === 'underline' ? 'none' : 'underline' 
                              } 
                            })}
                            className={`flex-1 py-1.5 flex justify-center items-center gap-1 rounded ${selectedElement.style?.textDecoration === 'underline' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                            title="Souligné"
                          >
                            <Underline size={16} />
                            <span className="text-xs">Souligné</span>
                          </button>
                       </div>
                    </div>
                  </div>
                )}

               {/* Image Properties */}
               {selectedElement.type === 'image' && (
                 <div className="space-y-4 border-t border-gray-100 pt-4">
                   <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <ImageIcon size={12} /> Source de l'image
                   </h4>
                   
                   <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200 mb-3">
                      <button 
                        onClick={() => setImageTab('url')}
                        className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${imageTab === 'url' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-800 hover:text-gray-900'}`}
                      >
                        Lien URL
                      </button>
                      <button 
                        onClick={() => setImageTab('upload')}
                        className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${imageTab === 'upload' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-800 hover:text-gray-900'}`}
                      >
                        Importer
                      </button>
                   </div>

                   {imageTab === 'url' ? (
                     <div className="space-y-1">
                        <label htmlFor="img-url" className="block text-xs font-medium text-gray-800">URL de l'image</label>
                        <div className="flex items-center gap-2">
                          <input 
                            id="img-url"
                            key="url-input"
                            type="text" 
                            value={selectedElement.content || ''} 
                            onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                            placeholder="https://..."
                          />
                           <LinkIcon size={16} className="text-gray-800 shrink-0" />
                        </div>
                     </div>
                   ) : (
                     <div className="space-y-1">
                        <label htmlFor="img-file" className="block text-xs font-medium text-gray-800">Fichier local</label>
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors text-center cursor-pointer relative">
                           <input 
                             id="img-file"
                             key="file-input"
                             type="file" 
                             accept="image/*"
                             onChange={handleImageUpload}
                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                           />
                           <Upload size={20} className="mx-auto text-gray-800 mb-2" />
                           <span className="text-xs text-gray-800">Cliquez pour choisir une image</span>
                        </div>
                        <p className="text-[10px] text-gray-700 mt-1">L'image sera convertie et enregistrée avec le modèle.</p>
                     </div>
                   )}
                   
                   {/* Border Radius for Images */}
                   <div className="space-y-3 border-t border-gray-100 pt-4">
                     <label className="block text-xs font-medium text-gray-800">Arrondi des angles</label>
                     
                     {/* Preset buttons */}
                     <div className="grid grid-cols-4 gap-2">
                       <button
                         onClick={() => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderRadius: '0px' } })}
                         className={`p-2 border-2 rounded transition-all ${(selectedElement.style?.borderRadius === '0px' || !selectedElement.style?.borderRadius) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                         title="Aucun arrondi"
                       >
                         <div className="w-full h-8 bg-gray-300"></div>
                       </button>
                       <button
                         onClick={() => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderRadius: '4px' } })}
                         className={`p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '4px' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                         title="Léger (4px)"
                       >
                         <div className="w-full h-8 bg-gray-300 rounded"></div>
                       </button>
                       <button
                         onClick={() => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderRadius: '8px' } })}
                         className={`p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '8px' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                         title="Moyen (8px)"
                       >
                         <div className="w-full h-8 bg-gray-300 rounded-md"></div>
                       </button>
                       <button
                         onClick={() => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderRadius: '16px' } })}
                         className={`p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '16px' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                         title="Fort (16px)"
                       >
                         <div className="w-full h-8 bg-gray-300 rounded-lg"></div>
                       </button>
                       <button
                         onClick={() => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderRadius: '24px' } })}
                         className={`p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '24px' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                         title="Très fort (24px)"
                       >
                         <div className="w-full h-8 bg-gray-300 rounded-xl"></div>
                       </button>
                       <button
                         onClick={() => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderRadius: '50%' } })}
                         className={`p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '50%' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                         title="Cercle/Ovale"
                       >
                         <div className="w-full h-8 bg-gray-300 rounded-full"></div>
                       </button>
                     </div>
                     
                     {/* Custom value input */}
                     <div className="space-y-1">
                       <label htmlFor="img-border-radius" className="block text-xs font-medium text-gray-800">Valeur personnalisée</label>
                       <div className="flex gap-2">
                         <input 
                           id="img-border-radius"
                           type="text"
                           value={selectedElement.style?.borderRadius || '0px'}
                           onChange={(e) => updateElement(selectedElement.id, { style: { ...selectedElement.style, borderRadius: e.target.value } })}
                           className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                           placeholder="Ex: 12px, 50%, 1rem"
                         />
                       </div>
                       <p className="text-[10px] text-gray-700">Formats acceptés : px, %, rem, em</p>
                     </div>
                   </div>
                 </div>
               )}

               {/* Table Configuration Button */}
               {selectedElement.type === 'table' && (
                 <div className="space-y-4 border-t border-gray-100 pt-4">
                   <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                     <TableIcon size={12} /> Configuration du tableau
                   </h4>
                   
                   <button
                     onClick={() => {
                       setEditingTableId(selectedElement.id);
                       setShowTableDialog(true);
                     }}
                     className="w-full py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
                   >
                     <Settings size={18} />
                     Personnaliser le tableau
                   </button>
                   
                   <div className="text-xs text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-200">
                     <p className="font-medium text-gray-900 mb-1">Colonnes actuelles :</p>
                     <p className="text-gray-800">
                       {(selectedElement.columns || []).length > 0 
                         ? (selectedElement.columns || []).map(c => c.label).join(', ')
                         : 'Aucune colonne'}
                     </p>
                   </div>
                 </div>
               )}

              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
                   <div className="p-2 bg-gray-100 rounded-lg text-gray-800">
                      <Settings size={20} />
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900">Paramètres globaux</h3>
                      <p className="text-xs text-gray-800">Configuration du document</p>
                   </div>
                </div>

                <div className="space-y-4">
                   <div className="space-y-1">
                      <label htmlFor="template-name" className="block text-xs font-medium text-gray-800">Nom du modèle</label>
                      <input 
                         id="template-name"
                         type="text" 
                         value={templateName} 
                         onChange={(e) => setTemplateName(e.target.value)} 
                         className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                         placeholder="Nom du modèle"
                       />
                   </div>

                   <IconSelector
                     selectedIcon={customIcon}
                     onSelectIcon={setCustomIcon}
                   />

                   <div className="space-y-1">
                      <label htmlFor="page-padding" className="block text-xs font-medium text-gray-800">Marge de page (px)</label>
                      <input 
                         id="page-padding"
                         type="number" 
                         value={globalSettings.padding} 
                         onChange={(e) => setGlobalSettings({ ...globalSettings, padding: parseInt(e.target.value) || 0 })} 
                         className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                       />
                   </div>
                   
                   <div className="space-y-1">
                      <label htmlFor="header-height" className="block text-xs font-medium text-gray-800">Hauteur Header (px)</label>
                      <input 
                         id="header-height"
                         type="number" 
                         value={globalSettings.headerHeight} 
                         onChange={(e) => setGlobalSettings({ ...globalSettings, headerHeight: parseInt(e.target.value) || 0 })} 
                         className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                       />
                       <p className="text-[10px] text-gray-700">Espace réservé en haut de page</p>
                   </div>

                   <div className="space-y-1">
                      <label htmlFor="footer-height" className="block text-xs font-medium text-gray-800">Hauteur Footer (px)</label>
                      <input 
                         id="footer-height"
                         type="number" 
                         value={globalSettings.footerHeight} 
                         onChange={(e) => setGlobalSettings({ ...globalSettings, footerHeight: parseInt(e.target.value) || 0 })} 
                         className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                       />
                       <p className="text-[10px] text-gray-700">Espace réservé en bas de page</p>
                   </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100 mt-4">
                   <div className="flex gap-2">
                      <FileText className="text-yellow-600 shrink-0" size={16} />
                      <p className="text-xs text-yellow-700 leading-relaxed">
                        Ces marges définissent la zone de sécurité pour l'impression. Les éléments en dehors pourraient être coupés.
                      </p>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

       {/* Drag Overlay for visual feedback during drag */}
      <DragOverlay dropAnimation={null}>
          {activeDragItem ? (
             <div className="bg-blue-600 text-white p-2 rounded shadow-lg text-sm font-medium opacity-90 pointer-events-none">
                {activeDragItem.type ? `Ajouter ${activeDragItem.type}` : 'Déplacer'}
            </div>
        ) : null}
      </DragOverlay>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-8">
           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-full flex flex-col overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                 <h2 className="font-bold">Aperçu</h2>
                 <button onClick={() => setShowPreview(false)} title="Fermer"><X/></button>
              </div>
              <div className="flex-1 overflow-auto bg-gray-100 p-8 flex justify-center">
                 <div className="shadow-2xl">
                    <InvoiceRenderer elements={elements} globalSettings={globalSettings} />
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Table Editor Dialog */}
      {showTableDialog && editingTableId && (() => {
        const tableElement = elements.find(e => e.id === editingTableId);
        if (!tableElement) return null;
        
        const tableColumns = tableElement.columns || [];
        
        return (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <TableIcon size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Configuration du tableau</h2>
                    <p className="text-sm text-gray-600">Personnalisez les colonnes et leurs valeurs</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowTableDialog(false);
                    setEditingTableId(null);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900 transition-colors"
                  title="Fermer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {tableColumns.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                      <TableIcon size={48} className="mx-auto text-gray-400 mb-3" />
                      <p className="text-gray-600 font-medium mb-2">Aucune colonne</p>
                      <p className="text-sm text-gray-500 mb-4">Commencez par ajouter une colonne à votre tableau</p>
                    </div>
                  ) : (
                    tableColumns.map((column, index) => (
                      <div key={column.id} className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="flex-1 space-y-3">
                            <div>
                              <label htmlFor={`col-label-${column.id}`} className="block text-sm font-medium text-gray-800 mb-1.5">
                                Nom de la colonne
                              </label>
                              <input
                                id={`col-label-${column.id}`}
                                type="text"
                                value={column.label}
                                onChange={(e) => {
                                  const newColumns = [...tableColumns];
                                  newColumns[index] = { ...column, label: e.target.value };
                                  updateElement(editingTableId, { columns: newColumns });
                                }}
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ex: Produit, Prix, Quantité"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor={`col-value-${column.id}`} className="block text-sm font-medium text-gray-800 mb-1.5">
                                Valeur de la cellule
                              </label>
                              <input
                                id={`col-value-${column.id}`}
                                type="text"
                                value={column.value || ''}
                                onChange={(e) => {
                                  const newColumns = [...tableColumns];
                                  newColumns[index] = { ...column, value: e.target.value };
                                  updateElement(editingTableId, { columns: newColumns });
                                }}
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                                placeholder="Ex: {{prixTab}}, Texte fixe, {{quantite}}"
                              />
                              <p className="text-xs text-gray-600 mt-1">
                                Utilisez <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">{'{{variable}}'}</code> pour insérer des données dynamiques
                              </p>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-800 mb-1.5">
                                Alignement du texte
                              </label>
                              <div className="grid grid-cols-3 gap-2">
                                <button
                                  onClick={() => {
                                    const newColumns = [...tableColumns];
                                    newColumns[index] = { ...column, align: 'left' };
                                    updateElement(editingTableId, { columns: newColumns });
                                  }}
                                  className={`py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                                    (column.align || 'left') === 'left' 
                                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                                  }`}
                                  title="Aligner à gauche"
                                >
                                  <AlignLeft size={16} />
                                  Gauche
                                </button>
                                <button
                                  onClick={() => {
                                    const newColumns = [...tableColumns];
                                    newColumns[index] = { ...column, align: 'center' };
                                    updateElement(editingTableId, { columns: newColumns });
                                  }}
                                  className={`py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                                    column.align === 'center' 
                                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                                  }`}
                                  title="Centrer"
                                >
                                  <AlignCenter size={16} />
                                  Centre
                                </button>
                                <button
                                  onClick={() => {
                                    const newColumns = [...tableColumns];
                                    newColumns[index] = { ...column, align: 'right' };
                                    updateElement(editingTableId, { columns: newColumns });
                                  }}
                                  className={`py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                                    column.align === 'right' 
                                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                                  }`}
                                  title="Aligner à droite"
                                >
                                  <AlignRight size={16} />
                                  Droite
                                </button>
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-800 mb-1.5">
                                Style du texte
                              </label>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => {
                                    const newColumns = [...tableColumns];
                                    newColumns[index] = { 
                                      ...column, 
                                      fontWeight: column.fontWeight === 'bold' ? 'normal' : 'bold' 
                                    };
                                    updateElement(editingTableId, { columns: newColumns });
                                  }}
                                  className={`flex-1 py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                                    column.fontWeight === 'bold' 
                                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                                  }`}
                                  title="Gras"
                                >
                                  <Bold size={16} />
                                  Gras
                                </button>
                                <button
                                  onClick={() => {
                                    const newColumns = [...tableColumns];
                                    newColumns[index] = { 
                                      ...column, 
                                      fontStyle: column.fontStyle === 'italic' ? 'normal' : 'italic' 
                                    };
                                    updateElement(editingTableId, { columns: newColumns });
                                  }}
                                  className={`flex-1 py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                                    column.fontStyle === 'italic' 
                                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                                  }`}
                                  title="Italique"
                                >
                                  <Italic size={16} />
                                  Italique
                                </button>
                                <button
                                  onClick={() => {
                                    const newColumns = [...tableColumns];
                                    newColumns[index] = { 
                                      ...column, 
                                      textDecoration: column.textDecoration === 'underline' ? 'none' : 'underline' 
                                    };
                                    updateElement(editingTableId, { columns: newColumns });
                                  }}
                                  className={`flex-1 py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                                    column.textDecoration === 'underline' 
                                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                                  }`}
                                  title="Souligné"
                                >
                                  <Underline size={16} />
                                  Souligné
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-1 pt-6">
                            <button
                              onClick={() => {
                                if (index === 0) return;
                                const newColumns = [...tableColumns];
                                [newColumns[index - 1], newColumns[index]] = [newColumns[index], newColumns[index - 1]];
                                updateElement(editingTableId, { columns: newColumns });
                              }}
                              disabled={index === 0}
                              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                              title="Déplacer vers le haut"
                            >
                              <ChevronUp size={18} />
                            </button>
                            <button
                              onClick={() => {
                                if (index === tableColumns.length - 1) return;
                                const newColumns = [...tableColumns];
                                [newColumns[index], newColumns[index + 1]] = [newColumns[index + 1], newColumns[index]];
                                updateElement(editingTableId, { columns: newColumns });
                              }}
                              disabled={index === tableColumns.length - 1}
                              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                              title="Déplacer vers le bas"
                            >
                              <ChevronDown size={18} />
                            </button>
                            <button
                              onClick={() => {
                                const newColumns = tableColumns.filter((_, i) => i !== index);
                                updateElement(editingTableId, { columns: newColumns });
                              }}
                              disabled={tableColumns.length <= 1}
                              className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                              title="Supprimer la colonne"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
                <button
                  onClick={() => {
                    const newColumns = [
                      ...tableColumns,
                      { 
                        id: uuidv4(), 
                        label: `Colonne ${tableColumns.length + 1}`,
                        value: '',
                        align: 'left',
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        textDecoration: 'none'
                      }
                    ];
                    updateElement(editingTableId, { columns: newColumns });
                  }}
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
                >
                  <Plus size={18} />
                  Ajouter une colonne
                </button>
                
                <button
                  onClick={() => {
                    setShowTableDialog(false);
                    setEditingTableId(null);
                  }}
                  className="px-6 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-lg text-sm font-medium transition-colors"
                >
                  Terminé
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </DndContext>
  );
}
