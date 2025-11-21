import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET - Liste toutes les routes de l'utilisateur
export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const routes = await prisma.apiRoute.findMany({
      where: { userId: session.user.id },
      include: {
        template: {
          select: { name: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(routes);
  } catch (error) {
    console.error('Erreur GET routes:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST - Créer une nouvelle route
export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const body = await request.json();
    const { name, slug, templateId, variableMapping, apiKey, responseType } = body;

    // Vérifier si le slug existe déjà
    const existing = await prisma.apiRoute.findUnique({
      where: { slug }
    });

    if (existing) {
      return NextResponse.json({ error: 'Ce slug existe déjà' }, { status: 400 });
    }

    const route = await prisma.apiRoute.create({
      data: {
        name,
        slug,
        templateId,
        userId: session.user.id,
        variableMapping,
        apiKey: apiKey || null,
        responseType: responseType || 'download',
        isActive: true
      },
      include: {
        template: {
          select: { name: true }
        }
      }
    });

    return NextResponse.json(route, { status: 201 });
  } catch (error) {
    console.error('Erreur POST route:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

