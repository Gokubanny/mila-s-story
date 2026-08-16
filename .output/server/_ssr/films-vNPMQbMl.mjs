import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-NltvvXx8.mjs";
import { n as filmography } from "./films-5YsGjpYv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/films-vNPMQbMl.js
var import_jsx_runtime = require_jsx_runtime();
function FilmographyTable() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-12 border-b border-foreground py-4 text-[10px] font-mono uppercase tracking-widest text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-2",
					children: "Year"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-6 md:col-span-7",
					children: "Title / Production"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-4 text-right md:col-span-3",
					children: "Role"
				})
			]
		}), filmography.map((film, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group grid cursor-default grid-cols-12 border-b border-border py-6 transition-colors hover:bg-foreground/[0.02] md:py-8",
			style: { animationDelay: `${300 + index * 100}ms` },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-2 font-mono text-sm tabular-nums",
					children: film.year
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-6 md:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold transition-colors group-hover:text-primary md:text-2xl",
						children: film.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex flex-col gap-0.5 text-xs uppercase tracking-wider text-muted",
						children: [film.director && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Directed by ", film.director] }), film.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: film.notes })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-4 text-right font-display text-base italic md:col-span-3 md:text-xl",
					children: film.role
				})
			]
		}, `${film.title}-${film.year}`))]
	});
}
function FilmsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "mb-16 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-bold tracking-tight",
							children: "Selected Filmography"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-muted",
							children: "SCENE / 2010—PRESENT"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmographyTable, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { FilmsPage as component };
