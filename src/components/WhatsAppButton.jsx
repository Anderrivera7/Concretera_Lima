import { FaWhatsapp } from "react-icons/fa";
import { company } from "../data/content";

/**
 * Botón WhatsApp: borde blanco, fondo transparente, texto "Escríbenos".
 * variant "light" = para fondos claros (borde/texto azul).
 * No usar en el FAB flotante de la esquina.
 */
export default function WhatsAppButton({
  label = "Escríbenos",
  className = "",
  onClick,
  variant = "dark",
}) {
  const styles =
    variant === "light"
      ? "border-2 border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue/5"
      : "border-2 border-white bg-transparent text-white hover:bg-white/10";

  return (
    <a
      href={company.whatsappLink}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold shadow-md backdrop-blur-sm transition active:scale-[0.98] sm:px-7 sm:py-4 sm:text-base ${styles} ${className}`}
    >
      <FaWhatsapp className="text-lg sm:text-xl" />
      {label}
    </a>
  );
}
