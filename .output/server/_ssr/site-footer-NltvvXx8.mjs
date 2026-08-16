import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-footer-NltvvXx8.js
var import_jsx_runtime = require_jsx_runtime();
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/films",
		label: "Films"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/work-with-me",
		label: "Work With Me"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-mono text-xs font-bold uppercase tracking-[0.3em]",
					children: "Mila Kunis"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-8 md:flex",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "text-[11px] uppercase tracking-widest transition-colors hover:text-primary",
						activeProps: { className: "text-primary" },
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5 px-1 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-6 bg-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-6 bg-foreground" })]
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-[10px] uppercase tracking-widest text-muted",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Mila Kunis / Actress & Producer"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.imdb.com/name/nm0005109/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-[10px] uppercase tracking-widest transition-colors hover:text-primary",
						children: "IMDb"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-[10px] uppercase tracking-widest transition-colors hover:text-primary",
						children: "Instagram"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.caa.com/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-[10px] uppercase tracking-widest transition-colors hover:text-primary",
						children: "CAA"
					})
				]
			})]
		})
	});
}
//#endregion
export { SiteHeader as n, SiteFooter as t };
