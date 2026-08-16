import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/films", label: "Films" },
  { to: "/about", label: "About" },
  { to: "/work-with-me", label: "Work With Me" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-mono text-xs font-bold uppercase tracking-[0.3em]"
        >
          Mila Kunis
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[11px] uppercase tracking-widest transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu placeholder */}
        <div className="flex flex-col gap-1.5 px-1 md:hidden">
          <div className="h-px w-6 bg-foreground" />
          <div className="h-px w-6 bg-foreground" />
        </div>
      </div>
    </nav>
  );
}
