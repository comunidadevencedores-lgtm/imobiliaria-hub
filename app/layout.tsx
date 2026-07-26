import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imobiliariacuritiba.com.br"),
  title: {
    default: "Imobiliária Curitiba | Imóveis de alto padrão nas regiões nobres",
    template: "%s | Imobiliária Curitiba",
  },
  description:
    "Curadoria de imóveis novos e de alto padrão nas regiões mais desejadas de Curitiba — Batel, Bigorrilho, Água Verde, Centro Cívico e Cabral.",
  keywords: [
    "imóveis Curitiba",
    "apartamentos de alto padrão Curitiba",
    "imóveis Batel",
    "imóveis Bigorrilho",
    "imóveis Água Verde",
    "imobiliária Curitiba",
  ],
  openGraph: {
    title: "Imobiliária Curitiba",
    description:
      "Curadoria de imóveis novos e de alto padrão nas regiões nobres de Curitiba.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
