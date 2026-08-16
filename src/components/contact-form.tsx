import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { toast } from "sonner";

import { submitContact } from "@/lib/contact.functions";

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

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    inquiryType: "Film Production",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = useServerFn(submitContact);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validation.error.issues) {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      }
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
        message: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-left">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="font-mono text-[10px] uppercase tracking-wider text-muted"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-border bg-transparent py-4 text-lg focus:border-primary focus:outline-none"
            placeholder="Your name"
          />
          {errors["name"] && (
            <p className="text-sm text-destructive">{errors["name"]}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="font-mono text-[10px] uppercase tracking-wider text-muted"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-border bg-transparent py-4 text-lg focus:border-primary focus:outline-none"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="role"
            className="font-mono text-[10px] uppercase tracking-wider text-muted"
          >
            Industry Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border-b border-border bg-transparent py-4 text-lg focus:border-primary focus:outline-none"
            placeholder="Director / Producer / Writer"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="inquiryType"
            className="font-mono text-[10px] uppercase tracking-wider text-muted"
          >
            Inquiry Type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full border-b border-border bg-transparent py-4 text-lg focus:border-primary focus:outline-none"
          >
            <option>Film Production</option>
            <option>Acting / Casting</option>
            <option>Press & Media</option>
            <option>Brand Collaboration</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="font-mono text-[10px] uppercase tracking-wider text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full resize-none border-b border-border bg-transparent py-4 text-lg focus:border-primary focus:outline-none"
          placeholder="Describe the project or collaboration..."
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary px-8 py-6 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
