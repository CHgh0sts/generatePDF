import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import PdfGenerator from './PdfGenerator';

export default async function GeneratePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getSession();
  if (!session) redirect('/login');

  const template = await prisma.template.findUnique({
    where: { id },
  });

  if (!template || template.userId !== session.user.id) {
    redirect('/dashboard');
  }

  return <PdfGenerator template={template} />;
}

