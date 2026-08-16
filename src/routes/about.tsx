import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import productionStill from "@/assets/production-still.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mila Kunis" },
      {
        name: "description",
        content:
          "Biography of Milena Markovna Kunis, actress and producer. From That '70s Show to Black Swan, Family Guy, and producing through Brick for Sheep.",
      },
      { property: "og:title", content: "About — Mila Kunis" },
      {
        property: "og:description",
        content:
          "Biography of Milena Markovna Kunis, actress and producer. From That '70s Show to Black Swan, Family Guy, and producing through Brick for Sheep.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="bg-foreground py-32 text-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-24">
          <div>
            <img
              src={productionStill}
              alt="Cinematic production still on a film set"
              width={1200}
              height={1600}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-background/50">
              ( 02 ) The Perspective
            </span>
            <h1 className="text-5xl font-bold leading-tight tracking-tighter">
              Milena Markovna Kunis
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-background/80">
              <p>
                Milena Markovna Kunis was born on August 14, 1983, in
                Chernivtsi, Ukrainian SSR (Soviet Union). At age seven, her
                family immigrated to Los Angeles, escaping antisemitism in the
                former Soviet Union.
              </p>
              <p>
                She began acting as a child and rose to fame as Jackie Burkhart
                on <em>That ’70s Show</em> (1998–2006). Since 1999 she has voiced
                Meg Griffin on <em>Family Guy</em>. Her film breakthrough came with{" "}
                <em>Forgetting Sarah Marshall</em> (2008), followed by critical
                acclaim for <em>Black Swan</em> (2010).
              </p>
              <p>
                Beyond acting, Kunis has expanded into producing. She previously
                co-founded Orchard Farm Productions and now works through her
                production company Brick for Sheep. Credits include{" "}
                <em>Luckiest Girl Alive</em>,{" "}
                <em>A Bad Moms Christmas</em>, <em>Goodrich</em>, and the
                upcoming thriller <em>Nightwatching</em>.
              </p>
              <p>
                She is married to actor Ashton Kutcher and is a mother of two.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
