'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Copy, Key, Power, PowerOff } from 'lucide-react';

interface ApiRoute {
  id: string;
  name: string;
  slug: string;
  templateId: string;
  template: { name: string };
  apiKey: string | null;
  responseType: string;
  isActive: boolean;
  createdAt: string;
}

export default function GenerateRoutePage() {
  const [routes, setRoutes] = useState<ApiRoute[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const res = await fetch('/api/routes');
      const data = await res.json();
      setRoutes(data);
    } catch (error) {
      console.error('Erreur chargement routes:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (slug: string, apiKey: string | null) => {
    const baseUrl = window.location.origin;
    const url = `${baseUrl}/api/generate/${slug}${apiKey ? `?apiKey=${apiKey}` : ''}`;
    navigator.clipboard.writeText(url);
    alert('URL copiée dans le presse-papier !');
  };

  const deleteRoute = async (id: string) => {
    if (!confirm('Supprimer cette route ?')) return;
    
    try {
      await fetch(`/api/routes/${id}`, { method: 'DELETE' });
      fetchRoutes();
    } catch (error) {
      console.error('Erreur suppression:', error);
    }
  };

  const toggleActive = async (id: string, isActive: boolean) => {
    try {
      await fetch(`/api/routes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !isActive })
      });
      fetchRoutes();
    } catch (error) {
      console.error('Erreur toggle:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Routes API</h1>
          <p className="text-gray-700 mt-2">Créez des routes personnalisées pour générer des PDF depuis des sites externes</p>
        </div>
        <Link
          href="/dashboard/generateroute/new"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 shadow-lg transition-all hover:-translate-y-0.5"
        >
          <Plus size={20} />
          Nouvelle Route
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mx-auto"></div>
        </div>
      ) : routes.length === 0 ? (
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aucune route créée</h3>
            <p className="text-gray-600 mb-6">
              Créez votre première route API pour permettre à des sites externes de générer des PDF
            </p>
            <Link
              href="/dashboard/generateroute/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={20} />
              Créer ma première route
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{route.name}</h3>
                    {route.apiKey && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded flex items-center gap-1">
                        <Key size={12} />
                        Sécurisée
                      </span>
                    )}
                    <button
                      onClick={() => toggleActive(route.id, route.isActive)}
                      className={`px-2 py-1 text-xs font-medium rounded flex items-center gap-1 ${
                        route.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {route.isActive ? <Power size={12} /> : <PowerOff size={12} />}
                      {route.isActive ? 'Active' : 'Inactive'}
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">Modèle:</span>
                      <span className="font-medium text-gray-900">{route.template.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">Slug:</span>
                      <code className="px-2 py-1 bg-gray-100 rounded text-gray-900 font-mono text-xs">
                        {route.slug}
                      </code>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">Type de réponse:</span>
                      <span className="font-medium text-gray-900 capitalize">{route.responseType}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(route.slug, route.apiKey)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Copier l'URL"
                  >
                    <Copy size={20} />
                  </button>
                  <Link
                    href={`/dashboard/generateroute/${route.id}`}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Modifier"
                  >
                    <Edit size={20} />
                  </Link>
                  <button
                    onClick={() => deleteRoute(route.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}




