import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaFileAlt,
  FaArrowRight,
  FaHardHat,
  FaClipboardList,
  FaShieldAlt,
  FaTag,
  FaHeadset,
  FaThumbsUp,
  FaFileInvoice,
  FaBriefcase,
  FaBuilding,
  FaMedal,
} from "react-icons/fa";

const benefitsLeft = [
  { icon: FaClipboardList, text: "Visita Técnica a su obra para cotización" },
  { icon: FaShieldAlt, text: "Certificado de calidad" },
  { icon: FaClock, text: "Atención Inmediata" },
  { icon: FaTag, text: "Precios altamente competitivos" },
  { icon: FaHeadset, text: "Asesoramiento gratuito" },
];

const benefitsRight = [
  { icon: FaThumbsUp, text: "Garantía de satisfacción en tu proyecto" },
  { icon: FaFileInvoice, text: "Emitimos facturas" },
  {
    icon: FaBriefcase,
    text: "Amplio portafolio de trabajos realizados en Lima",
  },
  {
    icon: FaBuilding,
    text: "Capacidad para pequeñas y grandes obras de construcción",
  },
];

const allBenefits = [...benefitsLeft, ...benefitsRight];

export default function Quality() {
  return (
    <section id="calidad" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 lg:px-6 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-blue sm:text-sm">
              <FaCheckCircle className="text-brand-orange" />
              Calidad que construye confianza
            </p>

            <h2 className="mb-4 text-2xl font-extrabold uppercase leading-tight text-brand-blue sm:text-3xl lg:text-[2rem]">
              Calidad certificada del concreto premezclado
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              En Concretera Lima respaldamos cada m³ de concreto premezclado con
              control de calidad y documentación técnica. Equipo puntual para
              tu obra en Lima Metropolitana.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mb-6 flex items-start gap-3 rounded-xl border border-brand-orange/20 bg-brand-orange/10 px-4 py-4"
            >
              <FaClock className="mt-0.5 shrink-0 text-lg text-brand-orange" />
              <p className="text-sm text-brand-text">
                Se brinda <span className="font-bold">Probetas</span>. A los{" "}
                <span className="font-bold">27 días</span>, según norma, se
                entrega el certificado con firma y sello del ingeniero civil de
                planta.
              </p>
            </motion.div>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mb-4 inline-flex w-full items-center justify-between gap-3 rounded-lg bg-brand-orange px-5 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#e07418] sm:text-[13px]"
            >
              <span className="inline-flex items-center gap-2">
                <FaFileAlt />
                Ver modelo de certificado de calidad
              </span>
              <FaArrowRight className="shrink-0" />
            </motion.a>

            <p className="flex items-center gap-2 text-sm font-medium text-brand-blue">
              <FaCheckCircle className="text-brand-orange" />
              Cumplimos con las normas técnicas peruanas vigentes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100"
          >
            <div className="flex items-center gap-3 bg-brand-blue px-5 py-5 sm:px-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange text-xl text-white">
                <FaMedal />
              </span>
              <h3 className="text-sm font-extrabold uppercase leading-snug text-white sm:text-base">
                Beneficios de contratar{" "}
                <span className="text-brand-orange">nuestros servicios</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-x-4 gap-y-4 p-5 sm:grid-cols-2 sm:p-6">
              {allBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange">
                      <Icon className="text-sm" />
                    </span>
                    <p className="text-sm leading-snug text-brand-text">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-brand-blue">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/images/hero-bg.png)" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/95 to-brand-blue/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(245,130,32,0.22)_0%,_transparent_55%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-end gap-6 px-4 pt-8 sm:pt-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8 lg:px-6 lg:pt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center pb-8 text-center lg:items-start lg:pb-10 lg:pl-4 lg:text-left"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-orange sm:w-12" />
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-lg text-white shadow-lg shadow-brand-orange/40 sm:h-12 sm:w-12 sm:text-xl">
                <FaHardHat />
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-orange sm:w-12" />
            </div>

            <p className="text-xl font-extrabold uppercase tracking-[0.1em] text-white sm:text-2xl md:text-3xl lg:text-[2.5rem]">
              Concreto Premezclado
            </p>
            <p className="mt-1 text-3xl font-extrabold uppercase tracking-[0.15em] text-brand-orange sm:text-4xl md:text-5xl">
              Lima
            </p>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
              ¡Listos para tu obra! Calidad, puntualidad y cobertura en toda
              Lima Metropolitana.
            </p>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-orange/25 transition hover:bg-[#e07418]"
            >
              Solicitar cotización
              <FaArrowRight className="text-xs" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto flex w-full max-w-[280px] justify-center sm:max-w-[320px] lg:mx-0 lg:max-w-[360px]"
          >
            <img
              src="/images/worker-png.png?v=4"
              alt="Control de calidad de concreto premezclado — Concretera Lima"
              className="relative z-10 h-auto w-full max-h-[280px] object-contain object-bottom drop-shadow-2xl sm:max-h-[320px] lg:max-h-[380px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
