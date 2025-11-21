module.exports = [
"[project]/components/InvoiceRenderer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InvoiceRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function InvoiceRenderer({ elements, globalSettings, id }) {
    const padding = globalSettings?.padding ?? 0;
    const headerHeight = globalSettings?.headerHeight ?? 0;
    const footerHeight = globalSettings?.footerHeight ?? 0;
    // Helper pour le rendu récursif
    const renderElement = (element)=>{
        const children = elements.filter((e)=>e.parentId === element.id);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'absolute',
                top: element.y,
                left: element.x,
                width: element.w,
                height: element.h,
                ...element.style
            },
            children: [
                element.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full whitespace-pre-wrap",
                    style: {
                        color: element.style?.color,
                        textAlign: element.style?.textAlign,
                        fontSize: element.style?.fontSize,
                        fontWeight: element.style?.fontWeight,
                        fontStyle: element.style?.fontStyle,
                        textDecoration: element.style?.textDecoration
                    },
                    children: element.content
                }, void 0, false, {
                    fileName: "[project]/components/InvoiceRenderer.tsx",
                    lineNumber: 56,
                    columnNumber: 13
                }, this),
                (element.type === 'box' || element.type === 'container') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full relative",
                    style: {
                        backgroundColor: element.style?.backgroundColor || (element.type === 'container' ? 'transparent' : '#e5e7eb'),
                        borderColor: element.style?.borderColor || '#9ca3af',
                        borderWidth: element.style?.borderWidth || '1px',
                        borderStyle: 'solid',
                        borderRadius: element.style?.borderRadius || '0px'
                    },
                    children: children.map(renderElement)
                }, void 0, false, {
                    fileName: "[project]/components/InvoiceRenderer.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                }, this),
                element.type === 'image' && element.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full overflow-hidden",
                    style: {
                        borderRadius: element.style?.borderRadius || '0px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: element.content,
                        alt: "Element",
                        className: "w-full h-full object-cover block",
                        style: {
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/InvoiceRenderer.tsx",
                        lineNumber: 95,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/InvoiceRenderer.tsx",
                    lineNumber: 88,
                    columnNumber: 13
                }, this),
                element.type === 'line' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        style: {
                            height: element.style?.height || '2px',
                            backgroundColor: element.style?.backgroundColor || 'black'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/InvoiceRenderer.tsx",
                        lineNumber: 110,
                        columnNumber: 16
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/InvoiceRenderer.tsx",
                    lineNumber: 107,
                    columnNumber: 13
                }, this),
                element.type === 'table' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full border-collapse text-sm text-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        backgroundColor: element.style?.backgroundColor || '#f3f4f6'
                                    },
                                    children: (element.columns || [
                                        {
                                            id: '1',
                                            label: 'Colonne 1'
                                        },
                                        {
                                            id: '2',
                                            label: 'Colonne 2'
                                        }
                                    ]).map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border p-2 text-gray-900",
                                            style: {
                                                borderColor: element.style?.borderColor || '#d1d5db',
                                                minWidth: col.width || 100,
                                                textAlign: col.align || 'left',
                                                fontWeight: col.fontWeight || 'bold',
                                                fontStyle: col.fontStyle || 'normal',
                                                textDecoration: col.textDecoration || 'none'
                                            },
                                            children: col.label
                                        }, col.id, false, {
                                            fileName: "[project]/components/InvoiceRenderer.tsx",
                                            lineNumber: 126,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/InvoiceRenderer.tsx",
                                    lineNumber: 124,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/InvoiceRenderer.tsx",
                                lineNumber: 123,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: element.data?.rows && element.data.rows.length > 0 ? element.data.rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: (element.columns || []).map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border p-2 text-gray-900",
                                                style: {
                                                    borderColor: element.style?.borderColor || '#d1d5db',
                                                    textAlign: col.align || 'left',
                                                    fontWeight: col.fontWeight || 'normal',
                                                    fontStyle: col.fontStyle || 'normal',
                                                    textDecoration: col.textDecoration || 'none'
                                                },
                                                children: row[col.id] || col.value || ''
                                            }, col.id, false, {
                                                fileName: "[project]/components/InvoiceRenderer.tsx",
                                                lineNumber: 149,
                                                columnNumber: 27
                                            }, this))
                                    }, rowIndex, false, {
                                        fileName: "[project]/components/InvoiceRenderer.tsx",
                                        lineNumber: 147,
                                        columnNumber: 23
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: (element.columns || [
                                                {
                                                    id: '1',
                                                    label: 'Colonne 1'
                                                },
                                                {
                                                    id: '2',
                                                    label: 'Colonne 2'
                                                }
                                            ]).map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border p-2 text-gray-900",
                                                    style: {
                                                        borderColor: element.style?.borderColor || '#d1d5db',
                                                        textAlign: col.align || 'left',
                                                        fontWeight: col.fontWeight || 'normal',
                                                        fontStyle: col.fontStyle || 'normal',
                                                        textDecoration: col.textDecoration || 'none'
                                                    },
                                                    children: col.value || 'Exemple'
                                                }, col.id, false, {
                                                    fileName: "[project]/components/InvoiceRenderer.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/InvoiceRenderer.tsx",
                                            lineNumber: 167,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: (element.columns || [
                                                {
                                                    id: '1',
                                                    label: 'Colonne 1'
                                                },
                                                {
                                                    id: '2',
                                                    label: 'Colonne 2'
                                                }
                                            ]).map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border p-2 text-gray-900",
                                                    style: {
                                                        borderColor: element.style?.borderColor || '#d1d5db',
                                                        textAlign: col.align || 'left',
                                                        fontWeight: col.fontWeight || 'normal',
                                                        fontStyle: col.fontStyle || 'normal',
                                                        textDecoration: col.textDecoration || 'none'
                                                    },
                                                    children: col.value || 'Exemple'
                                                }, col.id, false, {
                                                    fileName: "[project]/components/InvoiceRenderer.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/InvoiceRenderer.tsx",
                                            lineNumber: 184,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/InvoiceRenderer.tsx",
                                lineNumber: 143,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InvoiceRenderer.tsx",
                        lineNumber: 122,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/InvoiceRenderer.tsx",
                    lineNumber: 121,
                    columnNumber: 13
                }, this)
            ]
        }, element.id, true, {
            fileName: "[project]/components/InvoiceRenderer.tsx",
            lineNumber: 44,
            columnNumber: 9
        }, this);
    };
    // On ne rend que les éléments racine (sans parent)
    const rootElements = elements.filter((el)=>!el.parentId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: id,
        className: "bg-white shadow-none relative print:shadow-none",
        style: {
            width: '794px',
            height: '1123px',
            position: 'relative',
            overflow: 'hidden',
            padding: `${padding}px`,
            paddingTop: `${padding + headerHeight}px`,
            paddingBottom: `${padding + footerHeight}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'relative',
                width: '100%',
                height: '100%'
            },
            children: rootElements.map(renderElement)
        }, void 0, false, {
            fileName: "[project]/components/InvoiceRenderer.tsx",
            lineNumber: 228,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/InvoiceRenderer.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[project]/app/dashboard/generate/[id]/PdfGenerator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PdfGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InvoiceRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/InvoiceRenderer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/table.js [app-ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function PdfGenerator({ template }) {
    const [elements, setElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [globalSettings, setGlobalSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // État pour les variables détectées
    const [variables, setVariables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [detectedVars, setDetectedVars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // État pour les lignes des tableaux : { tableId: [ { colId: value }, ... ] }
    const [tableRows, setTableRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        try {
            const parsed = JSON.parse(template.content);
            let parsedElements = [];
            if (Array.isArray(parsed)) {
                parsedElements = parsed;
                setElements(parsed);
            } else {
                parsedElements = parsed.elements || [];
                setElements(parsed.elements || []);
                setGlobalSettings(parsed.globalSettings);
            }
            // Détecter toutes les variables {{...}} dans le template
            const varSet = new Set();
            const varRegex = /\{\{(\w+)\}\}/g;
            parsedElements.forEach((el)=>{
                if (el.type === 'text' && el.content) {
                    let match;
                    while((match = varRegex.exec(el.content)) !== null){
                        varSet.add(match[1]);
                    }
                }
                // Vérifier aussi dans les colonnes de tableau (label et value)
                if (el.type === 'table' && el.columns) {
                    el.columns.forEach((col)=>{
                        if (col.label) {
                            let match;
                            while((match = varRegex.exec(col.label)) !== null){
                                varSet.add(match[1]);
                            }
                        }
                        if (col.value) {
                            let match;
                            while((match = varRegex.exec(col.value)) !== null){
                                varSet.add(match[1]);
                            }
                        }
                    });
                }
            });
            const varsArray = Array.from(varSet).sort();
            setDetectedVars(varsArray);
            // Initialiser les variables avec des valeurs par défaut
            const initialVars = {};
            varsArray.forEach((varName)=>{
                initialVars[varName] = '';
            });
            setVariables(initialVars);
            // Initialiser les tableaux avec une ligne vide par défaut
            const initialTableRows = {};
            parsedElements.forEach((el)=>{
                if (el.type === 'table' && el.columns && el.columns.length > 0) {
                    const emptyRow = {};
                    el.columns.forEach((col)=>{
                        emptyRow[col.id] = '';
                    });
                    initialTableRows[el.id] = [
                        emptyRow
                    ];
                }
            });
            setTableRows(initialTableRows);
        } catch  {
            setElements([]);
        }
    }, [
        template.content
    ]);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleDownload = async ()=>{
        setIsGenerating(true);
        try {
            // Fonction pour normaliser les couleurs en format supporté
            const normalizeColor = (color)=>{
                if (typeof color !== 'string') return color;
                // Si c'est déjà un format valide (hex, rgb, rgba), on le garde
                if (color.match(/^#[0-9a-fA-F]{3,8}$/) || color.match(/^rgba?\(/i) || color.match(/^hsla?\(/i)) {
                    return color;
                }
                // Pour tout autre format non standard, on retourne une couleur par défaut
                return color;
            };
            // Fonction pour nettoyer les styles
            const cleanStyle = (style)=>{
                if (!style) return style;
                const cleaned = {
                    ...style
                };
                if (cleaned.backgroundColor) cleaned.backgroundColor = normalizeColor(cleaned.backgroundColor);
                if (cleaned.color) cleaned.color = normalizeColor(cleaned.color);
                if (cleaned.borderColor) cleaned.borderColor = normalizeColor(cleaned.borderColor);
                return cleaned;
            };
            // Prétraitement des images : Conversion URL externe -> Base64 via Proxy
            // Cela contourne les restrictions CORS de html2canvas pour les URLs externes
            const processedElements = await Promise.all(elements.map(async (el)=>{
                // Nettoyer les styles de l'élément
                const cleanedEl = {
                    ...el,
                    style: cleanStyle(el.style)
                };
                if (el.type === 'image' && el.content && el.content.startsWith('http')) {
                    try {
                        const response = await fetch(`/api/proxy-image?url=${encodeURIComponent(el.content)}`);
                        if (!response.ok) throw new Error('Proxy failed');
                        const blob = await response.blob();
                        const base64 = await new Promise((resolve)=>{
                            const reader = new FileReader();
                            reader.onloadend = ()=>resolve(reader.result);
                            reader.readAsDataURL(blob);
                        });
                        return {
                            ...cleanedEl,
                            content: base64
                        };
                    } catch (e) {
                        console.error('Image processing failed', e);
                        return cleanedEl;
                    }
                }
                return cleanedEl;
            }));
            setElements(processedElements);
            // Attendre que React mette à jour le DOM avec les nouvelles sources d'images (Base64)
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            const element = document.getElementById('print-target');
            if (!element) return;
            // Créer une copie temporaire pour le rendu sans les classes Tailwind problématiques
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.top = '0';
            tempContainer.innerHTML = element.innerHTML;
            document.body.appendChild(tempContainer);
            // Remplacer toutes les classes text-gray-* par des styles inline
            const allTextElements = tempContainer.querySelectorAll('.text-gray-900, .text-gray-800, .text-gray-700, .text-gray-600');
            allTextElements.forEach((el)=>{
                el.style.color = 'rgb(17, 24, 39)'; // gray-900 en RGB
                el.classList.remove('text-gray-900', 'text-gray-800', 'text-gray-700', 'text-gray-600');
            });
            // Remplacer les bg-gray-* 
            const allBgElements = tempContainer.querySelectorAll('.bg-gray-50, .bg-gray-100');
            allBgElements.forEach((el)=>{
                el.style.backgroundColor = 'rgb(249, 250, 251)'; // gray-50 en RGB
                el.classList.remove('bg-gray-50', 'bg-gray-100');
            });
            const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(tempContainer, {
                scale: 2,
                logging: false,
                useCORS: true,
                allowTaint: false,
                foreignObjectRendering: false,
                onclone: (clonedDoc)=>{
                    // Nettoyer tous les styles inline et computed problématiques dans le document cloné
                    const allElements = clonedDoc.querySelectorAll('*');
                    allElements.forEach((el)=>{
                        // Obtenir le style calculé de l'élément original
                        const originalEl = document.querySelector(`[data-element-id="${el.getAttribute('data-element-id')}"]`) || el;
                        const computedStyle = window.getComputedStyle(originalEl);
                        // Forcer les couleurs en format RGB/RGBA
                        [
                            'backgroundColor',
                            'color',
                            'borderColor',
                            'borderTopColor',
                            'borderRightColor',
                            'borderBottomColor',
                            'borderLeftColor'
                        ].forEach((prop)=>{
                            try {
                                const computed = computedStyle[prop];
                                if (computed && computed !== 'transparent' && computed !== 'rgba(0, 0, 0, 0)') {
                                    // Convertir toute couleur en RGB pour éviter les formats non supportés
                                    if (computed.includes('lab(') || computed.includes('lch(') || computed.includes('oklch(') || !computed.match(/^(#|rgb|rgba|transparent)/i)) {
                                        // Utiliser une valeur par défaut sûre
                                        if (prop.includes('background')) {
                                            el.style[prop] = 'rgb(255, 255, 255)';
                                        } else if (prop.includes('border')) {
                                            el.style[prop] = 'rgb(209, 213, 219)'; // gray-300
                                        } else {
                                            el.style[prop] = 'rgb(0, 0, 0)';
                                        }
                                    } else {
                                        el.style[prop] = computed;
                                    }
                                }
                            } catch (e) {
                                // En cas d'erreur, utiliser une valeur sûre
                                console.warn('Color conversion error for', prop, e);
                            }
                        });
                        // Forcer aussi les bordures à être explicites
                        if (el.style.border || computedStyle.border) {
                            const borderWidth = computedStyle.borderWidth || '1px';
                            const borderStyle = computedStyle.borderStyle || 'solid';
                            const borderColor = computedStyle.borderColor || 'rgb(209, 213, 219)';
                            if (borderColor.includes('lab(') || borderColor.includes('lch(')) {
                                el.style.border = `${borderWidth} ${borderStyle} rgb(209, 213, 219)`;
                            }
                        }
                    });
                }
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            // Nom du fichier basé sur la première variable ou le nom du template
            const firstVar = detectedVars.length > 0 ? variables[detectedVars[0]] : template.name;
            const fileName = firstVar ? `${firstVar.replace(/[^a-z0-9]/gi, '_')}.pdf` : 'document.pdf';
            pdf.save(fileName);
            // Nettoyer le conteneur temporaire
            document.body.removeChild(tempContainer);
        } catch (error) {
            console.error('PDF generation error:', error);
            // Nettoyer en cas d'erreur aussi
            const tempContainer = document.querySelector('div[style*="-9999px"]');
            if (tempContainer) document.body.removeChild(tempContainer);
            throw error;
        } finally{
            setIsGenerating(false);
        }
    };
    // Inject variables into elements for rendering
    const renderedElements = elements.map((el)=>{
        if (el.type === 'text' && el.content) {
            let newContent = el.content;
            Object.entries(variables).forEach(([key, value])=>{
                newContent = newContent.replace(new RegExp(`{{${key}}}`, 'g'), value);
            });
            return {
                ...el,
                content: newContent
            };
        }
        // Inject table rows data
        if (el.type === 'table') {
            const rows = tableRows[el.id] || [];
            // Remplacer les variables dans les valeurs des lignes
            const processedRows = rows.map((row)=>{
                const processedRow = {};
                Object.entries(row).forEach(([colId, value])=>{
                    let newValue = value;
                    Object.entries(variables).forEach(([key, varValue])=>{
                        newValue = newValue.replace(new RegExp(`{{${key}}}`, 'g'), varValue);
                    });
                    processedRow[colId] = newValue;
                });
                return processedRow;
            });
            return {
                ...el,
                data: {
                    rows: processedRows
                }
            };
        }
        return el;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100/50 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    className: "p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                        lineNumber: 297,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-bold text-gray-900 text-lg",
                                            children: "Générer la facture"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                            lineNumber: 300,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-800",
                                            children: [
                                                "Modèle : ",
                                                template.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                            lineNumber: 301,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDownload,
                            disabled: isGenerating,
                            className: "bg-green-600 text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-green-700 shadow-lg shadow-green-600/20 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-wait",
                            children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, this),
                                    "Génération..."
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this),
                                    " Télécharger PDF"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 max-w-7xl mx-auto w-full p-8 gap-8 justify-center items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-96 bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto",
                        children: [
                            detectedVars.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-gray-900 text-lg mb-2",
                                        children: "Données variables"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "text-blue-600 shrink-0 mt-0.5",
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-blue-700 leading-relaxed",
                                                children: "Remplissez les champs ci-dessous pour mettre à jour la facture en temps réel."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-5",
                                        children: detectedVars.map((varName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: `var-${varName}`,
                                                        className: "block text-sm font-medium text-gray-800 mb-1.5 capitalize",
                                                        children: varName.replace(/([A-Z])/g, ' $1').trim()
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: `var-${varName}`,
                                                        type: "text",
                                                        value: variables[varName] || '',
                                                        onChange: (e)=>setVariables({
                                                                ...variables,
                                                                [varName]: e.target.value
                                                            }),
                                                        className: "block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-shadow",
                                                        placeholder: `Entrez ${varName}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, varName, true, {
                                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                lineNumber: 339,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this),
                            elements.filter((el)=>el.type === 'table').map((tableElement)=>{
                                const tableColumns = tableElement.columns || [];
                                const rows = tableRows[tableElement.id] || [];
                                if (tableColumns.length === 0) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 pb-8 border-b border-gray-200 last:border-b-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                                                    size: 20,
                                                    className: "text-gray-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-gray-900 text-lg",
                                                    children: "Lignes du tableau"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gray-50 rounded-lg border border-gray-200 p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-medium text-gray-700",
                                                                        children: [
                                                                            "Ligne ",
                                                                            rowIndex + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                                        lineNumber: 375,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            const newRows = rows.filter((_, i)=>i !== rowIndex);
                                                                            setTableRows({
                                                                                ...tableRows,
                                                                                [tableElement.id]: newRows
                                                                            });
                                                                        },
                                                                        className: "p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors",
                                                                        title: "Supprimer la ligne",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                                            lineNumber: 384,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: tableColumns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: `table-${tableElement.id}-row-${rowIndex}-col-${col.id}`,
                                                                                className: "block text-xs font-medium text-gray-800 mb-1",
                                                                                children: col.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                                                lineNumber: 391,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                id: `table-${tableElement.id}-row-${rowIndex}-col-${col.id}`,
                                                                                type: "text",
                                                                                value: row[col.id] || '',
                                                                                onChange: (e)=>{
                                                                                    const newRows = [
                                                                                        ...rows
                                                                                    ];
                                                                                    newRows[rowIndex] = {
                                                                                        ...row,
                                                                                        [col.id]: e.target.value
                                                                                    };
                                                                                    setTableRows({
                                                                                        ...tableRows,
                                                                                        [tableElement.id]: newRows
                                                                                    });
                                                                                },
                                                                                className: "block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 text-sm focus:border-blue-500 focus:ring-blue-500",
                                                                                placeholder: col.value || `Valeur pour ${col.label}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                                                lineNumber: 394,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, col.id, true, {
                                                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, rowIndex, true, {
                                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const emptyRow = {};
                                                        tableColumns.forEach((col)=>{
                                                            emptyRow[col.id] = '';
                                                        });
                                                        setTableRows({
                                                            ...tableRows,
                                                            [tableElement.id]: [
                                                                ...rows,
                                                                emptyRow
                                                            ]
                                                        });
                                                    },
                                                    className: "w-full py-2.5 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Ajouter une ligne"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, tableElement.id, true, {
                                    fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this);
                            }),
                            detectedVars.length === 0 && elements.filter((el)=>el.type === 'table').length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-sm",
                                        children: "Aucune variable ou tableau détecté dans ce modèle."
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-xs mt-2",
                                        children: [
                                            "Utilisez la syntaxe ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-gray-100 px-1.5 py-0.5 rounded",
                                                children: '{{nomVariable}}'
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                                lineNumber: 433,
                                                columnNumber: 77
                                            }, this),
                                            " dans vos éléments."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                lineNumber: 431,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-2xl border border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "print-target",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InvoiceRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    elements: renderedElements,
                                    globalSettings: globalSettings
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                    lineNumber: 442,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                                lineNumber: 441,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                            lineNumber: 440,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/generate/[id]/PdfGenerator.tsx",
        lineNumber: 292,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__abd1498d._.js.map