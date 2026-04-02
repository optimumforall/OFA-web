import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SectorView from "@/components/SectorView";

export const metadata = {
  title: "Asistente Virtual IA Peluquerías Salones Belleza Garraf | Optimum",
  description: "Recepción virtual con IA para centros de estética, salones y peluquerías en Sitges, Vilanova, Cunit y Penedès. Multilingüe e Inteligente."
}

export default function BellezaPage() {
  return (
    <>
      <Navbar />
      <SectorView sector="belleza" />
      <Footer />
      <ChatWidget />
    </>
  );
}
