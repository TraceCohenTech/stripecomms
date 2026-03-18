"use client";

import { motion } from "framer-motion";

const critiques = [
  {
    number: "01",
    label: "Expand beyond the developer audience",
    description:
      "Stripe's developer experience is legendary — and that's a strength. But the product now serves CFOs, operations leaders, and platform founders. There's an opportunity to speak to business outcomes alongside technical elegance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6 7l3 3-3 3M11 13h3" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#635BFF" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: "02",
    label: "Connect the products into one story",
    description:
      "Each product is communicated brilliantly on its own. The opportunity is making the system-level narrative explicit — showing how Payments, Treasury, Connect, and Billing compose into something greater than any individual tool.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1" stroke="#635BFF" strokeWidth="1.5"/>
        <rect x="12" y="2" width="6" height="6" rx="1" stroke="#635BFF" strokeWidth="1.5"/>
        <rect x="2" y="12" width="6" height="6" rx="1" stroke="#635BFF" strokeWidth="1.5"/>
        <rect x="12" y="12" width="6" height="6" rx="1" stroke="#635BFF" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: "03",
    label: "Lead with data authority",
    description:
      "Stripe processes 1.6% of global GDP and sees economic signals before almost anyone. That vantage point is an extraordinary asset for thought leadership — owning the narrative on internet commerce the way Bloomberg owns financial data.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 17V10M7 17V7M11 17V4M15 17V8M19 17V2" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CoreCritique() {
  return (
    <section id="critique" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-stripe-indigo">
            The Opportunity
          </span>
          <h2 className="font-editorial text-[1.75rem] md:text-[2rem] mt-2 tracking-[-0.01em] text-stripe-navy">
            Three ways to expand the narrative
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {critiques.map((item, i) => (
            <motion.div
              key={item.number}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-xl p-6 border border-stripe-border hover:border-stripe-indigo/30 hover:shadow-[0_4px_16px_rgba(99,91,255,0.08)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-stripe-indigo/50">
                  {item.number}
                </span>
                <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-[15px] font-semibold text-stripe-navy mb-2 group-hover:text-stripe-indigo transition-colors duration-300">
                {item.label}
              </h3>
              <p className="text-sm text-stripe-slate leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 h-0.5 w-6 bg-stripe-border group-hover:w-10 group-hover:bg-gradient-to-r group-hover:from-stripe-indigo group-hover:to-stripe-cyan rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
