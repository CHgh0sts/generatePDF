'use client';

import { useState } from 'react';
import { Plus, X, FileText, Receipt, ShoppingCart, Package } from 'lucide-react';
import { createTemplateFromBase } from './actions';

const BASE_TEMPLATES = {
  blank: {
    name: 'Vide',
    description: 'Commencer de zéro',
    icon: Plus,
    color: 'blue',
  },
  invoice: {
    name: 'Facture',
    description: 'Modèle de facture complet',
    icon: FileText,
    color: 'green',
  },
  quote: {
    name: 'Devis',
    description: 'Modèle de devis professionnel',
    icon: Receipt,
    color: 'purple',
  },
  order: {
    name: 'Bon de commande',
    description: 'Modèle de bon de commande',
    icon: ShoppingCart,
    color: 'orange',
  },
  delivery: {
    name: 'Bon de livraison',
    description: 'Modèle de bon de livraison',
    icon: Package,
    color: 'indigo',
  },
};

export default function CreateTemplateCard() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<keyof typeof BASE_TEMPLATES>('blank');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    try {
      await createTemplateFromBase(selectedTemplate);
      // La fonction fait un redirect, donc on n'arrivera jamais ici
      setShowDialog(false);
    } catch (error) {
      // Next.js utilise une exception pour gérer les redirects
      // On ne doit pas afficher d'erreur dans ce cas
      if (error && typeof error === 'object' && 'digest' in error) {
        // C'est une redirection Next.js, c'est normal
        throw error;
      }
      // Sinon c'est une vraie erreur
      console.error('Erreur création template:', error);
      alert('Erreur lors de la création du modèle');
      setLoading(false);
    }
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; hover: string }> = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', hover: 'hover:border-blue-400' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', hover: 'hover:border-green-400' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', hover: 'hover:border-purple-400' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', hover: 'hover:border-orange-400' },
      indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', hover: 'hover:border-indigo-400' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <button
        onClick={() => setShowDialog(true)}
        className="w-full h-full min-h-[280px] bg-white border-2 border-dashed border-blue-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer shadow-sm hover:shadow-md"
      >
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4 border border-blue-100">
          <Plus className="w-8 h-8 text-blue-600" />
        </div>
        <span className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">Nouveau Modèle</span>
        <span className="text-sm text-gray-700 mt-1 group-hover:text-blue-600/70">Choisir un modèle de base</span>
      </button>

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Créer un nouveau modèle</h2>
                <p className="text-sm text-gray-600 mt-1">Choisissez un modèle de base pour commencer</p>
              </div>
              <button
                onClick={() => setShowDialog(false)}
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(BASE_TEMPLATES).map(([key, template]) => {
                  const Icon = template.icon;
                  const colors = getColorClasses(template.color);
                  const isSelected = selectedTemplate === key;

                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedTemplate(key as keyof typeof BASE_TEMPLATES)}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        isSelected
                          ? `${colors.border} ${colors.bg} shadow-md`
                          : `border-gray-200 hover:border-gray-300 bg-white`
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? `ring-2 ring-offset-2 ${colors.border.replace('border-', 'ring-')}` : ''
                        }`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 text-lg mb-1">{template.name}</h3>
                          <p className="text-sm text-gray-600">{template.description}</p>
                        </div>
                        {isSelected && (
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
              <button
                onClick={() => setShowDialog(false)}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleCreate}
                disabled={loading}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Création...
                  </>
                ) : (
                  <>
                    <Plus size={18} />
                    Créer le modèle
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

