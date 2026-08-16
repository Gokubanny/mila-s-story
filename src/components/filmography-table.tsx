import { filmography } from "@/lib/films";

export function FilmographyTable() {
  return (
    <div className="grid gap-0">
      <div className="grid grid-cols-12 border-b border-foreground py-4 text-[10px] font-mono uppercase tracking-widest text-muted">
        <div className="col-span-2">Year</div>
        <div className="col-span-6 md:col-span-7">Title / Production</div>
        <div className="col-span-4 text-right md:col-span-3">Role</div>
      </div>

      {filmography.map((film, index) => (
        <div
          key={`${film.title}-${film.year}`}
          className="group grid cursor-default grid-cols-12 border-b border-border py-6 transition-colors hover:bg-foreground/[0.02] md:py-8"
          style={{ animationDelay: `${300 + index * 100}ms` }}
        >
          <div className="col-span-2 font-mono text-sm tabular-nums">
            {film.year}
          </div>
          <div className="col-span-6 md:col-span-7">
            <h3 className="text-lg font-bold transition-colors group-hover:text-primary md:text-2xl">
              {film.title}
            </h3>
            <div className="mt-1 flex flex-col gap-0.5 text-xs uppercase tracking-wider text-muted">
              {film.director && <span>Directed by {film.director}</span>}
              {film.notes && <span>{film.notes}</span>}
            </div>
          </div>
          <div className="col-span-4 text-right font-display text-base italic md:col-span-3 md:text-xl">
            {film.role}
          </div>
        </div>
      ))}
    </div>
  );
}
