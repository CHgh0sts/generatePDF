'use client';

import Link from 'next/link';
import { File, ArrowRight, Calendar, Trash2, AlertTriangle, X, FileText, Receipt, ShoppingCart, Package } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { deleteTemplate } from './actions';
import { useState } from 'react';

interface TemplateCardProps {
  template: {
    id: string;
    name: string;
    updatedAt: Date | string;
    templateType?: string | null;
    customIcon?: string | null;
  };
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Formater la date de manière cohérente pour éviter les erreurs d'hydratation
  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteTemplate(template.id);
      setIsDeleteDialogOpen(false);
    } catch (error) {
      console.error('Failed to delete template', error);
      alert('Une erreur est survenue lors de la suppression.');
    } finally {
      setIsDeleting(false);
    }
  };

  // Déterminer l'icône et la couleur en fonction du type de template ou de l'icône personnalisée
  const getTemplateIcon = () => {
    const baseIconClass = "w-12 h-12 group-hover:scale-110 transition-all duration-500 relative z-10";
    
    // Déterminer la couleur en fonction du type de template
    const getColorClass = () => {
      switch (template.templateType) {
        case 'invoice':
          return 'text-gray-700 group-hover:text-green-600';
        case 'quote':
          return 'text-gray-700 group-hover:text-purple-600';
        case 'order':
          return 'text-gray-700 group-hover:text-orange-600';
        case 'delivery':
          return 'text-gray-700 group-hover:text-indigo-600';
        default:
          return 'text-gray-700 group-hover:text-blue-600';
      }
    };
    
    const colorClass = getColorClass();
    const iconProps = { className: `${baseIconClass} ${colorClass}` };
    
    // Si une icône personnalisée est définie, l'utiliser en priorité
    if (template.customIcon) {
      try {
        const IconComponent = (LucideIcons as any)[template.customIcon];
        if (IconComponent) {
          return <IconComponent {...iconProps} />;
        }
      } catch (error) {
        console.error('Failed to load custom icon:', template.customIcon);
      }
    }
    
    // Sinon, utiliser l'icône par défaut selon le type de template
    switch (template.templateType) {
      case 'invoice':
        return <FileText {...iconProps} />;
      case 'quote':
        return <Receipt {...iconProps} />;
      case 'order':
        return <ShoppingCart {...iconProps} />;
      case 'delivery':
        return <Package {...iconProps} />;
      default:
        return <File {...iconProps} />;
    }
  };

  const getBackgroundGradient = () => {
    switch (template.templateType) {
      case 'invoice':
        return 'from-green-50 to-white group-hover:from-green-100/50';
      case 'quote':
        return 'from-purple-50 to-white group-hover:from-purple-100/50';
      case 'order':
        return 'from-orange-50 to-white group-hover:from-orange-100/50';
      case 'delivery':
        return 'from-indigo-50 to-white group-hover:from-indigo-100/50';
      default:
        return 'from-gray-50 to-white group-hover:from-blue-50/30';
    }
  };

  return (
    <>
      <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden relative">
        {/* Preview Area */}
        <div className={`h-40 bg-gradient-to-br ${getBackgroundGradient()} border-b border-gray-100 flex items-center justify-center relative overflow-hidden transition-colors`}>
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          {getTemplateIcon()}
          
          {/* Actions (top right) */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex gap-2 z-20">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsDeleteDialogOpen(true);
                }}
                className="p-2 bg-white/80 backdrop-blur rounded-full shadow-sm border border-gray-200 text-gray-700 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors"
                title="Supprimer le modèle"
              >
                <Trash2 size={16} />
              </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="mb-5">
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1" title={template.name}>{template.name}</h3>
            <div className="flex items-center text-xs text-gray-800 gap-1.5">
              <Calendar size={12} />
              <span>Modifié le {formatDate(template.updatedAt)}</span>
            </div>
          </div>
          
          <div className="mt-auto grid grid-cols-2 gap-3">
            <Link href={`/dashboard/builder/${template.id}`} className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 hover:text-gray-900 transition-colors">
              Éditer
            </Link>
            <Link href={`/dashboard/generate/${template.id}`} className="flex items-center justify-center py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all gap-1.5 group/btn">
                PDF <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Delete Dialog */}
      {isDeleteDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                 <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <AlertTriangle className="text-red-600" size={20} />
                 </div>
                 <button onClick={() => setIsDeleteDialogOpen(false)} className="text-gray-700 hover:text-gray-900 transition-colors" title="Fermer">
                    <X size={20} />
                 </button>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Supprimer le modèle ?</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                Êtes-vous sûr de vouloir supprimer le modèle <strong>"{template.name}"</strong> ? Cette action est irréversible et toutes les données associées seront perdues.
              </p>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex items-center justify-end gap-3">
              <button 
                onClick={() => setIsDeleteDialogOpen(false)}
                disabled={isDeleting}
                className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
              >
                Annuler
              </button>
              <button 
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm hover:shadow-md transition-all disabled:opacity-70 flex items-center gap-2"
              >
                {isDeleting ? 'Suppression...' : 'Supprimer définitivement'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

