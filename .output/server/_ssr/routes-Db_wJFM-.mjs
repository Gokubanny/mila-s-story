import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-NltvvXx8.mjs";
import { t as featuredFilms } from "./films-5YsGjpYv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Db_wJFM-.js
var import_jsx_runtime = require_jsx_runtime();
var hero_portrait_default = "/assets/hero-portrait-Ce9uRFPk.jpg";
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative px-6 py-24 md:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-6 block font-mono text-[10px] uppercase tracking-[0.4em] text-muted",
								children: "( 01 ) Actress & Producer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mb-8 text-6xl font-extrabold leading-[0.9] tracking-tighter text-balance md:text-8xl",
								children: [
									"Milena Markovna",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display font-semibold italic text-primary",
										children: "Kunis"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground",
								children: "From Ukrainian immigrant to one of Hollywood’s most versatile performers, Mila Kunis has built a career defined by sharp comedy, intense drama, and a growing presence behind the camera."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/films",
									className: "bg-foreground px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-300 hover:bg-primary",
									children: "Watch My Work"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/work-with-me",
									className: "border border-foreground px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-primary-foreground",
									children: "Work With Me"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_portrait_default,
							alt: "Mila Kunis editorial portrait",
							width: 1088,
							height: 1360,
							className: "aspect-[4/5] w-full object-cover shadow-2xl"
						})
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-16 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-bold tracking-tight",
							children: "Featured Projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-muted",
							children: "SCENE / 2010—PRESENT"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
									children: "Title"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-4 text-right md:col-span-3",
									children: "Role"
								})
							]
						}), featuredFilms.map((film) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group grid cursor-default grid-cols-12 border-b border-border py-6 transition-colors hover:bg-foreground/[0.02] md:py-8",
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
									}), film.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs uppercase tracking-wider text-muted",
										children: film.notes
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-4 text-right font-display text-base italic md:col-span-3 md:text-xl",
									children: film.role
								})
							]
						}, `featured-${film.title}`))]
					})]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { HomePage as component };
