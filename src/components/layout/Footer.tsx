import Link from "next/link";
import { Shield, BadgeCheck, Award, Users } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
  { href: "#booking", label: "Book Now" },
];

const trustIndicators = [
  { icon: Shield, label: "Fully Insured" },
  { icon: BadgeCheck, label: "Background Checked" },
  { icon: Award, label: "5+ Years Experience" },
  { icon: Users, label: "50+ Happy Clients" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Trust Indicators Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trustIndicators.map((indicator) => {
              const Icon = indicator.icon;
              return (
                <div
                  key={indicator.label}
                  className="flex items-center gap-2 justify-center"
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium text-background/90">
                    {indicator.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              House &amp; Pet Sitter
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Professional house and pet sitting services you can trust. 
              Your home and pets are in caring, experienced hands.
            </p>
            <p className="text-background/80 text-sm mt-4">
              Serving Gran Canaria, Spain
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-background/80 text-sm hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-sm text-background/80">
              <p>
                <span className="block font-medium text-background">Email:</span>
                <a
                  href="mailto:info@housepetsitter.com"
                  className="hover:text-background transition-colors"
                >
                  info@housepetsitter.com
                </a>
              </p>
              <p>
                <span className="block font-medium text-background">Phone:</span>
                <a
                  href="tel:+34600000000"
                  className="hover:text-background transition-colors"
                >
                  +34 600 000 000
                </a>
              </p>
              <p>
                <span className="block font-medium text-background">Location:</span>
                Gran Canaria, Spain
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              &copy; {currentYear} House &amp; Pet Sitter. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className="flex gap-6">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
