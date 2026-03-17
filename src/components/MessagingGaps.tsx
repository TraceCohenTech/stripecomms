"use client";

import { motion } from "framer-motion";

const currentItems = [
  "Great products",
  "Clear APIs",
  "Developer adoption",
  "Modular tools",
];

const shouldItems = [
  "Financial operating system",
  "System-level value",
  "CFO + operator relevance",
  "Intelligence layer for internet commerce",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function MessagingGaps() {
  return (
    <section id="gaps" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted">
            The Gap
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl mt-4 tracking-[-0.01em]">
            Where the messaging lags the product
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-0 border border-divider rounded-2xl overflow-hidden"
        >
          {/* Left column */}
          <div className="p-8 md:p-12 bg-white">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-subtle" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-subtle">
                What Stripe communicates now
              </span>
            </div>
            <ul className="space-y-5">
              {currentItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 group"
                >
                  <span className="text-divider mt-1.5 text-sm">&#9472;</span>
                  <span className="text-muted text-[15px] md:text-base group-hover:text-ink transition-colors duration-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="p-8 md:p-12 bg-ink text-white">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50">
                What Stripe should communicate more explicitly
              </span>
            </div>
            <ul className="space-y-5">
              {shouldItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 group"
                >
                  <span className="text-accent mt-1.5 text-sm">&#10230;</span>
                  <span className="text-white/70 text-[15px] md:text-base group-hover:text-white transition-colors duration-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
