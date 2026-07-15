import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaHome,
  FaCheckCircle,
} from "react-icons/fa";
import { images } from "../data/content";
import WhatsAppButton from "./WhatsAppButton";

const infoCards = [
  {
    icon: FaMapMarkerAlt,
    title: "Horario de Atención",
    content: (
      <>
        <p className="mt-0">
          <span className="font-semibold text-brand-blue">Visitas a obra:</span>{" "}
          Lunes a Sábado, 6am a 6pm
        </p>
        <p className="mt-1">
          <span className="font-semibold text-brand-blue">Atención:</span>{" "}
          Llamadas / WhatsApp 24/7
        </p>
      </>
    ),
  },
  {
    icon: FaDollarSign,
    title: "Costo del Servicio",
    content: (
      <p>
        Contamos con los precios más competitivos del mercado, sin sacrificar la
        calidad del concreto ni la puntualidad en la entrega.
      </p>
    ),
  },
  {
    icon: FaHome,
    title: "Cotización a Domicilio",
    content: (
      <p>
        Realizamos visitas técnicas para calcular los m³ exactos que necesita tu
        proyecto y entregarte una cotización precisa.
      </p>
    ),
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 lg:px-6 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-px w-8 origin-right bg-brand-orange sm:w-12"
            />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange sm:text-sm">
              Por qué debería elegirnos
            </p>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-px w-8 origin-left bg-brand-orange sm:w-12"
            />
          </div>

          <p className="mb-2 text-sm text-brand-blue sm:text-base">
            Te estás haciendo la pregunta:
          </p>

          <h2 className="mb-5 text-2xl font-extrabold uppercase leading-tight text-brand-blue sm:text-3xl lg:text-4xl">
            ¿Dónde consigo concreto premezclado{" "}
            <span className="text-brand-orange">en Lima</span>?
            <span className="mt-2 block text-base font-bold normal-case tracking-normal text-brand-blue/80 sm:text-lg">
              Concretera Lima · Concretera Perú
            </span>
          </h2>

          <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Si necesitas una cotización urgente de concreto premezclado por m³,
            encontraste la mejor opción en calidad, rapidez y costo. En
            Concretera Perú te acompañamos desde el cubicaje hasta la entrega en
            obra.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mx-auto flex max-w-4xl items-start gap-3 rounded-xl border border-brand-orange/25 bg-brand-orange/10 px-4 py-4 text-left sm:px-5"
          >
            <FaCheckCircle className="mt-0.5 shrink-0 text-xl text-brand-orange" />
            <p className="text-sm text-brand-text sm:text-base">
              Se brinda <span className="font-semibold">Probetas</span>. A los
              27 días, según norma, se entrega el certificado con firma y sello
              del ingeniero civil de planta.
            </p>
          </motion.div>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-gray-100"
              >
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-xl text-white"
                >
                  <Icon />
                </motion.span>
                <h3 className="mb-3 text-sm font-extrabold uppercase text-brand-blue sm:text-base">
                  {card.title}
                </h3>
                <div className="text-sm leading-relaxed text-gray-600">
                  {card.content}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-brand-blue"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${images.heroBg})` }}
          />
          <div className="relative z-10 flex flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:gap-5 sm:px-8 sm:text-left">
            <p className="text-sm font-medium text-white sm:text-base">
              Escríbenos por WhatsApp y recibe tu cotización al instante.
            </p>
            <WhatsAppButton className="shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
