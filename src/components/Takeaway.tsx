"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Takeaway() {
  return (
    <section className="py-28 md:py-40 grid-bg">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-px bg-accent mx-auto mb-12" />

          <h2 className="font-editorial text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.2] tracking-[-0.02em] text-ink">
            The product has already become something much bigger than payments.
            <br />
            <span className="text-muted">
              The messaging has not fully caught up.
            </span>
          </h2>

          <p className="mt-10 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            If Stripe wants to shape the next decade of internet commerce,
            it should communicate less like a product suite and more like
            the system beneath the economy.
          </p>

          <div className="w-12 h-px bg-divider mx-auto mt-12" />
        </motion.div>
      </div>
    </section>
  );
}
