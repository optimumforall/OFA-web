import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SectorView from "@/components/SectorView";

export const metadata = {
  title: "Recepción IA para Fontaneros Electricistas Reformas Tarragona | Optimum",
  description: "No pierdas más avisos mientras conduces o trabajas. Asistente IA para oficios y reparaciones en Garraf, Penedès y Tarragona."
}

export default function OficiosPage() {
  return (
    <>
      <Navbar />
      <SectorView sector="oficios" />
      <Footer />
      <ChatWidget />
    </>
  );
}
