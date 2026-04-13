"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/professionisti", label: "Professionisti" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/news", label: "News" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-lg font-bold tracking-tight transition-colors",
                  scrolled ? "text-blue-dark" : "text-white"
                )}
              >
                CAMMAROTA GALGANO
              </span>
              <span
                className={cn(
                  "text-[9px] font-medium tracking-[0.2em] uppercase self-end transition-colors -mt-0.5",
                  scrolled ? "text-text-light" : "text-white/50"
                )}
              >
                since 1992
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  pathname === link.href
                    ? "text-orange"
                    : scrolled
                    ? "text-text-secondary hover:text-blue-dark"
                    : "text-white/80 hover:text-white",
                  "after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange after:transition-all hover:after:w-full",
                  pathname === link.href && "after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
          >
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  scrolled ? "bg-blue-dark" : "bg-white",
                  menuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  scrolled ? "bg-blue-dark" : "bg-white",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  scrolled ? "bg-blue-dark" : "bg-white",
                  menuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block text-lg font-medium py-2",
                pathname === link.href
                  ? "text-orange"
                  : "text-text-primary hover:text-orange"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
