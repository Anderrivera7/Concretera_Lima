import { motion } from "framer-motion";
import {
  FaTruck,
  FaCalculator,
  FaHardHat,
  FaShieldAlt,
} from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { services, images } from "../data/content";

const iconMap = {
  truck: FaTruck,
  calculator: FaCalculator,
  pump: MdWaterDrop,
  helmet: FaHardHat,
};

export default function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Fondo con foto + overlay azul */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.heroBg})` }}
      />
      <div className="absolute inset-0 bg-[#0B3D91]/92" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
            Servicios de concreto premezclado en Lima
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
            Concreto, bombeo, cubicaje y asesoría técnica para tu obra.
          </p>
          <span className="mx-auto mt-3 block h-1 w-16 rounded bg-brand-orange" />
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FaShieldAlt;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-xl"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
                  />
                  <span className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg ring-4 ring-white">
                    <Icon className="text-lg" />
                  </span>
                </div>

                <div className="px-5 pb-6 pt-10 text-center">
                  <h3 className="mb-2 text-sm font-extrabold uppercase leading-snug text-brand-blue sm:text-[15px]">
                    {service.title}
                  </h3>
                  <span className="mx-auto mb-3 block h-0.5 w-10 bg-brand-orange" />
                  <p className="text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#galeria"
            className="inline-flex items-center gap-2 rounded-md border border-white/80 bg-brand-blue px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-brand-blue"
          >
            Ver todos los servicios ›
          </a>
        </div>
      </div>
    </section>
  );
}
