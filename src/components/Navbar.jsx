import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { company, navLinks, images } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 140 >= el.offsetTop) {
          setActive(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    setActive(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="border-b border-white/10 bg-brand-blue text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-3 py-1.5 text-[10px] sm:gap-x-5 sm:px-4 sm:text-[11px] md:gap-x-7 md:text-xs lg:px-6">
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center gap-1.5 transition hover:text-brand-orange sm:gap-2"
          >
            <FaEnvelope className="shrink-0 text-brand-orange" />
            <span className="truncate">{company.email}</span>
          </a>
          <span className="inline-flex items-center gap-1.5 sm:gap-2">
            <FaClock className="shrink-0 text-brand-orange" />
            <span>{company.schedule}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 sm:gap-2">
            <FaMapMarkerAlt className="shrink-0 text-brand-orange" />
            <span>Lima Metropolitana</span>
          </span>
        </div>
      </div>

      <div
        className={`bg-white transition-colors ${
          scrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 overflow-visible px-3 py-2 sm:gap-4 sm:px-4 sm:py-2.5 lg:px-6">
          <a
            href="#inicio"
            onClick={() => handleNav("#inicio")}
            className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
          >
            <img
              src={images.logo}
              alt="Logo Concretera Lima — concreto premezclado"
              className="-my-4 h-20 w-20 shrink-0 object-contain sm:-my-5 sm:h-24 sm:w-24 md:-my-6 md:h-28 md:w-28"
            />
            <span className="truncate text-xs font-extrabold uppercase leading-none tracking-wide text-brand-blue sm:text-sm md:text-base">
              Concretera
              <span className="ml-1 text-brand-orange">Lima</span>
            </span>
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-5 xl:gap-7 lg:flex">
            <nav className="flex items-center" aria-label="Principal">
              <ul className="flex items-center">
                {navLinks.map((link) => {
                  const isActive = active === link.href;
                  return (
                    <li key={link.href + link.label} className="flex">
                      <a
                        href={link.href}
                        onClick={() => handleNav(link.href)}
                        className={`inline-flex h-10 items-center justify-center border-b-2 px-3 text-[13px] font-semibold leading-none tracking-wide transition-colors xl:px-3.5 xl:text-sm ${
                          isActive
                            ? "border-brand-orange text-brand-orange"
                            : "border-transparent text-brand-text hover:border-brand-orange/35 hover:text-brand-orange"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-2.5 border-l border-gray-200 pl-5 xl:gap-3 xl:pl-6">
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-brand-blue"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm xl:h-9 xl:w-9">
                  <FaWhatsapp className="text-sm xl:text-base" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[10px] text-gray-500 xl:text-[11px]">
                    Escríbenos
                  </span>
                  <span className="block text-[11px] font-bold xl:text-xs">
                    {company.phone}
                  </span>
                </span>
              </a>
              <a
                href="#contacto"
                onClick={() => handleNav("#contacto")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange px-3.5 py-2 text-[11px] font-semibold leading-none text-white shadow-md transition hover:bg-[#e07418] xl:px-4 xl:text-xs"
              >
                <HiDocumentText className="text-sm" />
                Cotizar ahora
              </a>
            </div>
          </div>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="rounded-lg p-1.5 text-brand-blue lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {open && (
          <div className="max-h-[calc(100svh-100px)] overflow-y-auto border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-0.5" aria-label="Móvil">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`rounded-lg border-l-4 px-3 py-3 text-sm font-semibold transition-colors ${
                    active === link.href
                      ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                      : "border-transparent text-brand-text hover:bg-brand-gray"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4">
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-brand-blue bg-transparent px-5 py-3.5 text-sm font-bold text-brand-blue transition hover:bg-brand-blue/5"
              >
                <FaWhatsapp className="text-lg" />
                Escríbenos
              </a>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-5 py-3.5 text-sm font-semibold text-white"
              >
                <HiDocumentText />
                Cotizar ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
