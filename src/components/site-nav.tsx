import Link from "next/link";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
];

export function SiteNav() {
  return (
    <nav className="corridor py-6">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <Link
          href="/"
          className="font-serif text-lg tracking-[-0.01em] text-[var(--text)] no-underline"
        >
          Atelier Toby
        </Link>
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
    </nav>
  );
}
