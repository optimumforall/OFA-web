import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ClientProviders } from "@/components/ClientProviders";
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
  title: "Optimum for All – Asistente de voz IA para tu negocio | optimumforall.es",
  description:
    "Optimum for All: asistentes de voz con IA que atienden llamadas 24/7, agendan citas y gestionan consultas. Para autónomos y pequeñas empresas en Cataluña. Sin tecnicismos, con soporte real.",
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
        <meta name="msvalidate.01" content="FC34F854282388CA92C3DE6F007B5C86" />
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
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Optimum for All",
              "url": "https://optimumforall.es",
              "logo": "https://optimumforall.es/logo.png",
              "image": "https://optimumforall.es/main_hero.png",
              "description": "Servicio de asistentes de voz con Inteligencia Artificial para atención telefónica 24/7 y gestión de citas de pequeños negocios en Cataluña.",
              "telephone": "+34-625-102-259",
              "email": "optimum.for.all@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barcelona",
                "addressRegion": "Catalunya",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.2239,
                "longitude": 1.7251
              },
              "areaServed": [
                {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 41.2239,
                    "longitude": 1.7251
                  },
                  "geoRadius": "40000",
                  "description": "Comarca del Garraf y Penedès"
                },
                "Vilanova i la Geltrú",
                "Sitges",
                "Cunit",
                "Tarragona",
                "Barcelona"
              ],
              "priceRange": "€€",
              "sameAs": [
                "https://www.instagram.com/optimum.for.all",
                "https://www.linkedin.com/company/optimum-for-all"
              ]
            }
          `}
        </Script>
      </head>
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} font-body antialiased`}
      >
        <ClientProviders>
          {children}
        </ClientProviders>
        <SpeedInsights />
      </body>
    </html>
  );
}
