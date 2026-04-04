import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PorQueOFA from "@/components/PorQueOFA";
import Calculadora from "@/components/Calculadora";
import ComoFunciona from "@/components/ComoFunciona";
import EliaDemo from "@/components/EliaDemo";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Script from "next/script";
import { t } from "@/lib/translations";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#1D3461] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Ir al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PorQueOFA />
        <Calculadora />
        <ComoFunciona />
        <EliaDemo />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <ChatWidget />
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": t.es.faq.items.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a
            }
          }))
        })}
      </Script>
    </>
  );
}
