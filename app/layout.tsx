import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Studio Associato Cammarota Galgano — Commercialisti Napoli",
    template: "%s | Studio Cammarota Galgano",
  },
  description:
    "Studio di Dottori Commercialisti e Revisori Legali a Napoli. Consulenza fiscale, tributaria, societaria e contabile dal 1992.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  openGraph: {
    locale: "it_IT",
    type: "website",
    siteName: "Studio Associato Cammarota Galgano",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
