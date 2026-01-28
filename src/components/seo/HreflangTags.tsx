import { locales } from "@/i18n/routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://housepetsitter.com";

// Map our locale codes to proper hreflang codes
const localeToHreflang: Record<string, string> = {
  en: "en",
  es: "es",
  de: "de",
};

interface HreflangTagsProps {
  pathname: string;
}

export function HreflangTags({ pathname }: HreflangTagsProps) {
  // Remove locale prefix from pathname for generating alternates
  const pathWithoutLocale = pathname.replace(/^\/(en|es|de)/, "") || "/";

  return (
    <>
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={localeToHreflang[locale]}
          href={`${SITE_URL}/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
        />
      ))}
      {/* x-default for language negotiation */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
      />
    </>
  );
}
