export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
          © {new Date().getFullYear()} Mila Kunis / Actress & Producer
        </div>
        <div className="flex gap-8">
          <a
            href="https://www.imdb.com/name/nm0005109/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest transition-colors hover:text-primary"
          >
            IMDb
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest transition-colors hover:text-primary"
          >
            Instagram
          </a>
          <a
            href="https://www.caa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest transition-colors hover:text-primary"
          >
            CAA
          </a>
        </div>
      </div>
    </footer>
  );
}
