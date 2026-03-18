"use client";

import { motion } from "framer-motion";

const currentItems = [
  { text: "Great products", sub: "Well-documented, reliable" },
  { text: "Clear APIs", sub: "Developer experience focus" },
  { text: "Developer adoption", sub: "Bottom-up growth" },
  { text: "Modular tools", sub: "Pick what you need" },
];

const nextItems = [
  { text: "Financial operating system", sub: "Platform-level positioning" },
  { text: "System-level value", sub: "Greater than sum of parts" },
  { text: "CFO + operator relevance", sub: "Executive audience" },
  { text: "Intelligence layer", sub: "Data as competitive moat" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MessagingGaps() {
  return (
    <section id="gaps" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-stripe-indigo">
            The Evolution
          </span>
          <h2 className="font-editorial text-[1.75rem] md:text-[2rem] mt-2 tracking-[-0.01em] text-stripe-navy">
            Where the story could go next
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid md:grid-cols-2 overflow-hidden rounded-xl border border-stripe-border"
        >
          {/* Current: what's working */}
          <div className="p-6 md:p-8 bg-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-stripe-cyan" />
              <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-stripe-slate">
                What Stripe already does well
              </span>
            </div>
            <div className="space-y-3.5">
              {currentItems.map((item, i) => (
                <div key={i} className="group flex items-start gap-3 py-1">
                  <span className="text-stripe-cyan mt-0.5 text-xs leading-none">&#10003;</span>
                  <div>
                    <span className="text-sm font-medium text-stripe-navy group-hover:text-stripe-indigo transition-colors duration-200 block">
                      {item.text}
                    </span>
                    <span className="text-xs text-stripe-slate">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next: where it could go */}
          <div className="p-6 md:p-8 bg-stripe-navy text-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-stripe-indigo" />
              <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/80">
                Where the messaging could expand
              </span>
            </div>
            <div className="space-y-3.5">
              {nextItems.map((item, i) => (
                <div key={i} className="group flex items-start gap-3 py-1">
                  <span className="text-stripe-indigo mt-0.5 text-xs leading-none">&#10230;</span>
                  <div>
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 block">
                      {item.text}
                    </span>
                    <span className="text-xs text-white/70">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
