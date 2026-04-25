import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import { works, type Work } from "@/data/works";

const PreviousWork = () => {
  const [active, setActive] = useState<Work | null>(null);

  return (
    <Layout>
      <section className="container pt-36 md:pt-48 pb-16 md:pb-24">
        <p className="text-[0.7rem] tracking-editorial uppercase text-accent mb-6">— Index of Work</p>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
          A selection of recent <em className="text-accent not-italic">studies</em> and finished pieces.
        </h1>
        <p className="mt-8 max-w-xl text-base text-muted-foreground">
          Six explorations spanning tailoring, draping, and craft — presented as they would appear in a personal lookbook.
        </p>
      </section>

      <section className="container pb-32 md:pb-48">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-24">
          {works.map((w, i) => (
            <motion.button
              key={w.slug}
              onClick={() => setActive(w)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group text-left ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative overflow-hidden bg-muted aspect-[4/5]">
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                  <p className="text-ivory text-[0.65rem] tracking-editorial uppercase mb-2">{w.category}</p>
                  <p className="text-ivory font-serif-display text-2xl">{w.concept}</p>
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="font-serif-display text-3xl">{w.title}</h3>
                <span className="text-[0.65rem] tracking-label uppercase text-muted-foreground">{w.year} · {w.category}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-charcoal/70 backdrop-blur-sm flex items-start md:items-center justify-center p-4 md:p-10 overflow-y-auto"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background max-w-6xl w-full grid md:grid-cols-2 relative shadow-editorial"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 p-2 text-foreground/70 hover:text-accent transition-colors"
              >
                <X size={20} />
              </button>
              <div className="bg-muted aspect-[4/5] md:aspect-auto">
                <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <p className="text-[0.7rem] tracking-editorial uppercase text-accent mb-4">{active.category} · {active.year}</p>
                <h2 className="font-serif-display text-4xl md:text-5xl mb-6">{active.title}</h2>
                <p className="font-serif-display text-xl md:text-2xl italic text-mocha mb-8">{active.concept}</p>
                <div className="h-px gold-line w-16 mb-8" />
                <p className="text-base leading-relaxed text-foreground/85">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PreviousWork;
