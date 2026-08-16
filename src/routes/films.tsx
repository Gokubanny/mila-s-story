import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FilmographyTable } from "@/components/filmography-table";

export const Route = createFileRoute("/films")({
  head: () => ({
    meta: [
      { title: "Selected Filmography — Mila Kunis" },
      {
        name: "description",
        content:
          "Selected filmography of Mila Kunis, including Black Swan, Ted, Bad Moms, Luckiest Girl Alive, and upcoming projects.",
      },
      { property: "og:title", content: "Selected Filmography — Mila Kunis" },
      {
        property: "og:description",
        content:
          "Selected filmography of Mila Kunis, including Black Swan, Ted, Bad Moms, Luckiest Girl Alive, and upcoming projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FilmsPage,
});

function FilmsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <header className="mb-16 flex items-end justify-between">
            <h1 className="text-4xl font-bold tracking-tight">
              Selected Filmography
            </h1>
            <span className="font-mono text-[10px] text-muted">
              SCENE / 2010—PRESENT
            </span>
          </header>

          <FilmographyTable />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
