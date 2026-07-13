import { motion } from "framer-motion";
import { images } from "../data/content";
import WhatsAppButton from "./WhatsAppButton";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.cta})` }}
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-brand-blue/85" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <motion.img
            src={images.logo}
            alt="Concretera Perú"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mb-6 h-36 w-auto object-contain sm:h-44 md:h-52 lg:h-56"
          />

          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            ¿Necesitas concreto premezclado en Lima?
          </h2>
          <p className="mb-8 text-lg font-medium text-white/90 sm:text-xl">
            Concretera Perú cotiza concreto y bombeo{" "}
            <span className="font-extrabold text-brand-orange">GRATIS</span>.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex rounded-lg bg-brand-orange px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#e07418]"
            >
              Solicitar Cotización
            </motion.a>
            <WhatsAppButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
