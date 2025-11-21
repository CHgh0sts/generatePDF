'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, Trash2, Key, TestTube } from 'lucide-react';

interface Template {
  id: string;
  name: string;
}

interface VariableMapping {
  id: string;
  jsonPath: string;
  templateVar: string;
}

export default function NewRoutePage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    templateId: '',
    responseType: 'download',
    requireApiKey: false,
    apiKey: ''
  });

  const [mappings, setMappings] = useState<VariableMapping[]>([]);

  const [testData, setTestData] = useState('{\n  "client": {\n    "nom": "Entreprise ABC"\n  }\n}');
  const [showTest, setShowTest] = useState(false);

  useEffect(() => {
    fetchTemplates();
    generateApiKey();
  }, []);

  const fetchTemplates = async () => {
    try {
      const res = await fetch('/api/templates');
      const data = await res.json();
      setTemplates(data);
    } catch (error) {
      console.error('Erreur chargement templates:', error);
    }
  };

  const generateApiKey = () => {
    const key = 'sk_' + Array.from(crypto.getRandomValues(new Uint8Array(24)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    setFormData(prev => ({ ...prev, apiKey: key }));
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const addMapping = () => {
    setMappings([...mappings, { id: crypto.randomUUID(), jsonPath: '', templateVar: '' }]);
  };

  const removeMapping = (id: string) => {
    setMappings(mappings.filter(m => m.id !== id));
  };

  const updateMapping = (id: string, field: 'jsonPath' | 'templateVar', value: string) => {
    setMappings(mappings.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const variableMapping: Record<string, string> = {};
      mappings.forEach(m => {
        if (m.jsonPath && m.templateVar) {
          variableMapping[m.jsonPath] = m.templateVar;
        }
      });

      const res = await fetch('/api/routes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          apiKey: formData.requireApiKey ? formData.apiKey : null,
          variableMapping: JSON.stringify(variableMapping)
        })
      });

      if (res.ok) {
        router.push('/dashboard/generateroute');
      } else {
        alert('Erreur lors de la création de la route');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la création de la route');
    } finally {
      setLoading(false);
    }
  };

  const testRoute = async () => {
    try {
      const testJson = JSON.parse(testData);
      alert('Test réussi ! Les données JSON sont valides.\n\nAprès création, vous pourrez tester la génération complète du PDF.');
    } catch (error) {
      alert('Erreur: JSON invalide\n\n' + (error as Error).message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href="/dashboard/generateroute"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft size={20} />
          Retour aux routes
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Nouvelle Route API</h1>
        <p className="text-gray-700 mt-2">Configurez une route personnalisée pour la génération de PDF</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informations de base */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Informations de base</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Nom de la route
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value, slug: generateSlug(e.target.value) });
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: Facture Client A"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Slug (URL)
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">/api/generate/</span>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  placeholder="facture-client-a"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Modèle PDF
              </label>
              <select
                required
                value={formData.templateId}
                onChange={(e) => setFormData({ ...formData, templateId: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionner un modèle</option>
                {templates.map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Type de réponse
              </label>
              <select
                value={formData.responseType}
                onChange={(e) => setFormData({ ...formData, responseType: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="download">Téléchargement direct (PDF)</option>
                <option value="base64">Base64 (JSON)</option>
                <option value="url">URL du fichier</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sécurité */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Key size={20} />
            Sécurité (optionnel)
          </h2>
          
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.requireApiKey}
                onChange={(e) => setFormData({ ...formData, requireApiKey: e.target.checked })}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-800">
                Requérir une clé API pour accéder à cette route
              </span>
            </label>

            {formData.requireApiKey && (
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Clé API
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={formData.apiKey}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 font-mono text-sm"
                  />
                  <button
                    type="button"
                    onClick={generateApiKey}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Régénérer
                  </button>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Cette clé devra être envoyée dans le header <code className="bg-gray-100 px-1 rounded">X-API-Key</code>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mapping des variables */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Mapping des variables</h2>
            <button
              type="button"
              onClick={addMapping}
              className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-1 text-sm"
            >
              <Plus size={16} />
              Ajouter
            </button>
          </div>

          {/* Aide et exemples */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <h3 className="text-sm font-bold text-blue-900 mb-2">💡 Comment mapper les variables ?</h3>
            <div className="space-y-2 text-xs text-blue-800">
              <div>
                <span className="font-semibold">Variables simples :</span>
                <div className="mt-1 font-mono bg-white p-2 rounded border border-blue-200">
                  <div className="text-gray-700">JSON : <code>client.nom</code> → Template : <code>{'{{clientName}}'}</code></div>
                </div>
              </div>
              <div>
                <span className="font-semibold">Boucles sur tableaux (pour remplir les lignes d'un tableau) :</span>
                <div className="mt-1 font-mono bg-white p-2 rounded border border-blue-200">
                  <div className="text-gray-700">JSON : <code>depenses[].prixTTC</code> → Template : <code>{'{{prixTTC}}'}</code></div>
                  <div className="text-gray-700 mt-1">JSON : <code>depenses[].description</code> → Template : <code>{'{{desc}}'}</code></div>
                </div>
                <p className="mt-1 text-blue-700">
                  ⚠️ Utilisez <code>[]</code> pour indiquer une boucle. Si <code>depenses</code> contient 3 éléments, 3 lignes seront générées.
                </p>
              </div>
            </div>
          </div>

          {mappings.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p className="mb-3">Aucun mapping de variable</p>
              <p className="text-sm text-gray-400">Cliquez sur "Ajouter" pour créer un mapping</p>
            </div>
          ) : (
            <div className="space-y-3">
              {mappings.map((mapping, index) => (
                <div key={mapping.id} className="flex items-center gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={mapping.jsonPath}
                      onChange={(e) => updateMapping(mapping.id, 'jsonPath', e.target.value)}
                      placeholder="client.nom"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm font-mono focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={mapping.templateVar}
                      onChange={(e) => updateMapping(mapping.id, 'templateVar', e.target.value)}
                      placeholder="{{clientName}}"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm font-mono focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeMapping(mapping.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-800">
              <strong>💡 Astuce:</strong> Le chemin JSON utilise la notation pointée (ex: <code className="bg-blue-100 px-1 rounded">client.nom</code> pour accéder à <code className="bg-blue-100 px-1 rounded">{`{"client": {"nom": "..."}}`}</code>)
            </p>
          </div>
        </div>

        {/* Test */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <TestTube size={20} />
              Tester avec des données
            </h2>
            <button
              type="button"
              onClick={() => setShowTest(!showTest)}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              {showTest ? 'Masquer' : 'Afficher'}
            </button>
          </div>

          {showTest && (
            <div className="space-y-3">
              <textarea
                value={testData}
                onChange={(e) => setTestData(e.target.value)}
                className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder='{"client": {"nom": "Test"}}'
              />
              <button
                type="button"
                onClick={testRoute}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Valider le JSON
              </button>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <Link
            href="/dashboard/generateroute"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Création...' : 'Créer la route'}
          </button>
        </div>
      </form>
    </div>
  );
}

