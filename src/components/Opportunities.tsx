"use client";

import { motion } from "framer-motion";

const opportunities = [
  {
    number: "01",
    title: "Speak to CFOs, not just developers",
    description:
      "The audience has expanded beyond engineering teams. Finance leaders, COOs, and founders making platform decisions need a narrative that speaks to business architecture, not just technical implementation.",
  },
  {
    number: "02",
    title: 'Own the "financial OS" category',
    description:
      "No company is better positioned to define this category. But if Stripe doesn't name it and claim it explicitly, someone else will frame the narrative — likely a legacy bank or a competitor with less product substance.",
  },
  {
    number: "03",
    title: "Use economic data as authority",
    description:
      "Stripe sees real-time signals across millions of businesses. This data could power an authoritative voice on internet commerce — think Bloomberg terminal logic, applied to Stripe's unique vantage point.",
  },
  {
    number: "04",
    title: "Define AI-native commerce",
    description:
      "As commerce becomes more automated, the infrastructure layer matters more than ever. Stripe has a chance to frame itself as the financial intelligence layer that AI-native businesses are built on.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Opportunities() {
  return (
    <section id="opportunities" className="py-28 md:py-36 bg-white">
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
            The Opportunity
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl mt-4 tracking-[-0.01em]">
            Missed narrative opportunities
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {opportunities.map((item, i) => (
            <motion.div
              key={item.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 md:p-10 rounded-2xl border border-divider bg-surface hover:bg-white hover:border-accent/20 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-xs font-mono text-accent mb-4 block">
                {item.number}
              </span>
              <h3 className="text-lg font-semibold text-ink mb-3">
                {item.title}
              </h3>
              <p className="text-[15px] text-muted leading-relaxed">
                {item.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Strategic recommendation</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7m0 0L6.5 3m3 3L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
