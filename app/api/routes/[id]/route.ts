import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET - Récupérer une route spécifique
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const { id } = await params;

    const route = await prisma.apiRoute.findUnique({
      where: { id },
      include: {
        template: {
          select: { name: true }
        }
      }
    });

    if (!route || route.userId !== session.user.id) {
      return NextResponse.json({ error: 'Route non trouvée' }, { status: 404 });
    }

    return NextResponse.json(route);
  } catch (error) {
    console.error('Erreur GET route:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// PATCH - Mettre à jour une route
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    // Vérifier que la route appartient à l'utilisateur
    const route = await prisma.apiRoute.findUnique({
      where: { id }
    });

    if (!route || route.userId !== session.user.id) {
      return NextResponse.json({ error: 'Route non trouvée' }, { status: 404 });
    }

    const updated = await prisma.apiRoute.update({
      where: { id },
      data: body,
      include: {
        template: {
          select: { name: true }
        }
      }
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Erreur PATCH route:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// DELETE - Supprimer une route
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const { id } = await params;

    // Vérifier que la route appartient à l'utilisateur
    const route = await prisma.apiRoute.findUnique({
      where: { id }
    });

    if (!route || route.userId !== session.user.id) {
      return NextResponse.json({ error: 'Route non trouvée' }, { status: 404 });
    }

    await prisma.apiRoute.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur DELETE route:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

