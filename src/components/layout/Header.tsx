"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  // { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  // { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="container mx-auto flex h-16 items-center justify-between px-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl font-bold"
        >
          <span className="text-primary">House &amp; Pet Sitter</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav navLinks={navLinks} />
        </div>
      </nav>
    </header>
  );
}
