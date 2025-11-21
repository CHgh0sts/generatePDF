module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
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
"[project]/app/dashboard/builder/[id]/BuilderClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuilderClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/table.js [app-ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.js [app-ssr] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-center.js [app-ssr] (ecmascript) <export default as AlignCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-end.js [app-ssr] (ecmascript) <export default as AlignRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-template.js [app-ssr] (ecmascript) <export default as LayoutTemplate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-ssr] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bold.js [app-ssr] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/italic.js [app-ssr] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/underline.js [app-ssr] (ecmascript) <export default as Underline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InvoiceRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/InvoiceRenderer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// --- Constants ---
const CANVAS_WIDTH = 794; // A4 Width in px (approx)
const CANVAS_HEIGHT = 1123; // A4 Height in px
function InputWithUnit({ label, value, onChange, id }) {
    const parseValue = (val)=>{
        const strVal = String(val);
        // Extract unit: check for % first, then check for letters at the end
        let unit = 'px';
        let numStr = strVal;
        if (strVal.includes('%')) {
            unit = '%';
            numStr = strVal.replace('%', '');
        } else if (strVal.match(/[a-zA-Z]+$/)) {
            unit = strVal.match(/[a-zA-Z]+$/)?.[0] || 'px';
            numStr = strVal.replace(/[a-zA-Z]+$/, '');
        }
        const num = parseFloat(numStr);
        return {
            num: isNaN(num) ? 0 : num,
            unit
        };
    };
    const { num, unit } = parseValue(value);
    const handleNumChange = (e)=>{
        const newNum = e.target.value;
        if (newNum === '') {
            onChange(unit === 'px' ? 0 : `0${unit}`);
            return;
        }
        const parsed = parseFloat(newNum);
        const valToEmit = isNaN(parsed) ? 0 : parsed;
        onChange(unit === 'px' ? valToEmit : `${valToEmit}${unit}`);
    };
    const handleUnitChange = (e)=>{
        const newUnit = e.target.value;
        onChange(newUnit === 'px' ? num : `${num}${newUnit}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "block text-xs font-medium text-gray-900",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex rounded-md shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        id: id,
                        value: num,
                        onChange: handleNumChange,
                        step: "any",
                        className: "flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md text-sm text-gray-900 border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: `${id}-unit`,
                        title: "Unité",
                        value: unit,
                        onChange: handleUnitChange,
                        className: "inline-flex items-center px-2 py-2 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "px",
                                children: "px"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "%",
                                children: "%"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "em",
                                children: "em"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "rem",
                                children: "rem"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
// --- Components ---
// 1. Sidebar Item (Source)
function SidebarItem({ type, icon: Icon, label }) {
    const { attributes, listeners, setNodeRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDraggable"])({
        id: `sidebar-${type}`,
        data: {
            type,
            isSidebar: true
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        ...listeners,
        ...attributes,
        className: "group p-3 bg-white border border-gray-200 rounded-lg cursor-grab hover:bg-blue-50 hover:border-blue-200 shadow-sm transition-all flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1.5 bg-gray-100 rounded-md text-gray-800 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                    lineNumber: 160,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-sm text-gray-800 group-hover:text-blue-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
function DraggableElement({ element, isSelected, onSelect, onResize, children }) {
    const { attributes, listeners, setNodeRef: setDraggableRef, transform, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDraggable"])({
        id: element.id,
        data: {
            ...element,
            isSidebar: false
        }
    });
    // Make containers droppable
    const { setNodeRef: setDroppableRef, isOver: isDroppableOver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: element.id,
        data: {
            isContainer: true,
            element
        },
        disabled: element.type !== 'container'
    });
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Merge refs
    const setRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node)=>{
        setDraggableRef(node);
        if (element.type === 'container') {
            setDroppableRef(node);
        }
        elementRef.current = node;
    }, [
        setDraggableRef,
        setDroppableRef,
        element.type
    ]);
    // Resize Logic
    const resizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleResizeStart = (e, handle)=>{
        e.stopPropagation();
        // Use actual visual dimensions for smooth resizing from current state
        let currentW = 100;
        let currentH = 100;
        let parentW = 0;
        let parentH = 0;
        if (elementRef.current) {
            currentW = elementRef.current.offsetWidth;
            currentH = elementRef.current.offsetHeight;
            if (elementRef.current.parentElement) {
                parentW = elementRef.current.parentElement.offsetWidth;
                parentH = elementRef.current.parentElement.offsetHeight;
            }
        } else {
            currentW = typeof element.w === 'number' ? element.w : parseFloat(String(element.w)) || 100;
            currentH = typeof element.h === 'number' ? element.h : parseFloat(String(element.h)) || 100;
        }
        const getUnit = (val)=>{
            if (typeof val === 'number') return 'px';
            return String(val).replace(/^[-\d.]+/g, '') || 'px';
        };
        resizeRef.current = {
            w: currentW,
            h: currentH,
            startX: e.clientX,
            startY: e.clientY,
            unitW: getUnit(element.w),
            unitH: getUnit(element.h),
            parentW,
            parentH
        };
        const handleMouseMove = (moveEvent)=>{
            if (!resizeRef.current) return;
            const dx = moveEvent.clientX - resizeRef.current.startX;
            const dy = moveEvent.clientY - resizeRef.current.startY;
            let newW_px = resizeRef.current.w;
            let newH_px = resizeRef.current.h;
            if (handle.includes('e')) newW_px += dx;
            if (handle.includes('s')) newH_px += dy;
            newW_px = Math.max(20, newW_px);
            newH_px = Math.max(20, newH_px);
            let finalW = newW_px;
            let finalH = newH_px;
            // Preserve Unit: %
            if (resizeRef.current.unitW === '%' && resizeRef.current.parentW > 0) {
                finalW = `${(newW_px / resizeRef.current.parentW * 100).toFixed(2)}%`;
            }
            if (resizeRef.current.unitH === '%' && resizeRef.current.parentH > 0) {
                finalH = `${(newH_px / resizeRef.current.parentH * 100).toFixed(2)}%`;
            }
            onResize(element.id, finalW, finalH);
        };
        const handleMouseUp = ()=>{
            resizeRef.current = null;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };
    // Styles
    const style = {
        position: 'absolute',
        top: element.y,
        left: element.x,
        width: element.w,
        height: element.h,
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        zIndex: isSelected ? 50 : element.type === 'container' ? 10 : 20,
        opacity: isDragging ? 0.5 : 1,
        ...element.style
    };
    // Visual feedback for Drop Target (Container)
    const isContainerActive = isDroppableOver && element.type === 'container' && !isDragging;
    const containerStyle = {
        ...style,
        backgroundColor: isContainerActive ? 'rgba(59, 130, 246, 0.1)' : style.backgroundColor,
        borderColor: isContainerActive ? '#3b82f6' : isSelected ? '#2563eb' : style.borderColor || 'transparent',
        borderWidth: isContainerActive || isSelected ? '2px' : style.borderWidth || (element.type === 'container' ? '1px' : '0'),
        borderStyle: element.type === 'container' ? 'dashed' : 'solid'
    };
    const renderContent = ()=>{
        switch(element.type){
            case 'text':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full overflow-hidden leading-tight",
                    style: {
                        color: element.style?.color,
                        fontWeight: element.style?.fontWeight,
                        fontStyle: element.style?.fontStyle,
                        textDecoration: element.style?.textDecoration
                    },
                    children: element.content
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                    lineNumber: 320,
                    columnNumber: 16
                }, this);
            case 'image':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full overflow-hidden flex items-center justify-center bg-gray-50 border border-dashed border-gray-300",
                    style: {
                        borderRadius: element.style?.borderRadius || '0px'
                    },
                    children: element.content ? /* eslint-disable-next-line @next/next/no-img-element */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: element.content,
                        alt: "Element",
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 334,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-800 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 336,
                                columnNumber: 73
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px]",
                                children: "Image"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 336,
                                columnNumber: 96
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 336,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                    lineNumber: 328,
                    columnNumber: 11
                }, this);
            case 'box':
            case 'container':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full relative",
                    children: [
                        element.type === 'container' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-800 bg-gray-100 px-1 rounded",
                                children: "Groupe"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 344,
                                columnNumber: 92
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                            lineNumber: 344,
                            columnNumber: 48
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                    lineNumber: 343,
                    columnNumber: 12
                }, this);
            case 'line':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        style: {
                            height: element.style?.height || '2px',
                            backgroundColor: element.style?.backgroundColor || 'black'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 349,
                        columnNumber: 66
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                    lineNumber: 349,
                    columnNumber: 17
                }, this);
            case 'table':
                const columns = element.columns || [
                    {
                        id: '1',
                        label: 'Colonne 1'
                    },
                    {
                        id: '2',
                        label: 'Colonne 2'
                    }
                ];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full overflow-hidden bg-white border border-gray-200 text-xs text-gray-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-gray-50 border-b text-center text-gray-900",
                            children: "Tableau"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                            lineNumber: 354,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b pb-1 font-bold text-gray-900",
                                    children: columns.map((col, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 px-1",
                                            style: {
                                                minWidth: col.width || 100,
                                                textAlign: col.align || 'left',
                                                fontWeight: col.fontWeight || 'bold',
                                                fontStyle: col.fontStyle || 'normal',
                                                textDecoration: col.textDecoration || 'none'
                                            },
                                            children: col.label
                                        }, col.id, false, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 358,
                                            columnNumber: 22
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                    lineNumber: 356,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex text-gray-900 mt-2",
                                    children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 px-1 truncate",
                                            style: {
                                                minWidth: col.width || 100,
                                                textAlign: col.align || 'left',
                                                fontWeight: col.fontWeight || 'normal',
                                                fontStyle: col.fontStyle || 'normal',
                                                textDecoration: col.textDecoration || 'none'
                                            },
                                            children: col.value || 'Exemple'
                                        }, col.id, false, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 371,
                                            columnNumber: 22
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                    lineNumber: 369,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                            lineNumber: 355,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                    lineNumber: 353,
                    columnNumber: 12
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setRefs,
        style: containerStyle,
        ...listeners,
        ...attributes,
        onClick: (e)=>{
            e.stopPropagation();
            onSelect(element.id);
        },
        className: `group cursor-move`,
        children: [
            renderContent(),
            isSelected && !isDragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-6 left-0 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded shadow-md whitespace-nowrap z-50",
                        children: [
                            "x:",
                            Math.round(element.x),
                            " y:",
                            Math.round(element.y)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 402,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 w-3 h-3 bg-white border border-blue-600 cursor-se-resize z-50 -mr-1.5 -mb-1.5",
                        onMouseDown: (e)=>handleResizeStart(e, 'se')
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 right-0 w-3 h-3 bg-white border border-blue-600 cursor-e-resize z-50 -mr-1.5 -mt-1.5",
                        onMouseDown: (e)=>handleResizeStart(e, 'e')
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-1/2 w-3 h-3 bg-white border border-blue-600 cursor-s-resize z-50 -mb-1.5 -ml-1.5",
                        onMouseDown: (e)=>handleResizeStart(e, 's')
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
        lineNumber: 390,
        columnNumber: 5
    }, this);
}
function BuilderClient({ template }) {
    // State
    const [elements, setElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [globalSettings, setGlobalSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        padding: 40,
        headerHeight: 0,
        footerHeight: 0
    });
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDragItem, setActiveDragItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // For DragOverlay
    // UI State
    const [templateName, setTemplateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(template.name);
    const [customIcon, setCustomIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(template.customIcon || 'File');
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPreview, setShowPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageTab, setImageTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('url');
    const [showTableDialog, setShowTableDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTableId, setEditingTableId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const alignElement = (alignment)=>{
        if (!selectedId) return;
        const el = elements.find((e)=>e.id === selectedId);
        if (!el) return;
        const canvasWidth = 794;
        const padding = globalSettings.padding;
        let newX = el.x;
        const elWidth = typeof el.w === 'number' ? el.w : 100; // Fallback for non-px width in alignment calc
        switch(alignment){
            case 'left':
                newX = padding;
                break;
            case 'center':
                newX = (canvasWidth - elWidth) / 2;
                break;
            case 'right':
                newX = canvasWidth - elWidth - padding;
                break;
        }
        updateElement(selectedId, {
            x: newX
        });
    };
    const addVariable = (variable)=>{
        if (!selectedId) return;
        const el = elements.find((e)=>e.id === selectedId);
        if (el && el.type === 'text') {
            const newContent = (el.content || '') + ` {{${variable}}}`;
            updateElement(selectedId, {
                content: newContent
            });
        }
    };
    const handleImageUpload = (e)=>{
        if (!selectedId) return;
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                updateElement(selectedId, {
                    content: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };
    // Sensors
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MouseSensor"], {
        activationConstraint: {
            distance: 5
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TouchSensor"]));
    // Init
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
        try {
            const parsed = JSON.parse(template.content);
            if (parsed.elements) {
                setElements(parsed.elements);
                setGlobalSettings(parsed.globalSettings || {
                    padding: 40,
                    headerHeight: 0,
                    footerHeight: 0
                });
            } else if (Array.isArray(parsed)) {
                setElements(parsed);
            }
        } catch  {
            setElements([]);
        }
    }, [
        template.content
    ]);
    // Canvas Droppable
    const { setNodeRef: setCanvasRef, isOver: isCanvasOver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: 'canvas-root',
        data: {
            isRoot: true
        }
    });
    // --- Helpers ---
    const getElementRect = (id)=>{
        // This is a simplified logical rect finder for calculations, 
        // relying on React state rather than DOM for truth
        return elements.find((e)=>e.id === id);
    };
    // --- Handlers ---
    const handleDragStart = (event)=>{
        const { active } = event;
        setActiveDragItem(active.data.current);
    };
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        setActiveDragItem(null);
        const activeId = active.id;
        const isSidebarItem = active.data.current?.isSidebar;
        // --- CAS 1 : NOUVEL ÉLÉMENT (SIDEBAR) ---
        // On l'ajoute TOUJOURS, même si lâché "à côté" (over est null)
        if (isSidebarItem) {
            const type = active.data.current?.type;
            if (!type) return;
            let newParentId = null;
            let newX = 50; // Position par défaut (coin haut gauche)
            let newY = 50;
            // Si on a une cible valide (survol d'un container ou du canvas)
            if (over) {
                const overElement = elements.find((e)=>e.id === over.id);
                // Gestion parenté
                if (overElement && overElement.type === 'container') {
                    newParentId = overElement.id;
                }
                // Calcul position relative précis
                const activeRect = active.rect.current?.translated;
                const overRect = over.rect;
                if (activeRect && overRect) {
                    newX = activeRect.left - overRect.left;
                    newY = activeRect.top - overRect.top;
                    // Ajustement pour le Padding/Header si on est sur le root
                    if (newParentId === null) {
                        newX -= globalSettings.padding;
                        newY -= globalSettings.padding + globalSettings.headerHeight;
                    }
                }
            } else {
                // Si lâché dans le vide (zone grise), on met des coordonnées par défaut
                // pour que l'utilisateur voie l'élément apparaitre
                console.log("Drop hors zone détecté, ajout forcé sur le root");
            }
            // Sécurité : empêcher les coordonnées négatives
            // Pour le root (qui a des marges), on autorise un peu de débordement négatif si l'utilisateur le veut vraiment,
            // mais par défaut on snap à 0.
            newX = Math.max(0, newX);
            newY = Math.max(0, newY);
            const newElement = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                type,
                x: newX,
                y: newY,
                w: type === 'container' ? 300 : type === 'table' ? 500 : 200,
                h: type === 'container' ? 200 : type === 'line' ? 5 : 100,
                parentId: newParentId,
                content: type === 'text' ? 'Texte' : undefined,
                style: {
                    backgroundColor: type === 'box' ? '#f3f4f6' : undefined,
                    borderColor: '#000000',
                    fontSize: '14px'
                },
                columns: type === 'table' ? [
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                        label: 'Colonne 1',
                        value: '',
                        align: 'left',
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        textDecoration: 'none'
                    },
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                        label: 'Colonne 2',
                        value: '',
                        align: 'left',
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        textDecoration: 'none'
                    }
                ] : undefined
            };
            setElements((prev)=>[
                    ...prev,
                    newElement
                ]);
            setSelectedId(newElement.id);
            return;
        }
        // --- CAS 2 : DÉPLACEMENT D'UN ÉLÉMENT EXISTANT ---
        if (!over) return;
        // Eviter le drop sur soi-même (particulièrement pour les conteneurs)
        if (active.id === over.id) return;
        // 1. Determine Drop Target (Parent)
        let newParentId = null;
        // ... suite logique existante pour le déplacement ...
        if (over.id !== 'canvas-root') {
            const overElement = elements.find((e)=>e.id === over.id);
            if (overElement && overElement.type === 'container') {
                // Vérification anti-boucle : ne pas devenir enfant de soi-même
                if (overElement.id !== activeId) {
                    newParentId = overElement.id;
                }
            }
        }
        const activeRect = active.rect.current?.translated;
        const overRect = over.rect;
        if (!activeRect || !overRect) return;
        let newX = activeRect.left - overRect.left;
        let newY = activeRect.top - overRect.top;
        // Ajustement pour le Padding/Header si on est sur le root
        if (newParentId === null) {
            newX -= globalSettings.padding;
            newY -= globalSettings.padding + globalSettings.headerHeight;
        }
        newX = Math.max(0, newX);
        newY = Math.max(0, newY);
        setElements((prev)=>prev.map((el)=>{
                if (el.id === activeId) {
                    // Si la largeur est de 100%, on force X à 0 pour rester aligné avec le conteneur parent (ou les marges)
                    const finalX = el.w === '100%' ? 0 : newX;
                    return {
                        ...el,
                        x: finalX,
                        y: newY,
                        parentId: newParentId
                    };
                }
                return el;
            }));
    };
    // --- Element Manipulators ---
    const updateElement = (id, updates)=>{
        setElements((prev)=>prev.map((el)=>el.id === id ? {
                    ...el,
                    ...updates
                } : el));
    };
    const deleteElement = (id)=>{
        // Also delete children
        setElements((prev)=>{
            const toDelete = new Set([
                id
            ]);
            let added = true;
            while(added){
                added = false;
                prev.forEach((el)=>{
                    if (el.parentId && toDelete.has(el.parentId) && !toDelete.has(el.id)) {
                        toDelete.add(el.id);
                        added = true;
                    }
                });
            }
            return prev.filter((el)=>!toDelete.has(el.id));
        });
        setSelectedId(null);
    };
    // --- Rendering ---
    // Recursive Renderer
    const renderElements = (parentId)=>{
        return elements.filter((el)=>el.parentId === parentId).map((el)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DraggableElement, {
                element: el,
                isSelected: selectedId === el.id,
                onSelect: setSelectedId,
                onResize: (id, w, h)=>updateElement(id, {
                        w,
                        h
                    }),
                children: renderElements(el.id)
            }, el.id, false, {
                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                lineNumber: 682,
                columnNumber: 10
            }, this));
    };
    if (!isMounted) return null;
    const selectedElement = elements.find((e)=>e.id === selectedId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"], {
        sensors: sensors,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[calc(100vh-64px)] flex flex-col bg-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 bg-white border-b px-6 flex items-center justify-between shadow-sm shrink-0 z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        className: "p-2 hover:bg-gray-100 rounded-full text-gray-800 hover:text-gray-900",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 709,
                                            columnNumber: 122
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 709,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-bold text-gray-900",
                                            children: templateName
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 711,
                                            columnNumber: 16
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 710,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 708,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPreview(true),
                                        className: "px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 715,
                                                columnNumber: 168
                                            }, this),
                                            " Aperçu"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 715,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: async ()=>{
                                            setSaving(true);
                                            await fetch(`/api/templates/${template.id}`, {
                                                method: 'PUT',
                                                body: JSON.stringify({
                                                    content: JSON.stringify({
                                                        elements,
                                                        globalSettings
                                                    }),
                                                    name: templateName
                                                })
                                            });
                                            setSaving(false);
                                        },
                                        disabled: saving,
                                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-blue-700 disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 728,
                                                columnNumber: 20
                                            }, this),
                                            " ",
                                            saving ? '...' : 'Enregistrer'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 716,
                                        columnNumber: 12
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 714,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 707,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-72 bg-white border-r p-4 overflow-y-auto shrink-0 z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-gray-800 uppercase mb-4",
                                        children: "Éléments"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 736,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                                type: "text",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"],
                                                label: "Texte"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 738,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                                type: "image",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                                                label: "Image"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 739,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                                type: "container",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"],
                                                label: "Groupe / Conteneur"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 740,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                                type: "box",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"],
                                                label: "Forme"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 741,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                                type: "line",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"],
                                                label: "Ligne"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 742,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                                type: "table",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"],
                                                label: "Tableau"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 743,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 737,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 p-3 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100",
                                        children: 'Glissez un élément "Groupe" pour créer des zones imbriquées.'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 745,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 735,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-auto bg-gray-100/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-full min-h-full w-fit p-8 flex justify-center items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: setCanvasRef,
                                        className: `relative bg-white shadow-xl transition-all duration-200 ${isCanvasOver ? 'ring-4 ring-blue-200' : ''}`,
                                        style: {
                                            width: `${CANVAS_WIDTH}px`,
                                            height: `${CANVAS_HEIGHT}px`,
                                            minWidth: `${CANVAS_WIDTH}px`,
                                            minHeight: `${CANVAS_HEIGHT}px`
                                        },
                                        onClick: ()=>setSelectedId(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 pointer-events-none border border-dashed border-gray-200 z-0",
                                                style: {
                                                    top: globalSettings.padding + globalSettings.headerHeight,
                                                    bottom: globalSettings.padding + globalSettings.footerHeight,
                                                    left: globalSettings.padding,
                                                    right: globalSettings.padding
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 765,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: globalSettings.padding + globalSettings.headerHeight,
                                                    left: globalSettings.padding,
                                                    right: globalSettings.padding,
                                                    bottom: globalSettings.padding + globalSettings.footerHeight
                                                },
                                                children: renderElements(null)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 775,
                                                columnNumber: 23
                                            }, this),
                                            elements.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            size: 64,
                                                            className: "mx-auto mb-2 text-gray-700"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 788,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-800 font-medium",
                                                            children: "Glisser des éléments ici"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 789,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 787,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 786,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 753,
                                        columnNumber: 14
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                    lineNumber: 752,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 751,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-72 bg-white border-l border-gray-200 p-4 overflow-y-auto shrink-0 z-10 shadow-[-4px_0_24px_rgba(0,0,0,0.02)] relative",
                                children: selectedElement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 pt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>deleteElement(selectedElement.id),
                                            className: "absolute top-4 right-4 p-2 bg-white text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-full border border-gray-200 hover:border-red-200 shadow-sm transition-all",
                                            title: "Supprimer l'élément",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 807,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 802,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pb-4 border-b border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-gray-800 uppercase mb-1",
                                                    children: "Type d'élément"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 811,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-900 font-medium capitalize flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2 h-2 rounded-full bg-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 813,
                                                            columnNumber: 22
                                                        }, this),
                                                        selectedElement.type === 'box' ? 'Boîte' : selectedElement.type === 'table' ? 'Tableau' : selectedElement.type
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 810,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pb-4 border-b border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-gray-800 uppercase mb-2",
                                                    children: "Positionnement"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 820,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex bg-gray-50 rounded-lg p-1 border border-gray-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>alignElement('left'),
                                                            title: "Aligner à gauche",
                                                            className: "flex-1 py-1.5 flex justify-center rounded hover:bg-white hover:shadow-sm text-gray-700 hover:text-gray-900 transition-all",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__["LayoutTemplate"], {
                                                                size: 16,
                                                                className: "rotate-180"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 827,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 822,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>alignElement('center'),
                                                            title: "Centrer horizontalement",
                                                            className: "flex-1 py-1.5 flex justify-center rounded hover:bg-white hover:shadow-sm text-gray-700 hover:text-gray-900 transition-all",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__["LayoutTemplate"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 834,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 829,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>alignElement('right'),
                                                            title: "Aligner à droite",
                                                            className: "flex-1 py-1.5 flex justify-center rounded hover:bg-white hover:shadow-sm text-gray-700 hover:text-gray-900 transition-all",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__["LayoutTemplate"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 841,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 821,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 819,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputWithUnit, {
                                                    id: "pos-x",
                                                    label: "Position X",
                                                    value: selectedElement.x,
                                                    onChange: (val)=>updateElement(selectedElement.id, {
                                                            x: val
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 848,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputWithUnit, {
                                                    id: "pos-y",
                                                    label: "Position Y",
                                                    value: selectedElement.y,
                                                    onChange: (val)=>updateElement(selectedElement.id, {
                                                            y: val
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputWithUnit, {
                                                    id: "size-w",
                                                    label: "Largeur",
                                                    value: selectedElement.w,
                                                    onChange: (val)=>{
                                                        const updates = {
                                                            w: val
                                                        };
                                                        // Si on met la largeur à 100%, on remet X à 0 pour éviter le débordement
                                                        if (val === '100%') {
                                                            updates.x = 0;
                                                        }
                                                        updateElement(selectedElement.id, updates);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 860,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputWithUnit, {
                                                    id: "size-h",
                                                    label: "Hauteur",
                                                    value: selectedElement.h,
                                                    onChange: (val)=>updateElement(selectedElement.id, {
                                                            h: val
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 873,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 847,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 border-t border-gray-100 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 884,
                                                            columnNumber: 22
                                                        }, this),
                                                        " Apparence"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 883,
                                                    columnNumber: 20
                                                }, this),
                                                selectedElement.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "text-color",
                                                            className: "block text-xs font-medium text-gray-800 mb-1",
                                                            children: "Couleur du texte"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 890,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "text-color",
                                                                    type: "color",
                                                                    value: selectedElement.style?.color || '#000000',
                                                                    onChange: (e)=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                color: e.target.value
                                                                            }
                                                                        }),
                                                                    className: "h-8 w-8 rounded cursor-pointer border border-gray-200 p-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 892,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-800",
                                                                    children: selectedElement.style?.color || '#000000'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 899,
                                                                    columnNumber: 28
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 891,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 22
                                                }, this),
                                                (selectedElement.type === 'box' || selectedElement.type === 'line' || selectedElement.type === 'table' || selectedElement.type === 'container') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "bg-color",
                                                            className: "block text-xs font-medium text-gray-800 mb-1",
                                                            children: selectedElement.type === 'line' ? 'Couleur de la ligne' : 'Couleur de fond'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 907,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "bg-color",
                                                                type: "color",
                                                                value: selectedElement.style?.backgroundColor || (selectedElement.type === 'line' ? '#000000' : '#ffffff'),
                                                                onChange: (e)=>updateElement(selectedElement.id, {
                                                                        style: {
                                                                            ...selectedElement.style,
                                                                            backgroundColor: e.target.value
                                                                        }
                                                                    }),
                                                                className: "h-8 w-8 rounded cursor-pointer border border-gray-200 p-0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 911,
                                                                columnNumber: 28
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 910,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 906,
                                                    columnNumber: 22
                                                }, this),
                                                (selectedElement.type === 'box' || selectedElement.type === 'container') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "border-color",
                                                                    className: "block text-xs font-medium text-gray-800 mb-1",
                                                                    children: "Couleur Bordure"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 926,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "border-color",
                                                                    type: "color",
                                                                    value: selectedElement.style?.borderColor || '#000000',
                                                                    onChange: (e)=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                borderColor: e.target.value
                                                                            }
                                                                        }),
                                                                    className: "h-8 w-8 rounded cursor-pointer border border-gray-200 p-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 927,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 925,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "border-width",
                                                                    className: "block text-xs font-medium text-gray-800 mb-1",
                                                                    children: "Épaisseur bordure (px)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 936,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "border-width",
                                                                    type: "number",
                                                                    value: parseInt(selectedElement.style?.borderWidth) || 1,
                                                                    onChange: (e)=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                borderWidth: `${e.target.value}px`
                                                                            }
                                                                        }),
                                                                    className: "w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 937,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 935,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "border-style",
                                                                    className: "block text-xs font-medium text-gray-800 mb-1",
                                                                    children: "Style de bordure"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 946,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    id: "border-style",
                                                                    value: selectedElement.style?.borderStyle || 'solid',
                                                                    onChange: (e)=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                borderStyle: e.target.value
                                                                            }
                                                                        }),
                                                                    className: "w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "solid",
                                                                            children: "Solide"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 953,
                                                                            columnNumber: 30
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "dashed",
                                                                            children: "Tirets"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 954,
                                                                            columnNumber: 30
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "dotted",
                                                                            children: "Points"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 955,
                                                                            columnNumber: 30
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "double",
                                                                            children: "Double"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 956,
                                                                            columnNumber: 30
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "none",
                                                                            children: "Aucune"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 957,
                                                                            columnNumber: 30
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 947,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 945,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "border-radius",
                                                                    className: "block text-xs font-medium text-gray-800 mb-1",
                                                                    children: "Arrondi (px)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 961,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "border-radius",
                                                                    type: "number",
                                                                    value: parseInt(selectedElement.style?.borderRadius) || 0,
                                                                    onChange: (e)=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                borderRadius: `${e.target.value}px`
                                                                            }
                                                                        }),
                                                                    className: "w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 962,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 960,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 882,
                                            columnNumber: 17
                                        }, this),
                                        selectedElement.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 border-t border-gray-100 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 978,
                                                            columnNumber: 22
                                                        }, this),
                                                        " Contenu"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 977,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-medium text-gray-800",
                                                            children: "Alignement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 982,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex bg-gray-50 rounded-lg p-1 border border-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                textAlign: 'left'
                                                                            }
                                                                        }),
                                                                    className: `flex-1 py-1 flex justify-center rounded ${!selectedElement.style?.textAlign || selectedElement.style?.textAlign === 'left' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`,
                                                                    title: "Gauche",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 989,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 984,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                textAlign: 'center'
                                                                            }
                                                                        }),
                                                                    className: `flex-1 py-1 flex justify-center rounded ${selectedElement.style?.textAlign === 'center' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`,
                                                                    title: "Centre",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__["AlignCenter"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 996,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 991,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                textAlign: 'right'
                                                                            }
                                                                        }),
                                                                    className: `flex-1 py-1 flex justify-center rounded ${selectedElement.style?.textAlign === 'right' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`,
                                                                    title: "Droite",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__["AlignRight"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1003,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 998,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 983,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 981,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "text-content",
                                                            className: "block text-xs font-medium text-gray-800",
                                                            children: "Texte"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1009,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            id: "text-content",
                                                            value: selectedElement.content,
                                                            onChange: (e)=>updateElement(selectedElement.id, {
                                                                    content: e.target.value
                                                                }),
                                                            className: "w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 min-h-[80px]",
                                                            rows: 4
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1010,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1008,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-medium text-gray-800 mb-2",
                                                            children: "Insérer une variable"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1020,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>addVariable('client'),
                                                                    className: "px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded border border-blue-100 hover:bg-blue-100",
                                                                    children: "Client"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1022,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>addVariable('date'),
                                                                    className: "px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded border border-blue-100 hover:bg-blue-100",
                                                                    children: "Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1023,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>addVariable('number'),
                                                                    className: "px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded border border-blue-100 hover:bg-blue-100",
                                                                    children: "Numéro"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1024,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1021,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1019,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "text-size",
                                                            className: "block text-xs font-medium text-gray-800",
                                                            children: "Taille de police (px)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1029,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "text-size",
                                                            type: "text",
                                                            value: selectedElement.style?.fontSize || '',
                                                            onChange: (e)=>updateElement(selectedElement.id, {
                                                                    style: {
                                                                        ...selectedElement.style,
                                                                        fontSize: e.target.value
                                                                    }
                                                                }),
                                                            className: "w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1030,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1028,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-medium text-gray-800 mb-2",
                                                            children: "Style du texte"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1040,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex bg-gray-50 rounded-lg p-1 border border-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                fontWeight: selectedElement.style?.fontWeight === 'bold' ? 'normal' : 'bold'
                                                                            }
                                                                        }),
                                                                    className: `flex-1 py-1.5 flex justify-center items-center gap-1 rounded ${selectedElement.style?.fontWeight === 'bold' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`,
                                                                    title: "Gras",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 1052,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            children: "Gras"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 1053,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1042,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                fontStyle: selectedElement.style?.fontStyle === 'italic' ? 'normal' : 'italic'
                                                                            }
                                                                        }),
                                                                    className: `flex-1 py-1.5 flex justify-center items-center gap-1 rounded ${selectedElement.style?.fontStyle === 'italic' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`,
                                                                    title: "Italique",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 1065,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            children: "Italique"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 1066,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1055,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                textDecoration: selectedElement.style?.textDecoration === 'underline' ? 'none' : 'underline'
                                                                            }
                                                                        }),
                                                                    className: `flex-1 py-1.5 flex justify-center items-center gap-1 rounded ${selectedElement.style?.textDecoration === 'underline' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'}`,
                                                                    title: "Souligné",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 1078,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            children: "Souligné"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                            lineNumber: 1079,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1068,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1041,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1039,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 976,
                                            columnNumber: 19
                                        }, this),
                                        selectedElement.type === 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 border-t border-gray-100 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1090,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Source de l'image"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1089,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex bg-gray-50 rounded-lg p-1 border border-gray-200 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setImageTab('url'),
                                                            className: `flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${imageTab === 'url' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-800 hover:text-gray-900'}`,
                                                            children: "Lien URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1094,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setImageTab('upload'),
                                                            className: `flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${imageTab === 'upload' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-800 hover:text-gray-900'}`,
                                                            children: "Importer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1100,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1093,
                                                    columnNumber: 20
                                                }, this),
                                                imageTab === 'url' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "img-url",
                                                            className: "block text-xs font-medium text-gray-800",
                                                            children: "URL de l'image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1110,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "img-url",
                                                                    type: "text",
                                                                    value: selectedElement.content || '',
                                                                    onChange: (e)=>updateElement(selectedElement.id, {
                                                                            content: e.target.value
                                                                        }),
                                                                    className: "w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900",
                                                                    placeholder: "https://..."
                                                                }, "url-input", false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1112,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                                    size: 16,
                                                                    className: "text-gray-800 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1121,
                                                                    columnNumber: 28
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1111,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1109,
                                                    columnNumber: 22
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "img-file",
                                                            className: "block text-xs font-medium text-gray-800",
                                                            children: "Fichier local"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1126,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-2 border-dashed border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors text-center cursor-pointer relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "img-file",
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    onChange: handleImageUpload,
                                                                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                                }, "file-input", false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1128,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                    size: 20,
                                                                    className: "mx-auto text-gray-800 mb-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1136,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-800",
                                                                    children: "Cliquez pour choisir une image"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1137,
                                                                    columnNumber: 28
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1127,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-700 mt-1",
                                                            children: "L'image sera convertie et enregistrée avec le modèle."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1139,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 border-t border-gray-100 pt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-medium text-gray-800",
                                                            children: "Arrondi des angles"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1145,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                borderRadius: '0px'
                                                                            }
                                                                        }),
                                                                    className: `p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '0px' || !selectedElement.style?.borderRadius ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`,
                                                                    title: "Aucun arrondi",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-8 bg-gray-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1154,
                                                                        columnNumber: 26
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1149,
                                                                    columnNumber: 24
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                borderRadius: '4px'
                                                                            }
                                                                        }),
                                                                    className: `p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '4px' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`,
                                                                    title: "Léger (4px)",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-8 bg-gray-300 rounded"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1161,
                                                                        columnNumber: 26
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1156,
                                                                    columnNumber: 24
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                borderRadius: '8px'
                                                                            }
                                                                        }),
                                                                    className: `p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '8px' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`,
                                                                    title: "Moyen (8px)",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-8 bg-gray-300 rounded-md"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1168,
                                                                        columnNumber: 26
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1163,
                                                                    columnNumber: 24
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                borderRadius: '16px'
                                                                            }
                                                                        }),
                                                                    className: `p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '16px' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`,
                                                                    title: "Fort (16px)",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-8 bg-gray-300 rounded-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1175,
                                                                        columnNumber: 26
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1170,
                                                                    columnNumber: 24
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                borderRadius: '24px'
                                                                            }
                                                                        }),
                                                                    className: `p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '24px' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`,
                                                                    title: "Très fort (24px)",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-8 bg-gray-300 rounded-xl"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1182,
                                                                        columnNumber: 26
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1177,
                                                                    columnNumber: 24
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateElement(selectedElement.id, {
                                                                            style: {
                                                                                ...selectedElement.style,
                                                                                borderRadius: '50%'
                                                                            }
                                                                        }),
                                                                    className: `p-2 border-2 rounded transition-all ${selectedElement.style?.borderRadius === '50%' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`,
                                                                    title: "Cercle/Ovale",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-8 bg-gray-300 rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1189,
                                                                        columnNumber: 26
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1184,
                                                                    columnNumber: 24
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1148,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "img-border-radius",
                                                                    className: "block text-xs font-medium text-gray-800",
                                                                    children: "Valeur personnalisée"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1195,
                                                                    columnNumber: 24
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "img-border-radius",
                                                                        type: "text",
                                                                        value: selectedElement.style?.borderRadius || '0px',
                                                                        onChange: (e)=>updateElement(selectedElement.id, {
                                                                                style: {
                                                                                    ...selectedElement.style,
                                                                                    borderRadius: e.target.value
                                                                                }
                                                                            }),
                                                                        className: "flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900",
                                                                        placeholder: "Ex: 12px, 50%, 1rem"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1197,
                                                                        columnNumber: 26
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1196,
                                                                    columnNumber: 24
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-gray-700",
                                                                    children: "Formats acceptés : px, %, rem, em"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1206,
                                                                    columnNumber: 24
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1194,
                                                            columnNumber: 22
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1144,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 1088,
                                            columnNumber: 18
                                        }, this),
                                        selectedElement.type === 'table' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 border-t border-gray-100 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1216,
                                                            columnNumber: 22
                                                        }, this),
                                                        " Configuration du tableau"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1215,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setEditingTableId(selectedElement.id);
                                                        setShowTableDialog(true);
                                                    },
                                                    className: "w-full py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1226,
                                                            columnNumber: 22
                                                        }, this),
                                                        "Personnaliser le tableau"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1219,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-gray-900 mb-1",
                                                            children: "Colonnes actuelles :"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1231,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-800",
                                                            children: (selectedElement.columns || []).length > 0 ? (selectedElement.columns || []).map((c)=>c.label).join(', ') : 'Aucune colonne'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1232,
                                                            columnNumber: 22
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                    lineNumber: 800,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 pb-4 border-b border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-gray-100 rounded-lg text-gray-800",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                        lineNumber: 1246,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1245,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-gray-900",
                                                            children: "Paramètres globaux"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1249,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-800",
                                                            children: "Configuration du document"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1250,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1248,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 1244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "template-name",
                                                            className: "block text-xs font-medium text-gray-800",
                                                            children: "Nom du modèle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1256,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "template-name",
                                                            type: "text",
                                                            value: templateName,
                                                            onChange: (e)=>setTemplateName(e.target.value),
                                                            className: "w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900",
                                                            placeholder: "Nom du modèle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1257,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1255,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "page-padding",
                                                            className: "block text-xs font-medium text-gray-800",
                                                            children: "Marge de page (px)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1268,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "page-padding",
                                                            type: "number",
                                                            value: globalSettings.padding,
                                                            onChange: (e)=>setGlobalSettings({
                                                                    ...globalSettings,
                                                                    padding: parseInt(e.target.value) || 0
                                                                }),
                                                            className: "w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1269,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1267,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "header-height",
                                                            className: "block text-xs font-medium text-gray-800",
                                                            children: "Hauteur Header (px)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1279,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "header-height",
                                                            type: "number",
                                                            value: globalSettings.headerHeight,
                                                            onChange: (e)=>setGlobalSettings({
                                                                    ...globalSettings,
                                                                    headerHeight: parseInt(e.target.value) || 0
                                                                }),
                                                            className: "w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1280,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-700",
                                                            children: "Espace réservé en haut de page"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1287,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1278,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "footer-height",
                                                            className: "block text-xs font-medium text-gray-800",
                                                            children: "Hauteur Footer (px)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1291,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "footer-height",
                                                            type: "number",
                                                            value: globalSettings.footerHeight,
                                                            onChange: (e)=>setGlobalSettings({
                                                                    ...globalSettings,
                                                                    footerHeight: parseInt(e.target.value) || 0
                                                                }),
                                                            className: "w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1292,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-700",
                                                            children: "Espace réservé en bas de page"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                            lineNumber: 1299,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1290,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 1254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-yellow-50 rounded-xl border border-yellow-100 mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "text-yellow-600 shrink-0",
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                        lineNumber: 1305,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-yellow-700 leading-relaxed",
                                                        children: "Ces marges définissent la zone de sécurité pour l'impression. Les éléments en dehors pourraient être coupés."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                        lineNumber: 1306,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 1304,
                                                columnNumber: 20
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 1303,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                    lineNumber: 1243,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 798,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 733,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                lineNumber: 705,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragOverlay"], {
                dropAnimation: null,
                children: activeDragItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-600 text-white p-2 rounded shadow-lg text-sm font-medium opacity-90 pointer-events-none",
                    children: activeDragItem.type ? `Ajouter ${activeDragItem.type}` : 'Déplacer'
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                    lineNumber: 1320,
                    columnNumber: 14
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                lineNumber: 1318,
                columnNumber: 7
            }, this),
            showPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-full flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 border-b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-bold",
                                    children: "Aperçu"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                    lineNumber: 1331,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowPreview(false),
                                    title: "Fermer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 1332,
                                        columnNumber: 79
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                    lineNumber: 1332,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                            lineNumber: 1330,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto bg-gray-100 p-8 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InvoiceRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    elements: elements,
                                    globalSettings: globalSettings
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                    lineNumber: 1336,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 1335,
                                columnNumber: 18
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                            lineNumber: 1334,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                    lineNumber: 1329,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                lineNumber: 1328,
                columnNumber: 9
            }, this),
            showTableDialog && editingTableId && (()=>{
                const tableElement = elements.find((e)=>e.id === editingTableId);
                if (!tableElement) return null;
                const tableColumns = tableElement.columns || [];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-b border-gray-200 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-blue-100 rounded-lg text-blue-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                    lineNumber: 1357,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 1356,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-gray-900",
                                                        children: "Configuration du tableau"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                        lineNumber: 1360,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Personnalisez les colonnes et leurs valeurs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                        lineNumber: 1361,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 1359,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 1355,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowTableDialog(false);
                                            setEditingTableId(null);
                                        },
                                        className: "p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900 transition-colors",
                                        title: "Fermer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 1372,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 1364,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 1354,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: tableColumns.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                                                size: 48,
                                                className: "mx-auto text-gray-400 mb-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 1381,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 font-medium mb-2",
                                                children: "Aucune colonne"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 1382,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mb-4",
                                                children: "Commencez par ajouter une colonne à votre tableau"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 1383,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 1380,
                                        columnNumber: 21
                                    }, this) : tableColumns.map((column, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-lg border border-gray-200 p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: `col-label-${column.id}`,
                                                                        className: "block text-sm font-medium text-gray-800 mb-1.5",
                                                                        children: "Nom de la colonne"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1391,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: `col-label-${column.id}`,
                                                                        type: "text",
                                                                        value: column.label,
                                                                        onChange: (e)=>{
                                                                            const newColumns = [
                                                                                ...tableColumns
                                                                            ];
                                                                            newColumns[index] = {
                                                                                ...column,
                                                                                label: e.target.value
                                                                            };
                                                                            updateElement(editingTableId, {
                                                                                columns: newColumns
                                                                            });
                                                                        },
                                                                        className: "w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                        placeholder: "Ex: Produit, Prix, Quantité"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1394,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 1390,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: `col-value-${column.id}`,
                                                                        className: "block text-sm font-medium text-gray-800 mb-1.5",
                                                                        children: "Valeur de la cellule"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1409,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: `col-value-${column.id}`,
                                                                        type: "text",
                                                                        value: column.value || '',
                                                                        onChange: (e)=>{
                                                                            const newColumns = [
                                                                                ...tableColumns
                                                                            ];
                                                                            newColumns[index] = {
                                                                                ...column,
                                                                                value: e.target.value
                                                                            };
                                                                            updateElement(editingTableId, {
                                                                                columns: newColumns
                                                                            });
                                                                        },
                                                                        className: "w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono",
                                                                        placeholder: "Ex: {{prixTab}}, Texte fixe, {{quantite}}"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1412,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-600 mt-1",
                                                                        children: [
                                                                            "Utilisez ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                className: "bg-gray-200 px-1.5 py-0.5 rounded text-xs",
                                                                                children: '{{variable}}'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                lineNumber: 1425,
                                                                                columnNumber: 42
                                                                            }, this),
                                                                            " pour insérer des données dynamiques"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1424,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 1408,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-800 mb-1.5",
                                                                        children: "Alignement du texte"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1430,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-3 gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const newColumns = [
                                                                                        ...tableColumns
                                                                                    ];
                                                                                    newColumns[index] = {
                                                                                        ...column,
                                                                                        align: 'left'
                                                                                    };
                                                                                    updateElement(editingTableId, {
                                                                                        columns: newColumns
                                                                                    });
                                                                                },
                                                                                className: `py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${(column.align || 'left') === 'left' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`,
                                                                                title: "Aligner à gauche",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                        lineNumber: 1447,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    "Gauche"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                lineNumber: 1434,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const newColumns = [
                                                                                        ...tableColumns
                                                                                    ];
                                                                                    newColumns[index] = {
                                                                                        ...column,
                                                                                        align: 'center'
                                                                                    };
                                                                                    updateElement(editingTableId, {
                                                                                        columns: newColumns
                                                                                    });
                                                                                },
                                                                                className: `py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${column.align === 'center' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`,
                                                                                title: "Centrer",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__["AlignCenter"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                        lineNumber: 1463,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    "Centre"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                lineNumber: 1450,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const newColumns = [
                                                                                        ...tableColumns
                                                                                    ];
                                                                                    newColumns[index] = {
                                                                                        ...column,
                                                                                        align: 'right'
                                                                                    };
                                                                                    updateElement(editingTableId, {
                                                                                        columns: newColumns
                                                                                    });
                                                                                },
                                                                                className: `py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${column.align === 'right' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`,
                                                                                title: "Aligner à droite",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__["AlignRight"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                        lineNumber: 1479,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    "Droite"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                lineNumber: 1466,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1433,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 1429,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-800 mb-1.5",
                                                                        children: "Style du texte"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1486,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const newColumns = [
                                                                                        ...tableColumns
                                                                                    ];
                                                                                    newColumns[index] = {
                                                                                        ...column,
                                                                                        fontWeight: column.fontWeight === 'bold' ? 'normal' : 'bold'
                                                                                    };
                                                                                    updateElement(editingTableId, {
                                                                                        columns: newColumns
                                                                                    });
                                                                                },
                                                                                className: `flex-1 py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${column.fontWeight === 'bold' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`,
                                                                                title: "Gras",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                        lineNumber: 1506,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    "Gras"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                lineNumber: 1490,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const newColumns = [
                                                                                        ...tableColumns
                                                                                    ];
                                                                                    newColumns[index] = {
                                                                                        ...column,
                                                                                        fontStyle: column.fontStyle === 'italic' ? 'normal' : 'italic'
                                                                                    };
                                                                                    updateElement(editingTableId, {
                                                                                        columns: newColumns
                                                                                    });
                                                                                },
                                                                                className: `flex-1 py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${column.fontStyle === 'italic' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`,
                                                                                title: "Italique",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                        lineNumber: 1525,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    "Italique"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                lineNumber: 1509,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const newColumns = [
                                                                                        ...tableColumns
                                                                                    ];
                                                                                    newColumns[index] = {
                                                                                        ...column,
                                                                                        textDecoration: column.textDecoration === 'underline' ? 'none' : 'underline'
                                                                                    };
                                                                                    updateElement(editingTableId, {
                                                                                        columns: newColumns
                                                                                    });
                                                                                },
                                                                                className: `flex-1 py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${column.textDecoration === 'underline' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`,
                                                                                title: "Souligné",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                        lineNumber: 1544,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    "Souligné"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                                lineNumber: 1528,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                        lineNumber: 1489,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 1485,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                        lineNumber: 1389,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1 pt-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    if (index === 0) return;
                                                                    const newColumns = [
                                                                        ...tableColumns
                                                                    ];
                                                                    [newColumns[index - 1], newColumns[index]] = [
                                                                        newColumns[index],
                                                                        newColumns[index - 1]
                                                                    ];
                                                                    updateElement(editingTableId, {
                                                                        columns: newColumns
                                                                    });
                                                                },
                                                                disabled: index === 0,
                                                                className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                                                                title: "Déplacer vers le haut",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1563,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 1552,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    if (index === tableColumns.length - 1) return;
                                                                    const newColumns = [
                                                                        ...tableColumns
                                                                    ];
                                                                    [newColumns[index], newColumns[index + 1]] = [
                                                                        newColumns[index + 1],
                                                                        newColumns[index]
                                                                    ];
                                                                    updateElement(editingTableId, {
                                                                        columns: newColumns
                                                                    });
                                                                },
                                                                disabled: index === tableColumns.length - 1,
                                                                className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                                                                title: "Déplacer vers le bas",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1576,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 1565,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const newColumns = tableColumns.filter((_, i)=>i !== index);
                                                                    updateElement(editingTableId, {
                                                                        columns: newColumns
                                                                    });
                                                                },
                                                                disabled: tableColumns.length <= 1,
                                                                className: "p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                                                                title: "Supprimer la colonne",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                    lineNumber: 1587,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                                lineNumber: 1578,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                        lineNumber: 1551,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 1388,
                                                columnNumber: 25
                                            }, this)
                                        }, column.id, false, {
                                            fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                            lineNumber: 1387,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                    lineNumber: 1378,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 1377,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            const newColumns = [
                                                ...tableColumns,
                                                {
                                                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                                                    label: `Colonne ${tableColumns.length + 1}`,
                                                    value: '',
                                                    align: 'left',
                                                    fontWeight: 'normal',
                                                    fontStyle: 'normal',
                                                    textDecoration: 'none'
                                                }
                                            ];
                                            updateElement(editingTableId, {
                                                columns: newColumns
                                            });
                                        },
                                        className: "px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                                lineNumber: 1617,
                                                columnNumber: 19
                                            }, this),
                                            "Ajouter une colonne"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 1599,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowTableDialog(false);
                                            setEditingTableId(null);
                                        },
                                        className: "px-6 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-lg text-sm font-medium transition-colors",
                                        children: "Terminé"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                        lineNumber: 1621,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                                lineNumber: 1598,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                        lineNumber: 1352,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
                    lineNumber: 1351,
                    columnNumber: 11
                }, this);
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/builder/[id]/BuilderClient.tsx",
        lineNumber: 700,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7f97428a._.js.map