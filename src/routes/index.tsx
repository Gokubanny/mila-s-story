import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { featuredFilms } from "@/lib/films";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mila Kunis — Actress & Producer" },
      {
        name: "description",
        content:
          "From Ukrainian immigrant to one of Hollywood's most versatile performers, Mila Kunis has built a career defined by sharp comedy, intense drama, and a growing presence behind the camera.",
      },
      { property: "og:title", content: "Mila Kunis — Actress & Producer" },
      {
        property: "og:description",
        content:
          "From Ukrainian immigrant to one of Hollywood's most versatile performers, Mila Kunis has built a career defined by sharp comedy, intense drama, and a growing presence behind the camera.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <header className="relative px-6 py-24 md:py-40">
          <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
                ( 01 ) Actress & Producer
              </span>
              <h1 className="mb-8 text-6xl font-extrabold leading-[0.9] tracking-tighter text-balance md:text-8xl">
                Milena Markovna{" "}
                <span className="font-display font-semibold italic text-primary">
                  Kunis
                </span>
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                From Ukrainian immigrant to one of Hollywood’s most versatile
                performers, Mila Kunis has built a career defined by sharp
                comedy, intense drama, and a growing presence behind the camera.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  to="/films"
                  className="bg-foreground px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-300 hover:bg-primary"
                >
                  Watch My Work
                </Link>
                <Link
                  to="/work-with-me"
                  className="border border-foreground px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-primary-foreground"
                >
                  Work With Me
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src={heroPortrait}
                alt="Mila Kunis editorial portrait"
                width={1088}
                height={1360}
                className="aspect-[4/5] w-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </header>

        {/* Featured Projects */}
        <section className="border-t border-border py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 flex items-end justify-between">
              <h2 className="text-4xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <span className="font-mono text-[10px] text-muted">
                SCENE / 2010—PRESENT
              </span>
            </div>

            <div className="grid gap-0">
              <div className="grid grid-cols-12 border-b border-foreground py-4 text-[10px] font-mono uppercase tracking-widest text-muted">
                <div className="col-span-2">Year</div>
                <div className="col-span-6 md:col-span-7">Title</div>
                <div className="col-span-4 text-right md:col-span-3">Role</div>
              </div>

              {featuredFilms.map((film) => (
                <div
                  key={`featured-${film.title}`}
                  className="group grid cursor-default grid-cols-12 border-b border-border py-6 transition-colors hover:bg-foreground/[0.02] md:py-8"
                >
                  <div className="col-span-2 font-mono text-sm tabular-nums">
                    {film.year}
                  </div>
                  <div className="col-span-6 md:col-span-7">
                    <h3 className="text-lg font-bold transition-colors group-hover:text-primary md:text-2xl">
                      {film.title}
                    </h3>
                    {film.notes && (
                      <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                        {film.notes}
                      </p>
                    )}
                  </div>
                  <div className="col-span-4 text-right font-display text-base italic md:col-span-3 md:text-xl">
                    {film.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
