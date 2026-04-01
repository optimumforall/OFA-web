import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PorQueOFA from "@/components/PorQueOFA";
import Calculadora from "@/components/Calculadora";
import ComoFunciona from "@/components/ComoFunciona";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
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
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
