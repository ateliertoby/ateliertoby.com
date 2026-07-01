import Link from "next/link";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
];

export function SiteFooter() {
  return (
    <footer className="corridor border-t border-[var(--border)] pt-[var(--spacing-section)] pb-[var(--spacing-block)]">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <span className="font-serif text-sm text-[var(--text)]">
          Atelier Toby
        </span>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover-underline text-sm text-[var(--text-muted)] no-underline transition-colors duration-300 hover:text-[var(--text)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-[var(--spacing-block)] font-mono text-xs text-[var(--text-muted)] opacity-60">
        &copy; {new Date().getFullYear()} Toby
      </p>
    </footer>
  );
}
