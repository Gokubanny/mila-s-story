import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  role: z.string().trim().max(100).optional(),
  inquiryType: z.string().trim().max(100).optional(),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be under 2000 characters"),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      role: data.role ?? null,
      inquiry_type: data.inquiryType ?? null,
      message: data.message,
    });

    if (error) {
      console.error("Contact submission failed:", error);
      throw new Error("Failed to submit inquiry. Please try again.");
    }

    return { success: true };
  });
