import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "¿Cuánto cuesta el concreto premezclado en Lima?",
    a: "El precio del concreto premezclado en Lima depende de la resistencia (kg/cm²), el volumen en m³ y si necesitas bombeo. En Concretera Perú cotizamos gratis según tu obra.",
  },
  {
    q: "¿Hacen bombeo de concreto a altura?",
    a: "Sí. Ofrecemos bombeo de concreto para techos, losas y zonas de difícil acceso en Lima Metropolitana, con mixer y bomba.",
  },
  {
    q: "¿Cuánto tarda la entrega del concreto premezclado?",
    a: "Coordinamos la entrega según tu vaciado. Atendemos cotizaciones y despachos con cobertura en Lima Norte, Sur, Este y Centro.",
  },
  {
    q: "¿Hacen cubicaje en obra?",
    a: "Sí. Visitamos tu obra para calcular los m³ exactos de concreto premezclado y entregarte una cotización precisa sin costo.",
  },
  {
    q: "¿Atienden los fines de semana?",
    a: "Sí. Concretera Perú atiende llamadas y WhatsApp 24/7. Las visitas a obra se coordinan de lunes a sábado.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="preguntas" className="scroll-mt-28 bg-brand-gray py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-sm">
            FAQ concreto premezclado
          </p>
          <h2 className="text-2xl font-extrabold text-brand-blue sm:text-3xl">
            Concretería Lima y concreto premezclado: preguntas frecuentes
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600 sm:text-base">
            Dudas sobre concreto Perú, bombeo y cubicaje con Concretera Perú.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-brand-blue sm:text-base">
                    {item.q}
                  </span>
                  <span className="shrink-0 text-brand-orange">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
