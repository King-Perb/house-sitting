"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#testimonials", label: t("testimonials") },
    { href: "#faq", label: t("faq") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="container mx-auto flex h-16 items-center justify-between px-4"
        aria-label={t("mainNavigation")}
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
          <LanguageSwitcher />
          <Button asChild>
            <a href="#contact">{tCommon("getInTouch")}</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <MobileNav navLinks={navLinks} />
        </div>
      </nav>
    </header>
  );
}
