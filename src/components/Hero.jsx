import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { company, heroBenefits, images } from "../data/content";
import WhatsAppButton from "./WhatsAppButton";

const iconMap = {
  shield: FaShieldAlt,
  clock: FaClock,
  map: FaMapMarkerAlt,
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden pt-[84px] sm:pt-[88px] md:pt-[92px]"
    >
      <img
        src={`${images.heroBg}?v=3`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#0B3D91]/55 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-84px)] w-full max-w-[1400px] flex-col sm:min-h-[calc(100svh-88px)] md:min-h-[calc(100svh-92px)] lg:flex-row lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex w-full flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:w-[52%] lg:px-10 lg:py-12 xl:w-[50%] xl:px-14"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-orange sm:mb-4 sm:text-sm md:text-base">
            Concretera en Lima · Concreto Premezclado · Concretera Perú
          </p>

          <h1 className="mb-3 text-[2.6rem] font-extrabold uppercase leading-[0.98] text-white sm:mb-4 sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.5rem] 2xl:text-[5rem]">
            Concretera
            <br />
            <span className="text-brand-orange">Perú</span>
            <span className="mt-3 block text-base font-bold tracking-wide text-white/95 sm:mt-4 sm:text-lg md:text-xl lg:text-2xl">
              Concretera Lima · Concreto premezclado en Lima
            </span>
          </h1>

          <a
            href={company.phoneLink}
            className="mb-5 inline-flex items-center gap-3 transition hover:opacity-90 sm:mb-6 sm:gap-4"
            aria-label={`Llamar al ${company.phone}`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-lg shadow-brand-orange/40 sm:h-14 sm:w-14 md:h-16 md:w-16">
              <FaPhoneAlt className="text-lg sm:text-xl md:text-2xl" />
            </span>
            <span className="text-3xl font-extrabold tracking-wide text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {company.phone}
            </span>
          </a>

          <p className="mb-6 max-w-xl text-sm leading-relaxed text-white/90 sm:mb-8 sm:text-base md:text-lg lg:max-w-lg">
            Concreto premezclado, bombeo de concreto y cubicaje en obra en Lima
            Metropolitana. Atendemos techos, losas, columnas y obras civiles con
            calidad certificada, mixer puntual y cotización gratis 24/7.
          </p>

          <div className="mb-7 grid grid-cols-1 gap-4 sm:mb-9 sm:grid-cols-3 sm:gap-5">
            {heroBenefits.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.45 }}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-lg sm:h-12 sm:w-12"
                  >
                    <Icon className="text-sm sm:text-base" />
                  </motion.span>
                  <div>
                    <p className="text-[11px] font-bold uppercase leading-tight text-white sm:text-xs md:text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-white/70 sm:text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <motion.a
              href={company.phoneLink}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 rounded-lg bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#e07418] sm:px-7 sm:py-4 sm:text-base"
            >
              <FaPhoneAlt />
              Llamar ahora
            </motion.a>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <WhatsAppButton />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative mt-auto flex w-full flex-1 items-end justify-center lg:w-[48%] xl:w-[50%]"
        >
          <img
            src={images.heroEngineer}
            alt="Ingeniera de Concretera Perú — concreto premezclado en Lima"
            className="pointer-events-none h-[min(58svh,520px)] w-auto max-w-[95%] select-none object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] sm:h-[min(62svh,600px)] md:h-[min(68svh,680px)] lg:absolute lg:bottom-0 lg:right-0 lg:h-[calc(100svh-108px)] lg:max-h-none lg:w-auto xl:right-[-1%] 2xl:right-0"
          />
        </motion.div>
      </div>

      <a
        href={company.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl transition hover:scale-110 hover:animate-none hover:bg-[#1ebe57]"
      >
        <FaWhatsapp />
      </a>
    </section>
  );
}
