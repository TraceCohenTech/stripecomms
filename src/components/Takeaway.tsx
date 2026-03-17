"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Takeaway() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(99,91,255,0.08) 0%, transparent 70%)"
        }}
      />
      <div className="relative max-w-3xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="w-10 h-0.5 bg-gradient-to-r from-stripe-indigo to-stripe-cyan mx-auto mb-8 rounded-full" />

          <h2 className="font-editorial text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.2] tracking-[-0.02em] text-stripe-navy">
            The product has already become something much bigger than payments.{" "}
            <span className="text-stripe-slate/50">
              The messaging has not fully caught up.
            </span>
          </h2>

          <p className="mt-6 text-[15px] md:text-base text-stripe-slate max-w-xl mx-auto leading-relaxed">
            If Stripe wants to shape the next decade of internet commerce,
            it should communicate less like a product suite and more like
            the system beneath the economy.
          </p>

          <div className="w-10 h-0.5 bg-stripe-border mx-auto mt-8 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
