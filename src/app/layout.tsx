import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZVX Token - A Revolução da Automação Descentralizada",
  description: "Potencialize negócios e automações com a moeda do futuro. ZVX Token oferece governança, staking, cashback e pagamentos para automações inteligentes.",
  keywords: "ZVX Token, blockchain, automação, descentralizada, DeFi, staking, governança, cashback",
  authors: [{ name: "ZVX Team" }],
  creator: "ZVX Token",
  openGraph: {
    title: "ZVX Token - A Revolução da Automação Descentralizada",
    description: "Potencialize negócios e automações com a moeda do futuro.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZVX Token - A Revolução da Automação Descentralizada",
    description: "Potencialize negócios e automações com a moeda do futuro.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
