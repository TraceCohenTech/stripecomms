"use client";

import { motion, type Variants } from "framer-motion";
import SystemsDiagram from "./SystemsDiagram";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section id="thesis" className="relative min-h-screen flex items-center grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 w-full">
        <div className="grid lg:grid-cols-[1fr,400px] gap-16 lg:gap-20 items-center">
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted">
                Strategic Communications Critique
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-editorial text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] tracking-[-0.02em] text-ink mb-6"
            >
              Stripe undersells what{" "}
              <span className="italic">it has become.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10"
            >
              The product evolved from payments API to financial operating system.
              The communications still describe the parts more clearly than the whole.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#critique"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white text-sm font-medium rounded-full hover:bg-ink/90 transition-colors duration-200"
              >
                Read the critique
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-px">
                  <path d="M7 1v12m0 0l5-5m-5 5L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#gaps"
                className="inline-flex items-center gap-2 px-6 py-3 border border-divider text-ink text-sm font-medium rounded-full hover:border-ink/30 hover:bg-white transition-all duration-200"
              >
                View narrative gaps
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <SystemsDiagram />
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-divider" />
    </section>
  );
}
