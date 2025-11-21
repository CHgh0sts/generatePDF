module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/app/dashboard/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00d031f605e9be50a467d036d8fe467dae810a4b4f":"createTemplate","401fe10ad54af38cc509e3537bd0cba47834fb277f":"deleteTemplate","4070556f7aaea3c46afb190d10062fa04ef0e25256":"createTemplateFromBase"},"",""] */ __turbopack_context__.s([
    "createTemplate",
    ()=>createTemplate,
    "createTemplateFromBase",
    ()=>createTemplateFromBase,
    "deleteTemplate",
    ()=>deleteTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
// Templates de base
function getBaseTemplateContent(type) {
    const baseSettings = {
        padding: 40,
        headerHeight: 0,
        footerHeight: 0
    };
    switch(type){
        case 'invoice':
            return {
                elements: [
                    // Titre
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 20,
                        w: '100%',
                        h: 40,
                        parentId: null,
                        content: 'FACTURE',
                        style: {
                            fontSize: '32px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: '#1e40af'
                        }
                    },
                    // Informations entreprise
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 80,
                        w: 300,
                        h: 30,
                        parentId: null,
                        content: 'Votre Entreprise',
                        style: {
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 115,
                        w: 300,
                        h: 60,
                        parentId: null,
                        content: 'Adresse\nCode Postal Ville\nTél: 01 23 45 67 89',
                        style: {
                            fontSize: '12px',
                            color: '#374151'
                        }
                    },
                    // Informations client
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 80,
                        w: 300,
                        h: 30,
                        parentId: null,
                        content: 'Client: {{clientName}}',
                        style: {
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 115,
                        w: 300,
                        h: 60,
                        parentId: null,
                        content: '{{clientAddress}}\n{{clientCity}}\n{{clientPhone}}',
                        style: {
                            fontSize: '12px',
                            color: '#374151'
                        }
                    },
                    // Numéro et date
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 200,
                        w: 350,
                        h: 25,
                        parentId: null,
                        content: 'N° Facture: {{invoiceNumber}}',
                        style: {
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 200,
                        w: 300,
                        h: 25,
                        parentId: null,
                        content: 'Date: {{date}}',
                        style: {
                            fontSize: '14px',
                            color: '#374151',
                            textAlign: 'right'
                        }
                    },
                    // Tableau
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'table',
                        x: 0,
                        y: 250,
                        w: '100%',
                        h: 200,
                        parentId: null,
                        style: {
                            backgroundColor: '#f3f4f6',
                            borderColor: '#d1d5db'
                        },
                        columns: [
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Description',
                                value: '{{description}}',
                                align: 'left',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Quantité',
                                value: '{{quantite}}',
                                align: 'center',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Prix Unit.',
                                value: '{{prixUnit}}',
                                align: 'right',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Total',
                                value: '{{total}}',
                                align: 'right',
                                fontWeight: 'bold',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            }
                        ]
                    },
                    // Total
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'box',
                        x: 414,
                        y: 480,
                        w: 300,
                        h: 80,
                        parentId: null,
                        style: {
                            backgroundColor: '#eff6ff',
                            borderColor: '#3b82f6',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderRadius: '8px'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 434,
                        y: 495,
                        w: 260,
                        h: 25,
                        parentId: null,
                        content: 'Total HT: {{totalHT}}',
                        style: {
                            fontSize: '14px',
                            color: '#374151',
                            textAlign: 'right'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 434,
                        y: 520,
                        w: 260,
                        h: 25,
                        parentId: null,
                        content: 'TVA (20%): {{tva}}',
                        style: {
                            fontSize: '14px',
                            color: '#374151',
                            textAlign: 'right'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 434,
                        y: 545,
                        w: 260,
                        h: 25,
                        parentId: null,
                        content: 'Total TTC: {{totalTTC}}',
                        style: {
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#1e40af',
                            textAlign: 'right'
                        }
                    },
                    // Pied de page
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'line',
                        x: 0,
                        y: 600,
                        w: '100%',
                        h: 2,
                        parentId: null,
                        style: {
                            backgroundColor: '#d1d5db',
                            height: '2px'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 620,
                        w: '100%',
                        h: 40,
                        parentId: null,
                        content: 'Conditions de paiement: À réception\nMerci de votre confiance !',
                        style: {
                            fontSize: '11px',
                            color: '#6b7280',
                            textAlign: 'center'
                        }
                    }
                ],
                globalSettings: baseSettings
            };
        case 'quote':
            return {
                elements: [
                    // Titre
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 20,
                        w: '100%',
                        h: 40,
                        parentId: null,
                        content: 'DEVIS',
                        style: {
                            fontSize: '32px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: '#7c3aed'
                        }
                    },
                    // Informations entreprise
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 80,
                        w: 300,
                        h: 30,
                        parentId: null,
                        content: 'Votre Entreprise',
                        style: {
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 115,
                        w: 300,
                        h: 60,
                        parentId: null,
                        content: 'Adresse\nCode Postal Ville\nEmail: contact@entreprise.fr',
                        style: {
                            fontSize: '12px',
                            color: '#374151'
                        }
                    },
                    // Informations client
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 80,
                        w: 300,
                        h: 30,
                        parentId: null,
                        content: 'Devis pour: {{clientName}}',
                        style: {
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 115,
                        w: 300,
                        h: 60,
                        parentId: null,
                        content: '{{clientAddress}}\n{{clientCity}}',
                        style: {
                            fontSize: '12px',
                            color: '#374151'
                        }
                    },
                    // Numéro et date
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 200,
                        w: 350,
                        h: 25,
                        parentId: null,
                        content: 'N° Devis: {{quoteNumber}}',
                        style: {
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 200,
                        w: 300,
                        h: 25,
                        parentId: null,
                        content: 'Date: {{date}}',
                        style: {
                            fontSize: '14px',
                            color: '#374151',
                            textAlign: 'right'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 225,
                        w: 300,
                        h: 25,
                        parentId: null,
                        content: 'Valable jusqu\'au: {{validUntil}}',
                        style: {
                            fontSize: '12px',
                            color: '#6b7280',
                            textAlign: 'right',
                            fontStyle: 'italic'
                        }
                    },
                    // Tableau
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'table',
                        x: 0,
                        y: 270,
                        w: '100%',
                        h: 200,
                        parentId: null,
                        style: {
                            backgroundColor: '#faf5ff',
                            borderColor: '#c084fc'
                        },
                        columns: [
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Prestation',
                                value: '{{prestation}}',
                                align: 'left',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Quantité',
                                value: '{{qte}}',
                                align: 'center',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Prix Unit.',
                                value: '{{prix}}',
                                align: 'right',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Total',
                                value: '{{total}}',
                                align: 'right',
                                fontWeight: 'bold',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            }
                        ]
                    },
                    // Total
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'box',
                        x: 414,
                        y: 500,
                        w: 300,
                        h: 60,
                        parentId: null,
                        style: {
                            backgroundColor: '#faf5ff',
                            borderColor: '#7c3aed',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderRadius: '8px'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 434,
                        y: 515,
                        w: 260,
                        h: 25,
                        parentId: null,
                        content: 'Total HT: {{totalHT}}',
                        style: {
                            fontSize: '14px',
                            color: '#374151',
                            textAlign: 'right'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 434,
                        y: 540,
                        w: 260,
                        h: 25,
                        parentId: null,
                        content: 'Total TTC: {{totalTTC}}',
                        style: {
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#7c3aed',
                            textAlign: 'right'
                        }
                    },
                    // Note
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 590,
                        w: '100%',
                        h: 60,
                        parentId: null,
                        content: 'Ce devis est valable 30 jours à compter de sa date d\'émission.\nPour accepter ce devis, merci de nous retourner un exemplaire signé avec la mention "Bon pour accord".',
                        style: {
                            fontSize: '11px',
                            color: '#6b7280',
                            textAlign: 'center'
                        }
                    }
                ],
                globalSettings: baseSettings
            };
        case 'order':
            return {
                elements: [
                    // Titre
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 20,
                        w: '100%',
                        h: 40,
                        parentId: null,
                        content: 'BON DE COMMANDE',
                        style: {
                            fontSize: '28px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: '#ea580c'
                        }
                    },
                    // Informations
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 80,
                        w: 300,
                        h: 30,
                        parentId: null,
                        content: 'Commandé par:',
                        style: {
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 115,
                        w: 300,
                        h: 60,
                        parentId: null,
                        content: '{{companyName}}\n{{companyAddress}}',
                        style: {
                            fontSize: '12px',
                            color: '#374151'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 80,
                        w: 300,
                        h: 30,
                        parentId: null,
                        content: 'Fournisseur:',
                        style: {
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 115,
                        w: 300,
                        h: 60,
                        parentId: null,
                        content: '{{supplierName}}\n{{supplierAddress}}',
                        style: {
                            fontSize: '12px',
                            color: '#374151'
                        }
                    },
                    // Numéro et date
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 200,
                        w: 350,
                        h: 25,
                        parentId: null,
                        content: 'N° Commande: {{orderNumber}}',
                        style: {
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 200,
                        w: 300,
                        h: 25,
                        parentId: null,
                        content: 'Date: {{date}}',
                        style: {
                            fontSize: '14px',
                            color: '#374151',
                            textAlign: 'right'
                        }
                    },
                    // Tableau
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'table',
                        x: 0,
                        y: 250,
                        w: '100%',
                        h: 200,
                        parentId: null,
                        style: {
                            backgroundColor: '#fff7ed',
                            borderColor: '#fb923c'
                        },
                        columns: [
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Référence',
                                value: '{{ref}}',
                                align: 'left',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Désignation',
                                value: '{{designation}}',
                                align: 'left',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Quantité',
                                value: '{{quantite}}',
                                align: 'center',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Prix Unit.',
                                value: '{{prix}}',
                                align: 'right',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            }
                        ]
                    },
                    // Total
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 480,
                        w: 300,
                        h: 30,
                        parentId: null,
                        content: 'Total: {{total}}',
                        style: {
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#ea580c',
                            textAlign: 'right'
                        }
                    },
                    // Signature
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'box',
                        x: 0,
                        y: 550,
                        w: 300,
                        h: 100,
                        parentId: null,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: '#d1d5db',
                            borderWidth: '1px',
                            borderStyle: 'dashed',
                            borderRadius: '4px'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 10,
                        y: 560,
                        w: 280,
                        h: 25,
                        parentId: null,
                        content: 'Signature et cachet:',
                        style: {
                            fontSize: '12px',
                            color: '#6b7280'
                        }
                    }
                ],
                globalSettings: baseSettings
            };
        case 'delivery':
            return {
                elements: [
                    // Titre
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 20,
                        w: '100%',
                        h: 40,
                        parentId: null,
                        content: 'BON DE LIVRAISON',
                        style: {
                            fontSize: '28px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: '#4f46e5'
                        }
                    },
                    // Informations
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 80,
                        w: 300,
                        h: 30,
                        parentId: null,
                        content: 'Expéditeur:',
                        style: {
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 115,
                        w: 300,
                        h: 60,
                        parentId: null,
                        content: '{{senderName}}\n{{senderAddress}}',
                        style: {
                            fontSize: '12px',
                            color: '#374151'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 80,
                        w: 300,
                        h: 30,
                        parentId: null,
                        content: 'Destinataire:',
                        style: {
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 115,
                        w: 300,
                        h: 60,
                        parentId: null,
                        content: '{{recipientName}}\n{{recipientAddress}}',
                        style: {
                            fontSize: '12px',
                            color: '#374151'
                        }
                    },
                    // Numéro et date
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 0,
                        y: 200,
                        w: 350,
                        h: 25,
                        parentId: null,
                        content: 'N° BL: {{deliveryNumber}}',
                        style: {
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#111827'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 414,
                        y: 200,
                        w: 300,
                        h: 25,
                        parentId: null,
                        content: 'Date: {{date}}',
                        style: {
                            fontSize: '14px',
                            color: '#374151',
                            textAlign: 'right'
                        }
                    },
                    // Tableau
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'table',
                        x: 0,
                        y: 250,
                        w: '100%',
                        h: 250,
                        parentId: null,
                        style: {
                            backgroundColor: '#eef2ff',
                            borderColor: '#818cf8'
                        },
                        columns: [
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Référence',
                                value: '{{ref}}',
                                align: 'left',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Désignation',
                                value: '{{designation}}',
                                align: 'left',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'Quantité livrée',
                                value: '{{quantite}}',
                                align: 'center',
                                fontWeight: 'bold',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            },
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                                label: 'État',
                                value: '{{etat}}',
                                align: 'center',
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none'
                            }
                        ]
                    },
                    // Signatures
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'box',
                        x: 0,
                        y: 530,
                        w: 340,
                        h: 100,
                        parentId: null,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: '#d1d5db',
                            borderWidth: '1px',
                            borderStyle: 'dashed',
                            borderRadius: '4px'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 10,
                        y: 540,
                        w: 320,
                        h: 25,
                        parentId: null,
                        content: 'Signature livreur:',
                        style: {
                            fontSize: '12px',
                            color: '#6b7280'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'box',
                        x: 374,
                        y: 530,
                        w: 340,
                        h: 100,
                        parentId: null,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: '#d1d5db',
                            borderWidth: '1px',
                            borderStyle: 'dashed',
                            borderRadius: '4px'
                        }
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                        type: 'text',
                        x: 384,
                        y: 540,
                        w: 320,
                        h: 25,
                        parentId: null,
                        content: 'Signature destinataire (Bon pour réception):',
                        style: {
                            fontSize: '12px',
                            color: '#6b7280'
                        }
                    }
                ],
                globalSettings: baseSettings
            };
        default:
            return {
                elements: [],
                globalSettings: baseSettings
            };
    }
}
async function createTemplate() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSession"])();
    if (!session) return;
    const template = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].template.create({
        data: {
            name: 'Nouveau Modèle',
            content: JSON.stringify([]),
            userId: session.user.id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/dashboard/builder/${template.id}`);
}
async function createTemplateFromBase(baseType) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSession"])();
    if (!session) return;
    const templateNames = {
        blank: 'Nouveau Modèle',
        invoice: 'Facture',
        quote: 'Devis',
        order: 'Bon de commande',
        delivery: 'Bon de livraison'
    };
    const templateIcons = {
        blank: 'File',
        invoice: 'FileText',
        quote: 'Receipt',
        order: 'ShoppingCart',
        delivery: 'Package'
    };
    const content = getBaseTemplateContent(baseType);
    const template = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].template.create({
        data: {
            name: templateNames[baseType] || 'Nouveau Modèle',
            content: JSON.stringify(content),
            templateType: baseType,
            customIcon: templateIcons[baseType] || 'File',
            userId: session.user.id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/dashboard/builder/${template.id}`);
}
async function deleteTemplate(templateId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSession"])();
    if (!session) return;
    // Verify ownership
    const template = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].template.findUnique({
        where: {
            id: templateId
        }
    });
    if (!template || template.userId !== session.user.id) {
        throw new Error("Unauthorized");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].template.delete({
        where: {
            id: templateId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createTemplate,
    createTemplateFromBase,
    deleteTemplate
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTemplate, "00d031f605e9be50a467d036d8fe467dae810a4b4f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTemplateFromBase, "4070556f7aaea3c46afb190d10062fa04ef0e25256", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTemplate, "401fe10ad54af38cc509e3537bd0cba47834fb277f", null);
}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/dashboard/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/dashboard/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "401fe10ad54af38cc509e3537bd0cba47834fb277f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTemplate"],
    "4070556f7aaea3c46afb190d10062fa04ef0e25256",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTemplateFromBase"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/app/dashboard/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__19b08f84._.js.map