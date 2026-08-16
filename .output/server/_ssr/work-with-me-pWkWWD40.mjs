import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as isRedirect, _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-NltvvXx8.mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-CVz6m26J2.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-with-me-pWkWWD40.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema$1 = objectType({
	name: stringType().trim().min(1, "Name is required").max(100),
	email: stringType().trim().email("Invalid email address").max(255),
	role: stringType().trim().max(100).optional(),
	inquiryType: stringType().trim().max(100).optional(),
	message: stringType().trim().min(1, "Message is required").max(2e3, "Message must be under 2000 characters")
});
var submitContact = createServerFn({ method: "POST" }).validator((data) => contactSchema$1.parse(data)).handler(createSsrRpc("1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd"));
var contactSchema = objectType({
	name: stringType().trim().min(1, "Name is required").max(100),
	email: stringType().trim().email("Invalid email address").max(255),
	role: stringType().trim().max(100).optional(),
	inquiryType: stringType().trim().max(100).optional(),
	message: stringType().trim().min(1, "Message is required").max(2e3, "Message must be under 2000 characters")
});
function ContactForm() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		role: "",
		inquiryType: "Film Production",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const submit = useServerFn(submitContact);
	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
		if (errors[name]) setErrors((prev) => ({
			...prev,
			[name]: ""
		}));
	}
	async function handleSubmit(e) {
		e.preventDefault();
		setErrors({});
		const validation = contactSchema.safeParse(formData);
		if (!validation.success) {
			const fieldErrors = {};
			for (const issue of validation.error.issues) if (issue.path[0]) fieldErrors[issue.path[0]] = issue.message;
			setErrors(fieldErrors);
			return;
		}
		setIsSubmitting(true);
		try {
			await submit({ data: validation.data });
			toast.success("Inquiry submitted. We'll be in touch soon.");
			setFormData({
				name: "",
				email: "",
				role: "",
				inquiryType: "Film Production",
				message: ""
			});
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Failed to submit inquiry. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-8 text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "name",
							className: "font-mono text-[10px] uppercase tracking-wider text-muted",
							children: "Full Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							id: "name",
							name: "name",
							value: formData.name,
							onChange: handleChange,
							className: "w-full border-b border-border bg-transparent py-4 text-lg focus:border-primary focus:outline-none",
							placeholder: "Your name"
						}),
						errors["name"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-destructive",
							children: errors["name"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "email",
							className: "font-mono text-[10px] uppercase tracking-wider text-muted",
							children: "Email Address"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							id: "email",
							name: "email",
							value: formData.email,
							onChange: handleChange,
							className: "w-full border-b border-border bg-transparent py-4 text-lg focus:border-primary focus:outline-none",
							placeholder: "you@example.com"
						}),
						errors["email"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-destructive",
							children: errors["email"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "role",
						className: "font-mono text-[10px] uppercase tracking-wider text-muted",
						children: "Industry Role"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						id: "role",
						name: "role",
						value: formData.role,
						onChange: handleChange,
						className: "w-full border-b border-border bg-transparent py-4 text-lg focus:border-primary focus:outline-none",
						placeholder: "Director / Producer / Writer"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "inquiryType",
						className: "font-mono text-[10px] uppercase tracking-wider text-muted",
						children: "Inquiry Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "inquiryType",
						name: "inquiryType",
						value: formData.inquiryType,
						onChange: handleChange,
						className: "w-full border-b border-border bg-transparent py-4 text-lg focus:border-primary focus:outline-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Film Production" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Acting / Casting" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Press & Media" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Brand Collaboration" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "message",
						className: "font-mono text-[10px] uppercase tracking-wider text-muted",
						children: "Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "message",
						name: "message",
						value: formData.message,
						onChange: handleChange,
						rows: 4,
						className: "w-full resize-none border-b border-border bg-transparent py-4 text-lg focus:border-primary focus:outline-none",
						placeholder: "Describe the project or collaboration..."
					}),
					errors["message"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: errors["message"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: isSubmitting,
				className: "w-full bg-primary px-8 py-6 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60",
				children: isSubmitting ? "Submitting..." : "Submit Inquiry"
			})
		]
	});
}
function WorkWithMePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "mb-16 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mb-4 text-4xl font-bold",
								children: "Work With Me"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-widest text-muted",
								children: "Inquiries for Acting, Producing, and Creative Partnerships"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mb-16 space-y-6 text-lg leading-relaxed text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I’m always open to meaningful collaborations — whether as an actress, producer, or both." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 font-medium text-foreground",
									children: "What I’m currently interested in:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "list-disc space-y-2 pl-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Character-driven dramas and dark comedies" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Female-led stories with emotional depth" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Projects that challenge conventional Hollywood formulas" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Strong partnerships with writers, directors, and producers who value authenticity" })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 font-medium text-foreground",
									children: "Production Company"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Brick for Sheep",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: "(Previously Orchard Farm Productions)"
									})
								] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you have a script, package, or idea you’d like to discuss, please reach out through the professional inquiry form below." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { WorkWithMePage as component };
