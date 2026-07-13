import { motion } from "framer-motion";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import { images } from "../data/content";

export default function About() {
  return (
    <section id="nosotros" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-14 lg:px-6">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-brand-orange">
            Concretera Perú · Nosotros
          </p>

          <h2 className="mb-5 text-2xl font-extrabold uppercase leading-tight text-brand-blue sm:text-3xl lg:text-4xl">
            Concretería Lima: concreto premezclado de confianza
          </h2>

          <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            En Concretera Perú somos tu concretera en Lima especializada en
            concreto premezclado de alta calidad para obras civiles, edificios,
            viviendas y proyectos industriales en Lima Metropolitana.
          </p>
          <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
            Más de 10 años ofreciendo bombeo de concreto, cubicaje en obra y
            asesoría técnica para que tu vaciado avance con puntualidad,
            seguridad y el volumen exacto de m³ que necesitas.
          </p>

          <div className="mb-7 flex items-start gap-3 rounded-xl bg-brand-orange/10 px-4 py-4">
            <FaCheckCircle className="mt-0.5 shrink-0 text-xl text-brand-orange" />
            <p className="text-sm font-medium text-brand-text sm:text-base">
              Visitamos tu obra en Lima para cotizar concreto premezclado sin
              costo.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-3 rounded-lg bg-brand-orange px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#e07418]"
          >
            <FaDownload />
            Solicitar Cotización
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-2xl shadow-xl"
        >
          <img
            src={`${images.about}?v=2`}
            alt="Bombeo de concreto premezclado — Concretera Perú"
            className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[440px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
