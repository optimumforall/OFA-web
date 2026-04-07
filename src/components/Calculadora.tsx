'use client';

import { useModal } from "@/context/ModalContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Calculadora() {
  const [llamadas, setLlamadas] = useState(4);
  const [minutos, setMinutos] = useState(2);
  const [tarifa, setTarifa] = useState(25);
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const tr = t[lang].calc;

  const horasSemanales = (llamadas * minutos * 6) / 60;
  const horasMensuales = +(horasSemanales * 4.3).toFixed(1);
  const costeOportunidad = horasMensuales * tarifa;
  const llamadasPerdidas = Math.round(llamadas * 0.35);
  const ingresosPerdidos = llamadasPerdidas * tarifa * 4.3;
  const totalMensual = Math.round(costeOportunidad + ingresosPerdidos);

  return (
    <section id="calculadora" className="scroll-mt-20 min-h-screen flex items-center bg-[#FAFAF8] py-20 lg:py-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <p className="text-sm font-semibold text-[#D4793B] uppercase tracking-widest mb-3">{tr.label}</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1D3461] leading-tight mb-6">
              {tr.h2a}<br />{tr.h2b}
            </h2>
            <p className="text-[#6B6560] text-lg leading-relaxed mb-8">{tr.body}</p>

            <div className="space-y-8">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="llamadas" className="text-sm font-semibold text-[#1D3461]">{tr.slider1}</label>
                  <span className="text-sm font-bold text-[#D4793B] bg-[#D4793B]/10 px-3 py-1 rounded-full">{llamadas}</span>
                </div>
                <input id="llamadas" type="range" min={1} max={30} value={llamadas}
                  onChange={(e) => setLlamadas(Number(e.target.value))}
                  className="w-full h-4 bg-[#E2DED8] rounded-full appearance-none cursor-pointer accent-[#1D3461]" />
                <div className="flex justify-between text-xs text-[#6B6560] mt-1.5"><span>1</span><span>30</span></div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="minutos" className="text-sm font-semibold text-[#1D3461]">{tr.slider2}</label>
                  <span className="text-sm font-bold text-[#D4793B] bg-[#D4793B]/10 px-3 py-1 rounded-full">{minutos} min</span>
                </div>
                <input id="minutos" type="range" min={1} max={15} value={minutos}
                  onChange={(e) => setMinutos(Number(e.target.value))}
                  className="w-full h-4 bg-[#E2DED8] rounded-full appearance-none cursor-pointer accent-[#1D3461]" />
                <div className="flex justify-between text-xs text-[#6B6560] mt-1.5"><span>1 min</span><span>15 min</span></div>
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="tarifa" className="text-sm font-semibold text-[#1D3461]">{tr.slider3}</label>
                  <span className="text-sm font-bold text-[#D4793B] bg-[#D4793B]/10 px-3 py-1 rounded-full">{tarifa}€/h</span>
                </div>
                <input id="tarifa" type="range" min={15} max={100} step={5} value={tarifa}
                  onChange={(e) => setTarifa(Number(e.target.value))}
                  className="w-full h-4 bg-[#E2DED8] rounded-full appearance-none cursor-pointer accent-[#1D3461]" />
                <div className="flex justify-between text-xs text-[#6B6560] mt-1.5"><span>15€</span><span>100€</span></div>
              </div>
            </div>
          </motion.div>

          {/* Right — results */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:sticky lg:top-24">

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#1D3461] rounded-2xl p-5 text-white">
                <p className="text-white/60 text-xs font-medium mb-1">{tr.loseLabel}</p>
                <p className="font-heading font-bold text-3xl mb-0.5">{totalMensual.toLocaleString("es-ES")}€</p>
                <p className="text-white/50 text-xs">{tr.loseSub}</p>
              </div>
              <div className="bg-[#D4793B] rounded-2xl p-5 text-white">
                <p className="text-white/80 text-xs font-medium mb-1">{tr.gainLabel}</p>
                <p className="font-heading font-bold text-3xl mb-0.5">{horasMensuales}h</p>
                <p className="text-white/70 text-xs">{tr.gainSub}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white border border-[#E2DED8] rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#D4793B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[#D4793B]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#1D3461]">{tr.timeLabel}</p>
                  <p className="text-xs text-[#6B6560]">{horasMensuales}h {tr.timeSub}</p>
                </div>
                <p className="font-bold text-[#1D3461] font-heading">{Math.round(costeOportunidad).toLocaleString("es-ES")}€</p>
              </div>

              <div className="bg-white border border-[#E2DED8] rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#D4793B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#D4793B]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#1D3461]">{tr.callsLabel}</p>
                  <p className="text-xs text-[#6B6560]">~{llamadasPerdidas}/día · {Math.round(llamadasPerdidas * 4.3 * 6)} {tr.callsSub}</p>
                </div>
                <p className="font-bold text-[#1D3461] font-heading">{Math.round(ingresosPerdidos).toLocaleString("es-ES")}€</p>
              </div>

              <div className="bg-[#D4793B]/8 border border-[#D4793B]/20 rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#D4793B]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={18} className="text-[#D4793B]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#1D3461]">{tr.withLabel}</p>
                  <p className="text-xs text-[#6B6560]">{tr.withSub}</p>
                </div>
                <p className="font-bold text-[#D4793B] font-heading text-lg">{tr.withValue}</p>
              </div>
            </div>

            <button onClick={openModal}
              className="mt-5 flex items-center justify-center w-full bg-[#D4793B] hover:bg-[#D4793B]/90 text-white font-semibold py-3.5 rounded-xl transition-colors text-base">
              {tr.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
