'use server';

import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { randomUUID } from 'crypto';

// Templates de base
function getBaseTemplateContent(type: string) {
  const baseSettings = {
    padding: 40,
    headerHeight: 0,
    footerHeight: 0,
  };

  switch (type) {
    case 'invoice':
      return {
        elements: [
          // Titre
          { id: randomUUID(), type: 'text', x: 0, y: 20, w: '100%', h: 40, parentId: null, content: 'FACTURE', style: { fontSize: '32px', fontWeight: 'bold', textAlign: 'center', color: '#1e40af' } },
          
          // Informations entreprise
          { id: randomUUID(), type: 'text', x: 0, y: 80, w: 300, h: 30, parentId: null, content: 'Votre Entreprise', style: { fontSize: '18px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 0, y: 115, w: 300, h: 60, parentId: null, content: 'Adresse\nCode Postal Ville\nTél: 01 23 45 67 89', style: { fontSize: '12px', color: '#374151' } },
          
          // Informations client
          { id: randomUUID(), type: 'text', x: 414, y: 80, w: 300, h: 30, parentId: null, content: 'Client: {{clientName}}', style: { fontSize: '14px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 414, y: 115, w: 300, h: 60, parentId: null, content: '{{clientAddress}}\n{{clientCity}}\n{{clientPhone}}', style: { fontSize: '12px', color: '#374151' } },
          
          // Numéro et date
          { id: randomUUID(), type: 'text', x: 0, y: 200, w: 350, h: 25, parentId: null, content: 'N° Facture: {{invoiceNumber}}', style: { fontSize: '14px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 414, y: 200, w: 300, h: 25, parentId: null, content: 'Date: {{date}}', style: { fontSize: '14px', color: '#374151', textAlign: 'right' } },
          
          // Tableau
          { 
            id: randomUUID(), 
            type: 'table', 
            x: 0, 
            y: 250, 
            w: '100%', 
            h: 200, 
            parentId: null,
            style: { backgroundColor: '#f3f4f6', borderColor: '#d1d5db' },
            columns: [
              { id: randomUUID(), label: 'Description', value: '{{description}}', align: 'left', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Quantité', value: '{{quantite}}', align: 'center', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Prix Unit.', value: '{{prixUnit}}', align: 'right', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Total', value: '{{total}}', align: 'right', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none' },
            ]
          },
          
          // Total
          { id: randomUUID(), type: 'box', x: 414, y: 480, w: 300, h: 80, parentId: null, style: { backgroundColor: '#eff6ff', borderColor: '#3b82f6', borderWidth: '2px', borderStyle: 'solid', borderRadius: '8px' } },
          { id: randomUUID(), type: 'text', x: 434, y: 495, w: 260, h: 25, parentId: null, content: 'Total HT: {{totalHT}}', style: { fontSize: '14px', color: '#374151', textAlign: 'right' } },
          { id: randomUUID(), type: 'text', x: 434, y: 520, w: 260, h: 25, parentId: null, content: 'TVA (20%): {{tva}}', style: { fontSize: '14px', color: '#374151', textAlign: 'right' } },
          { id: randomUUID(), type: 'text', x: 434, y: 545, w: 260, h: 25, parentId: null, content: 'Total TTC: {{totalTTC}}', style: { fontSize: '16px', fontWeight: 'bold', color: '#1e40af', textAlign: 'right' } },
          
          // Pied de page
          { id: randomUUID(), type: 'line', x: 0, y: 600, w: '100%', h: 2, parentId: null, style: { backgroundColor: '#d1d5db', height: '2px' } },
          { id: randomUUID(), type: 'text', x: 0, y: 620, w: '100%', h: 40, parentId: null, content: 'Conditions de paiement: À réception\nMerci de votre confiance !', style: { fontSize: '11px', color: '#6b7280', textAlign: 'center' } },
        ],
        globalSettings: baseSettings,
      };

    case 'quote':
      return {
        elements: [
          // Titre
          { id: randomUUID(), type: 'text', x: 0, y: 20, w: '100%', h: 40, parentId: null, content: 'DEVIS', style: { fontSize: '32px', fontWeight: 'bold', textAlign: 'center', color: '#7c3aed' } },
          
          // Informations entreprise
          { id: randomUUID(), type: 'text', x: 0, y: 80, w: 300, h: 30, parentId: null, content: 'Votre Entreprise', style: { fontSize: '18px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 0, y: 115, w: 300, h: 60, parentId: null, content: 'Adresse\nCode Postal Ville\nEmail: contact@entreprise.fr', style: { fontSize: '12px', color: '#374151' } },
          
          // Informations client
          { id: randomUUID(), type: 'text', x: 414, y: 80, w: 300, h: 30, parentId: null, content: 'Devis pour: {{clientName}}', style: { fontSize: '14px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 414, y: 115, w: 300, h: 60, parentId: null, content: '{{clientAddress}}\n{{clientCity}}', style: { fontSize: '12px', color: '#374151' } },
          
          // Numéro et date
          { id: randomUUID(), type: 'text', x: 0, y: 200, w: 350, h: 25, parentId: null, content: 'N° Devis: {{quoteNumber}}', style: { fontSize: '14px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 414, y: 200, w: 300, h: 25, parentId: null, content: 'Date: {{date}}', style: { fontSize: '14px', color: '#374151', textAlign: 'right' } },
          { id: randomUUID(), type: 'text', x: 414, y: 225, w: 300, h: 25, parentId: null, content: 'Valable jusqu\'au: {{validUntil}}', style: { fontSize: '12px', color: '#6b7280', textAlign: 'right', fontStyle: 'italic' } },
          
          // Tableau
          { 
            id: randomUUID(), 
            type: 'table', 
            x: 0, 
            y: 270, 
            w: '100%', 
            h: 200, 
            parentId: null,
            style: { backgroundColor: '#faf5ff', borderColor: '#c084fc' },
            columns: [
              { id: randomUUID(), label: 'Prestation', value: '{{prestation}}', align: 'left', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Quantité', value: '{{qte}}', align: 'center', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Prix Unit.', value: '{{prix}}', align: 'right', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Total', value: '{{total}}', align: 'right', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none' },
            ]
          },
          
          // Total
          { id: randomUUID(), type: 'box', x: 414, y: 500, w: 300, h: 60, parentId: null, style: { backgroundColor: '#faf5ff', borderColor: '#7c3aed', borderWidth: '2px', borderStyle: 'solid', borderRadius: '8px' } },
          { id: randomUUID(), type: 'text', x: 434, y: 515, w: 260, h: 25, parentId: null, content: 'Total HT: {{totalHT}}', style: { fontSize: '14px', color: '#374151', textAlign: 'right' } },
          { id: randomUUID(), type: 'text', x: 434, y: 540, w: 260, h: 25, parentId: null, content: 'Total TTC: {{totalTTC}}', style: { fontSize: '16px', fontWeight: 'bold', color: '#7c3aed', textAlign: 'right' } },
          
          // Note
          { id: randomUUID(), type: 'text', x: 0, y: 590, w: '100%', h: 60, parentId: null, content: 'Ce devis est valable 30 jours à compter de sa date d\'émission.\nPour accepter ce devis, merci de nous retourner un exemplaire signé avec la mention "Bon pour accord".', style: { fontSize: '11px', color: '#6b7280', textAlign: 'center' } },
        ],
        globalSettings: baseSettings,
      };

    case 'order':
      return {
        elements: [
          // Titre
          { id: randomUUID(), type: 'text', x: 0, y: 20, w: '100%', h: 40, parentId: null, content: 'BON DE COMMANDE', style: { fontSize: '28px', fontWeight: 'bold', textAlign: 'center', color: '#ea580c' } },
          
          // Informations
          { id: randomUUID(), type: 'text', x: 0, y: 80, w: 300, h: 30, parentId: null, content: 'Commandé par:', style: { fontSize: '16px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 0, y: 115, w: 300, h: 60, parentId: null, content: '{{companyName}}\n{{companyAddress}}', style: { fontSize: '12px', color: '#374151' } },
          
          { id: randomUUID(), type: 'text', x: 414, y: 80, w: 300, h: 30, parentId: null, content: 'Fournisseur:', style: { fontSize: '16px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 414, y: 115, w: 300, h: 60, parentId: null, content: '{{supplierName}}\n{{supplierAddress}}', style: { fontSize: '12px', color: '#374151' } },
          
          // Numéro et date
          { id: randomUUID(), type: 'text', x: 0, y: 200, w: 350, h: 25, parentId: null, content: 'N° Commande: {{orderNumber}}', style: { fontSize: '14px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 414, y: 200, w: 300, h: 25, parentId: null, content: 'Date: {{date}}', style: { fontSize: '14px', color: '#374151', textAlign: 'right' } },
          
          // Tableau
          { 
            id: randomUUID(), 
            type: 'table', 
            x: 0, 
            y: 250, 
            w: '100%', 
            h: 200, 
            parentId: null,
            style: { backgroundColor: '#fff7ed', borderColor: '#fb923c' },
            columns: [
              { id: randomUUID(), label: 'Référence', value: '{{ref}}', align: 'left', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Désignation', value: '{{designation}}', align: 'left', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Quantité', value: '{{quantite}}', align: 'center', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Prix Unit.', value: '{{prix}}', align: 'right', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
            ]
          },
          
          // Total
          { id: randomUUID(), type: 'text', x: 414, y: 480, w: 300, h: 30, parentId: null, content: 'Total: {{total}}', style: { fontSize: '18px', fontWeight: 'bold', color: '#ea580c', textAlign: 'right' } },
          
          // Signature
          { id: randomUUID(), type: 'box', x: 0, y: 550, w: 300, h: 100, parentId: null, style: { backgroundColor: 'transparent', borderColor: '#d1d5db', borderWidth: '1px', borderStyle: 'dashed', borderRadius: '4px' } },
          { id: randomUUID(), type: 'text', x: 10, y: 560, w: 280, h: 25, parentId: null, content: 'Signature et cachet:', style: { fontSize: '12px', color: '#6b7280' } },
        ],
        globalSettings: baseSettings,
      };

    case 'delivery':
      return {
        elements: [
          // Titre
          { id: randomUUID(), type: 'text', x: 0, y: 20, w: '100%', h: 40, parentId: null, content: 'BON DE LIVRAISON', style: { fontSize: '28px', fontWeight: 'bold', textAlign: 'center', color: '#4f46e5' } },
          
          // Informations
          { id: randomUUID(), type: 'text', x: 0, y: 80, w: 300, h: 30, parentId: null, content: 'Expéditeur:', style: { fontSize: '16px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 0, y: 115, w: 300, h: 60, parentId: null, content: '{{senderName}}\n{{senderAddress}}', style: { fontSize: '12px', color: '#374151' } },
          
          { id: randomUUID(), type: 'text', x: 414, y: 80, w: 300, h: 30, parentId: null, content: 'Destinataire:', style: { fontSize: '16px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 414, y: 115, w: 300, h: 60, parentId: null, content: '{{recipientName}}\n{{recipientAddress}}', style: { fontSize: '12px', color: '#374151' } },
          
          // Numéro et date
          { id: randomUUID(), type: 'text', x: 0, y: 200, w: 350, h: 25, parentId: null, content: 'N° BL: {{deliveryNumber}}', style: { fontSize: '14px', fontWeight: 'bold', color: '#111827' } },
          { id: randomUUID(), type: 'text', x: 414, y: 200, w: 300, h: 25, parentId: null, content: 'Date: {{date}}', style: { fontSize: '14px', color: '#374151', textAlign: 'right' } },
          
          // Tableau
          { 
            id: randomUUID(), 
            type: 'table', 
            x: 0, 
            y: 250, 
            w: '100%', 
            h: 250, 
            parentId: null,
            style: { backgroundColor: '#eef2ff', borderColor: '#818cf8' },
            columns: [
              { id: randomUUID(), label: 'Référence', value: '{{ref}}', align: 'left', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Désignation', value: '{{designation}}', align: 'left', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'Quantité livrée', value: '{{quantite}}', align: 'center', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none' },
              { id: randomUUID(), label: 'État', value: '{{etat}}', align: 'center', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' },
            ]
          },
          
          // Signatures
          { id: randomUUID(), type: 'box', x: 0, y: 530, w: 340, h: 100, parentId: null, style: { backgroundColor: 'transparent', borderColor: '#d1d5db', borderWidth: '1px', borderStyle: 'dashed', borderRadius: '4px' } },
          { id: randomUUID(), type: 'text', x: 10, y: 540, w: 320, h: 25, parentId: null, content: 'Signature livreur:', style: { fontSize: '12px', color: '#6b7280' } },
          
          { id: randomUUID(), type: 'box', x: 374, y: 530, w: 340, h: 100, parentId: null, style: { backgroundColor: 'transparent', borderColor: '#d1d5db', borderWidth: '1px', borderStyle: 'dashed', borderRadius: '4px' } },
          { id: randomUUID(), type: 'text', x: 384, y: 540, w: 320, h: 25, parentId: null, content: 'Signature destinataire (Bon pour réception):', style: { fontSize: '12px', color: '#6b7280' } },
        ],
        globalSettings: baseSettings,
      };

    default: // blank
      return {
        elements: [],
        globalSettings: baseSettings,
      };
  }
}

export async function createTemplate() {
  const session = await getSession();
  if (!session) return;

  const template = await prisma.template.create({
    data: {
      name: 'Nouveau Modèle',
      content: JSON.stringify([]),
      userId: session.user.id,
    },
  });
  
  redirect(`/dashboard/builder/${template.id}`);
}

export async function createTemplateFromBase(baseType: string) {
  const session = await getSession();
  if (!session) return;

  const templateNames: Record<string, string> = {
    blank: 'Nouveau Modèle',
    invoice: 'Facture',
    quote: 'Devis',
    order: 'Bon de commande',
    delivery: 'Bon de livraison',
  };

  const templateIcons: Record<string, string> = {
    blank: 'File',
    invoice: 'FileText',
    quote: 'Receipt',
    order: 'ShoppingCart',
    delivery: 'Package',
  };

  const content = getBaseTemplateContent(baseType);

  const template = await prisma.template.create({
    data: {
      name: templateNames[baseType] || 'Nouveau Modèle',
      content: JSON.stringify(content),
      templateType: baseType, // Sauvegarder le type de template
      customIcon: templateIcons[baseType] || 'File', // Sauvegarder l'icône par défaut
      userId: session.user.id,
    },
  });
  
  redirect(`/dashboard/builder/${template.id}`);
}

export async function deleteTemplate(templateId: string) {
  const session = await getSession();
  if (!session) return;

  // Verify ownership
  const template = await prisma.template.findUnique({
    where: { id: templateId },
  });

  if (!template || template.userId !== session.user.id) {
    throw new Error("Unauthorized");
  }

  await prisma.template.delete({
    where: { id: templateId },
  });

  revalidatePath('/dashboard');
}

