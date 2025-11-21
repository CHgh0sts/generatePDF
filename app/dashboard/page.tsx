import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { Webhook } from 'lucide-react';
import TemplateCard from './TemplateCard';
import CreateTemplateCard from './CreateTemplateCard';
import Link from 'next/link';

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) return;
  
  const templates = await prisma.template.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: 'desc' },
    select: {
      id: true,
      name: true,
      updatedAt: true,
      templateType: true,
      customIcon: true,
    },
  });

  // Sérialiser les dates pour éviter les erreurs d'hydratation
  const serializedTemplates = templates.map(template => ({
    ...template,
    updatedAt: template.updatedAt.toISOString(),
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-2">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Tableau de bord</h1>
          <p className="text-gray-700 mt-2">Gérez vos factures et créez de nouveaux modèles.</p>
        </div>
        <Link
          href="/dashboard/generateroute"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg flex items-center gap-2 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-600/20 transition-all hover:-translate-y-0.5"
        >
          <Webhook size={20} />
          Générer une Route API
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Card: Créer nouveau */}
        <CreateTemplateCard />

        {/* Cards: Liste des modèles */}
        {serializedTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}
