import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { coverageZones } from "../data/content";

export default function Coverage() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-sm">
            Lima concreto · Cobertura
          </p>
          <h2 className="text-2xl font-extrabold text-brand-blue sm:text-3xl lg:text-4xl">
            Concretera en Lima: concreto premezclado en toda la metrópoli
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
            Entregamos concreto premezclado y bombeo en Lima Norte, Sur, Este y
            Centro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coverageZones.map((zone, i) => (
            <motion.div
              key={zone.zone}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-gray-100 bg-brand-gray p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-2 text-brand-blue">
                <FaMapMarkerAlt className="text-brand-orange" />
                <h3 className="text-lg font-bold">Concreto {zone.zone}</h3>
              </div>
              <ul className="space-y-2">
                {zone.districts.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
