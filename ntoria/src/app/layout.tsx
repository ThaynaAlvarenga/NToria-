import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
}); 

export const metadata: Metadata = {
  title: "NToria | Marketing Digital & Desenvolvimento Web",
  description:
    "Sites profissionais, identidade visual e estratégias de marketing digital. Transforme sua presença online com a NToria.",
  keywords: [
    "marketing digital",
    "web design",
    "identidade visual",
    "redes sociais",
    "Avaré",
  ],
  authors: [{ name: "NToria" }],
  openGraph: {
    title: "NToria — Marketing Digital & Tecnologia",
    description: "Transforme sua presença digital com a NToria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${jakartaSans.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
