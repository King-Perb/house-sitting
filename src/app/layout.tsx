import "./globals.css";

// Root layout - minimal, just imports global CSS
// The actual HTML structure is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
