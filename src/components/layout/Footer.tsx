import Link from "next/link";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
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
          <p className="text-center text-sm text-background/60">
            &copy; {currentYear} House &amp; Pet Sitter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
