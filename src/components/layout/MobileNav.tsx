"use client";

import Link from "next/link";
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
  href: string;
  label: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
}

export function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="text-left">
            House &amp; Pet Sitter
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full">
            <Link href="#booking" onClick={handleLinkClick}>
              Book Now
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
