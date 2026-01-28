"use client";

import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

interface NavLink {
  readonly href: string;
  readonly label: string;
}

interface MobileNavProps {
  readonly navLinks: readonly NavLink[];
}

export function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("openMenu")}>
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="sr-only">
            <SheetTitle>{t("navigationMenu")}</SheetTitle>
          </SheetHeader>
          <nav
            className="flex flex-col px-4 py-8"
            aria-label={t("mobileNavigation")}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted px-4 py-3 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-4">
              <Button asChild className="w-full" size="lg">
                <a href="#contact" onClick={handleLinkClick}>
                  {tCommon("getInTouch")}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
