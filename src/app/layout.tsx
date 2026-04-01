import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Optimum for All — Tu negocio responde. Aunque no estés.",
  description:
    "Asistentes de voz con IA que atienden llamadas 24/7, agendan citas y gestionan consultas. Para autónomos y pequeñas empresas en Cataluña. Sin tecnicismos, con soporte real.",
  keywords: [
    "asistente de voz IA",
    "automatización llamadas",
    "salón de belleza",
    "Cataluña",
    "agenda automática",
    "atención al cliente IA",
  ],
  openGraph: {
    title: "Optimum for All — Tu negocio responde. Aunque no estés.",
    description:
      "Asistentes de voz con IA que atienden llamadas 24/7, agendan citas y gestionan consultas. Para autónomos y pequeñas empresas en Cataluña.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimum for All",
    description: "Tu negocio responde. Aunque no estés.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6BN3K2RVMC"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6BN3K2RVMC');
          `}
        </Script>
      </head>
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} font-body antialiased bg-[#FAFAF8] text-[#141414]`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
