import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaClock,
  FaPhoneAlt,
} from "react-icons/fa";
import { company } from "../data/content";
import WhatsAppButton from "./WhatsAppButton";

const initialForm = {
  nombre: "",
  telefono: "",
  correo: "",
  mensaje: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/" + company.email, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Cotización web — ${form.nombre}`,
          Nombre: form.nombre,
          Teléfono: form.telefono,
          Correo: form.correo,
          Mensaje: form.mensaje,
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Error al enviar");

      setStatus("sent");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contacto" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-sm">
            Contacto
          </p>
          <h2 className="text-2xl font-extrabold text-brand-blue sm:text-3xl lg:text-4xl">
            Cotiza concreto premezclado en Lima — Concretera Perú
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600 sm:text-base">
            Escríbenos a tu concretería Lima: cotización de concreto, bombeo o
            cubicaje sin costo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl bg-brand-gray p-6 shadow-sm sm:p-8"
          >
            <div className="mb-4">
              <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-brand-text">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                placeholder="Tu nombre completo"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium text-brand-text">
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                required
                value={form.telefono}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                placeholder="951 320 100"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="correo" className="mb-1.5 block text-sm font-medium text-brand-text">
                Correo
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                required
                value={form.correo}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-brand-text">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-brand-orange py-3.5 text-sm font-semibold text-white transition hover:bg-[#e07418] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Enviando..." : "Enviar"}
            </button>
            {status === "sent" && (
              <p className="mt-3 text-center text-sm font-medium text-green-600">
                ¡Mensaje enviado! Revisa tu Gmail pronto.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-center text-sm font-medium text-red-600">
                No se pudo enviar. Intenta por WhatsApp o llama al{" "}
                {company.phone}.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="space-y-4 rounded-2xl bg-brand-gray p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-brand-orange" />
                <div>
                  <p className="font-semibold text-brand-blue">Correo</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="break-all text-sm text-gray-600 hover:text-brand-orange"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaClock className="mt-1 text-brand-orange" />
                <div>
                  <p className="font-semibold text-brand-blue">Horario</p>
                  <p className="text-sm text-gray-600">{company.schedule}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-brand-orange" />
                <div>
                  <p className="font-semibold text-brand-blue">Teléfono</p>
                  <a
                    href={company.phoneLink}
                    className="text-sm text-gray-600 hover:text-brand-orange"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>
              <WhatsAppButton className="w-full sm:w-auto" variant="light" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
