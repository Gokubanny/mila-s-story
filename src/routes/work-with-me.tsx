import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/work-with-me")({
  head: () => ({
    meta: [
      { title: "Work With Me — Mila Kunis" },
      {
        name: "description",
        content:
          "Mila Kunis is open to meaningful collaborations as an actress, producer, or both. Reach out through the professional inquiry form.",
      },
      { property: "og:title", content: "Work With Me — Mila Kunis" },
      {
        property: "og:description",
        content:
          "Mila Kunis is open to meaningful collaborations as an actress, producer, or both. Reach out through the professional inquiry form.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkWithMePage,
});

function WorkWithMePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="py-32">
        <div className="mx-auto max-w-3xl px-6">
          <header className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold">Work With Me</h1>
            <p className="text-[11px] uppercase tracking-widest text-muted">
              Inquiries for Acting, Producing, and Creative Partnerships
            </p>
          </header>

          <section className="mb-16 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I’m always open to meaningful collaborations — whether as an
              actress, producer, or both.
            </p>
            <div>
              <p className="mb-2 font-medium text-foreground">
                What I’m currently interested in:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Character-driven dramas and dark comedies</li>
                <li>Female-led stories with emotional depth</li>
                <li>Projects that challenge conventional Hollywood formulas</li>
                <li>
                  Strong partnerships with writers, directors, and producers
                  who value authenticity
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-1 font-medium text-foreground">
                Production Company
              </p>
              <p>
                Brick for Sheep
                <br />
                <span className="text-sm">(Previously Orchard Farm Productions)</span>
              </p>
            </div>
            <p>
              If you have a script, package, or idea you’d like to discuss,
              please reach out through the professional inquiry form below.
            </p>
          </section>

          <ContactForm />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
