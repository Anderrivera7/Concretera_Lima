import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { company, navLinks, services, images } from "../data/content";

const socials = [
  { Icon: FaFacebookF, href: company.facebook, label: "Facebook" },
  { Icon: FaWhatsapp, href: company.whatsappLink, label: "WhatsApp" },
  { Icon: FaLinkedinIn, href: company.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#061a3d] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <a href="#inicio" className="mb-4 flex items-center gap-2.5">
            <img
              src={images.logo}
              alt="Concretera Lima"
              className="h-11 w-11 object-contain"
            />
            <span className="text-sm font-extrabold uppercase leading-tight">
              Concretera{" "}
              <span className="text-brand-orange">Lima</span>
            </span>
          </a>
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            Concretera en Lima: concreto premezclado, bombeo de concreto y
            cubicaje en obra para proyectos en Lima Metropolitana. Cotiza
            gratis.
          </p>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-brand-orange"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-orange">
            Enlaces rápidos
          </h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-orange">
            Servicios
          </h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href="#servicios"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-orange">
            Empresa
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>{company.address}</li>
            <li>
              <a href={company.phoneLink} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li>{company.schedule}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Concretera Lima. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
