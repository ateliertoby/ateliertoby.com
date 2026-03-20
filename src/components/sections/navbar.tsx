"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 border-b-4 border-black bg-background">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="text-2xl font-black uppercase tracking-tighter">
            Atelier <span className="text-primary">Toby</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-bold border-2 transition-all ${
                    isActive
                      ? "border-black bg-yellow-400 text-black shadow-[2px_2px_0px_#000000]"
                      : "border-transparent text-muted-foreground hover:border-black hover:bg-white hover:text-black hover:shadow-[2px_2px_0px_#000000]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t-4 border-black bg-background md:hidden"
            >
              <div className="flex flex-col gap-2 px-6 py-4">
                {links.map((link) => {
                  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 text-sm font-bold border-2 transition-all ${
                        isActive
                          ? "border-black bg-yellow-400 text-black shadow-[2px_2px_0px_#000000]"
                          : "border-transparent text-muted-foreground hover:border-black hover:bg-white hover:text-black hover:shadow-[2px_2px_0px_#000000]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
