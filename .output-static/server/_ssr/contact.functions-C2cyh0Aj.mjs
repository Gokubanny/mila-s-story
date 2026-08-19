import { r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-t61AKcOF2.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-C2cyh0Aj.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema = objectType({
	name: stringType().trim().min(1, "Name is required").max(100),
	email: stringType().trim().email("Invalid email address").max(255),
	role: stringType().trim().max(100).optional(),
	inquiryType: stringType().trim().max(100).optional(),
	message: stringType().trim().min(1, "Message is required").max(2e3, "Message must be under 2000 characters")
});
var submitContact_createServerFn_handler = createServerRpc({
	id: "1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd",
	name: "submitContact",
	filename: "src/lib/contact.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
var submitContact = createServerFn({ method: "POST" }).validator((data) => contactSchema.parse(data)).handler(submitContact_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { error } = await supabaseAdmin.from("contact_submissions").insert({
		name: data.name,
		email: data.email,
		role: data.role ?? null,
		inquiry_type: data.inquiryType ?? null,
		message: data.message
	});
	if (error) {
		console.error("Contact submission failed:", error);
		throw new Error("Failed to submit inquiry. Please try again.");
	}
	return { success: true };
});
//#endregion
export { submitContact_createServerFn_handler };
