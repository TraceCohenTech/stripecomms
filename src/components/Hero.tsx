"use client";

import { motion, type Variants } from "framer-motion";
import SystemsDiagram from "./SystemsDiagram";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section id="thesis" className="relative stripe-gradient-bg overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="grid lg:grid-cols-[1fr,360px] gap-10 lg:gap-14 items-center">
          <div>
            <motion.div
              custom={0} initial="hidden" animate="visible" variants={fadeUp}
              className="inline-flex items-center gap-2 mb-5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-stripe-indigo" />
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-stripe-slate">
                Strategic Communications Opportunity
              </span>
            </motion.div>

            <motion.h1
              custom={1} initial="hidden" animate="visible" variants={fadeUp}
              className="font-editorial text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.08] tracking-[-0.025em] text-stripe-navy mb-5"
            >
              <span className="whitespace-nowrap">Stripe&rsquo;s biggest</span>{" "}
              <span className="italic bg-gradient-to-r from-stripe-indigo to-stripe-blue bg-clip-text text-transparent whitespace-nowrap">untold story.</span>
            </motion.h1>

            <motion.p
              custom={2} initial="hidden" animate="visible" variants={fadeUp}
              className="text-[17px] md:text-lg text-stripe-slate leading-relaxed max-w-[28rem] mb-8"
            >
              Stripe has evolved from payments API to financial operating system.
              There&rsquo;s an extraordinary opportunity to tell that story more explicitly
              and reach entirely new audiences because of it.
            </motion.p>

            <motion.div
              custom={3} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#scale"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stripe-navy text-white text-sm font-medium rounded-full hover:bg-stripe-navy/90 transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
              >
                See the opportunity
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v10m0 0l4-4m-4 4L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#blind-spot"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-stripe-border text-stripe-navy text-sm font-medium rounded-full hover:border-stripe-slate/30 hover:bg-white transition-all duration-200"
              >
                Explore the untold story
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <SystemsDiagram />
          </motion.div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-stripe-border to-transparent" />
    </section>
  );
}
