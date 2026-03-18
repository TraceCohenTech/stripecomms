"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    homepage: "Financial infrastructure to grow your revenue.",
    letter: "We write this letter at what may well turn out to be the advent of a different and hopefully much more beneficent singularity.",
    note: "The letter captures a vision that could resonate far beyond developers.",
  },
  {
    homepage: "Accept payments, offer financial services, and implement custom revenue models.",
    letter: "Competitive markets are a sorting machine. They direct profits, capital, and talent to the places of greatest impact.",
    note: "The economic thinking is world-class. It could become the brand voice.",
  },
  {
    homepage: "Enterprise Payment Solutions for Large Businesses.",
    letter: "We're in a similarly rare moment now with agentic commerce, which has the potential to be generationally impactful.",
    note: "The founders think in decades. The website could reflect that ambition.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LetterVsHomepage() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-stripe-indigo">
            The Gap
          </span>
          <h2 className="font-editorial text-[1.75rem] md:text-[2rem] mt-2 tracking-[-0.01em] text-stripe-navy">
            The annual letter shows how big the story could be
          </h2>
          <p className="text-stripe-slate text-[15px] mt-2 max-w-lg">
            The Collisons think at civilizational scale. There&rsquo;s an opportunity to bring more of that vision into the everyday brand.
          </p>
        </motion.div>

        <div className="space-y-3">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-stripe-border overflow-hidden hover:border-stripe-indigo/20 transition-colors duration-300"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-5 md:p-6 bg-white border-b md:border-b-0 md:border-r border-stripe-border">
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-stripe-slate/20" />
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-stripe-slate/60">
                      stripe.com today
                    </span>
                  </div>
                  <p className="text-sm text-stripe-slate leading-relaxed font-medium">
                    &ldquo;{item.homepage}&rdquo;
                  </p>
                </div>

                <div className="p-5 md:p-6 bg-stripe-light">
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-stripe-cyan" />
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-stripe-slate/60">
                      2025 Annual Letter
                    </span>
                  </div>
                  <p className="text-sm text-stripe-navy leading-relaxed font-medium">
                    &ldquo;{item.letter}&rdquo;
                  </p>
                </div>
              </div>

              <div className="px-5 md:px-6 py-2.5 bg-stripe-navy/[0.03] border-t border-stripe-border">
                <p className="text-[11px] text-stripe-indigo font-medium">
                  {item.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
