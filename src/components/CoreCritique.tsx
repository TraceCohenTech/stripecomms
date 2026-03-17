"use client";

import { motion } from "framer-motion";

const critiques = [
  {
    number: "01",
    label: "Too developer-first",
    description:
      "Stripe's communications still default to the developer as the primary audience. But the product now serves CFOs, operations leaders, and platform founders — people who think in business outcomes, not API endpoints.",
  },
  {
    number: "02",
    label: "Platform story feels fragmented",
    description:
      "Each product is communicated well on its own. But the system-level narrative — that these products compose into a financial operating system — is never made explicit. The whole is greater than the sum, but the messaging only sells the sum.",
  },
  {
    number: "03",
    label: "Underuses its data and authority",
    description:
      "Stripe processes a meaningful share of internet GDP. It sees economic signals before anyone else. Yet it barely speaks as an authority on commerce, leaving that positioning to consultancies and banks.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CoreCritique() {
  return (
    <section id="critique" className="py-28 md:py-36">
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
            The Critique
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl mt-4 tracking-[-0.01em]">
            Three gaps in the narrative
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-divider rounded-2xl overflow-hidden">
          {critiques.map((item, i) => (
            <motion.div
              key={item.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group bg-surface p-8 md:p-10 hover:bg-white transition-colors duration-300 cursor-default"
            >
              <span className="text-xs font-mono text-accent mb-4 block">
                {item.number}
              </span>
              <h3 className="text-lg font-semibold text-ink mb-3 group-hover:text-accent transition-colors duration-300">
                {item.label}
              </h3>
              <p className="text-[15px] text-muted leading-relaxed">
                {item.description}
              </p>
              <div className="mt-6 w-8 h-px bg-divider group-hover:w-12 group-hover:bg-accent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
