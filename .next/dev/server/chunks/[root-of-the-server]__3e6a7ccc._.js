module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/api/generate/[slug]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
;
;
// Fonction pour extraire une valeur depuis un objet JSON avec notation pointée
function getValueByPath(obj, path) {
    return path.split('.').reduce((current, key)=>current?.[key], obj);
}
async function POST(request, { params }) {
    try {
        const { slug } = await params;
        // Récupérer la route API
        const apiRoute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].apiRoute.findUnique({
            where: {
                slug
            },
            include: {
                template: true
            }
        });
        if (!apiRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Route non trouvée'
            }, {
                status: 404
            });
        }
        if (!apiRoute.isActive) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Route désactivée'
            }, {
                status: 403
            });
        }
        // Vérifier la clé API si requise
        if (apiRoute.apiKey) {
            const apiKey = request.headers.get('X-API-Key') || new URL(request.url).searchParams.get('apiKey');
            if (apiKey !== apiRoute.apiKey) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Clé API invalide'
                }, {
                    status: 401
                });
            }
        }
        // Récupérer les données JSON envoyées (peut être vide)
        let jsonData = {};
        try {
            const text = await request.text();
            if (text && text.trim()) {
                jsonData = JSON.parse(text);
            }
        } catch (e) {
            // Si pas de body ou body invalide, utiliser un objet vide
            jsonData = {};
        }
        // Parser le mapping des variables
        let variableMapping = {};
        try {
            variableMapping = JSON.parse(apiRoute.variableMapping);
        } catch (e) {
            // Si pas de mapping, utiliser un objet vide
            variableMapping = {};
        }
        // Parser le template
        const templateData = JSON.parse(apiRoute.template.content);
        const elements = templateData.elements || [];
        const globalSettings = templateData.globalSettings;
        // Appliquer le mapping des variables
        const processedElements = elements.map((element)=>{
            if (element.type === 'text' && element.content) {
                let newContent = element.content;
                // Remplacer chaque variable du template par la valeur correspondante du JSON
                Object.entries(variableMapping).forEach(([jsonPath, templateVar])=>{
                    const value = getValueByPath(jsonData, jsonPath);
                    if (value !== undefined) {
                        // Enlever les accolades de la variable template si présentes
                        const cleanVar = templateVar.replace(/[{}]/g, '');
                        newContent = newContent.replace(new RegExp(`{{${cleanVar}}}`, 'g'), String(value));
                    }
                });
                return {
                    ...element,
                    content: newContent
                };
            }
            return element;
        });
        // Selon le type de réponse demandé
        if (apiRoute.responseType === 'base64') {
            // Retourner les données en JSON pour que le client génère le PDF
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                elements: processedElements,
                globalSettings,
                format: 'base64'
            });
        } else if (apiRoute.responseType === 'url') {
            // TODO: Implémenter le stockage et retourner une URL
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Type URL pas encore implémenté',
                elements: processedElements,
                globalSettings
            });
        } else {
            // responseType === 'download'
            // Retourner les données pour génération côté client
            // Note: La génération réelle du PDF nécessite html2canvas qui ne fonctionne que côté client
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                elements: processedElements,
                globalSettings,
                templateName: apiRoute.template.name,
                format: 'download'
            });
        }
    } catch (error) {
        console.error('Erreur génération PDF:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Erreur lors de la génération',
            details: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3e6a7ccc._.js.map