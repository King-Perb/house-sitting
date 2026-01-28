import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "./TrustBadges";

export async function HeroSection() {
  const t = await getTranslations("hero");
  const tCommon = await getTranslations("common");

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-primary/10 to-accent/15 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          {/* Copy + CTAs */}
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              {t("titlePart1")}{" "}
              <span className="block sm:inline text-primary">{t("titlePart2")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center mb-10">
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/20">
                <a href="#contact">{tCommon("getInTouch")}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-background/80 backdrop-blur border-primary/30 hover:bg-primary/10"
              >
                <a href="#services">{tCommon("viewServices")}</a>
              </Button>
            </div>

            <TrustBadges />
          </div>

          {/* Visual card */}
          <div className="hidden md:block">
            <div className="relative mx-auto max-w-sm rounded-3xl bg-card shadow-2xl border border-primary/20 overflow-hidden">
              <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
              <div className="p-5 space-y-2">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {t("tagline")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("taglineSubtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
