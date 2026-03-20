import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t-3 border-border bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-bold text-sm">
          Atelier Toby
        </Link>
        <p className="text-xs opacity-70">&copy; 2026 Atelier Toby</p>
      </div>
    </footer>
  );
}
