import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mila Kunis" },
      {
        name: "description",
        content:
          "Professional and press inquiries for Mila Kunis. Contact CAA for representation or use the Work With Me form for collaborations.",
      },
      { property: "og:title", content: "Contact — Mila Kunis" },
      {
        property: "og:description",
        content:
          "Professional and press inquiries for Mila Kunis. Contact CAA for representation or use the Work With Me form for collaborations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="py-32">
        <div className="mx-auto max-w-3xl px-6">
          <header className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold">Contact</h1>
            <p className="text-[11px] uppercase tracking-widest text-muted">
              Professional, Press & Media Inquiries
            </p>
          </header>

          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Professional Inquiries</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                For professional and collaboration inquiries, please use the form
                on the{" "}
                <Link
                  to="/work-with-me"
                  className="text-primary underline-offset-4 transition-colors hover:underline"
                >
                  Work With Me
                </Link>{" "}
                page or reach out to my agents at CAA.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Press & Media</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                High-res photos, official bio, and logos are available for
                press and media. Please contact the communications team through
                CAA for interview requests.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Fan Messages</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I appreciate the love — feel free to drop a note, though I may
                not be able to reply to every message personally.
              </p>
            </section>

            <div className="border-t border-border pt-12">
              <p className="text-center font-mono text-[10px] uppercase tracking-widest text-muted">
                Representation: CAA (Creative Artists Agency)
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
