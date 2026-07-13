import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { servicePhotos, images } from "../data/content";

export default function ServiceGallery() {
  const [active, setActive] = useState(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (active === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const goPrev = () =>
    setActive((i) => (i === 0 ? servicePhotos.length - 1 : i - 1));
  const goNext = () =>
    setActive((i) => (i === servicePhotos.length - 1 ? 0 : i + 1));

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) goPrev();
    else goNext();
  };

  return (
    <section id="galeria" className="scroll-mt-28 bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:max-w-5xl lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center sm:mb-10 lg:mb-8"
        >
          <motion.img
            src={images.logo}
            alt="Concretera Perú"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 h-28 w-auto object-contain sm:mb-5 sm:h-36 md:h-40"
          />
          <h2 className="text-xl font-extrabold uppercase tracking-wide text-brand-blue sm:text-3xl lg:text-3xl">
            Concreto premezclado y bombeo — Concretera Perú
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-2 block h-1 w-12 origin-center rounded bg-brand-orange sm:mt-3 sm:w-16"
          />
        </motion.div>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 lg:gap-4">
          {servicePhotos.map((photo, i) => (
            <motion.button
              type="button"
              key={photo.id}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(i)}
              className="group relative min-h-[44px] cursor-zoom-in overflow-hidden rounded-md text-left active:opacity-90 sm:rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-110 sm:aspect-[4/5] lg:aspect-[5/4] lg:max-h-48"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 bg-brand-blue/0 transition duration-300 group-hover:bg-brand-blue/25" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/90"
            onClick={() => setActive(null)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de la foto"
          >
            <div
              className="flex shrink-0 items-center justify-between px-3 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:pt-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-medium text-white/80">
                {active + 1} / {servicePhotos.length}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition active:bg-white/30 hover:bg-white/25"
                aria-label="Cerrar"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:flex"
                aria-label="Anterior"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:flex"
                aria-label="Siguiente"
              >
                <FaChevronRight />
              </button>

              <motion.img
                key={servicePhotos[active].src}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                src={servicePhotos[active].src}
                alt={servicePhotos[active].alt}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full rounded-md object-contain shadow-2xl sm:rounded-lg"
                draggable={false}
              />
            </div>

            <div
              className="flex shrink-0 items-center justify-center gap-6 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={goPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white active:bg-white/30"
                aria-label="Anterior"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white active:bg-white/30"
                aria-label="Siguiente"
              >
                <FaChevronRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
