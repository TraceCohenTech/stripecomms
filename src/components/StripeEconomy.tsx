"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  {
    value: "$1.9T",
    label: "Total volume processed in 2025",
    context: "Up 34% from 2024",
    emphasis: true,
  },
  {
    value: "1.6%",
    label: "Of global GDP flows through Stripe",
    context: "Equivalent to Italy's entire economy",
  },
  {
    value: "90%",
    label: "Of the Dow Jones Industrial Average",
    context: "Uses Stripe",
  },
  {
    value: "80%",
    label: "Of the Nasdaq 100",
    context: "Runs on Stripe",
  },
  {
    value: "5M+",
    label: "Businesses powered directly or via platforms",
    context: "Including all top AI companies",
  },
  {
    value: "350+",
    label: "Product updates shipped in 2025",
    context: "Plus acquisitions of Privy & Metronome",
  },
];

function AnimatedStat({ value, delay }: { value: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setDisplayed(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <span ref={ref} className={`transition-opacity duration-500 ${displayed ? "opacity-100" : "opacity-0"}`}>
      {value}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StripeEconomy() {
  return (
    <section id="scale" className="py-16 md:py-20 bg-stripe-navy text-white overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-stripe-cyan">
            The Scale
          </span>
          <h2 className="font-editorial text-[1.75rem] md:text-[2rem] mt-2 tracking-[-0.01em] text-white">
            This is not a payments company. It&rsquo;s an economy.
          </h2>
          <p className="text-white/50 text-[15px] mt-2 max-w-lg">
            These numbers tell the story of a financial operating system. Stripe presents most of them as footnotes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`p-5 md:p-6 bg-stripe-navy group hover:bg-white/[0.03] transition-colors duration-300 ${stat.emphasis ? "col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`font-editorial ${stat.emphasis ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"} tracking-[-0.02em] mb-2`}>
                <span className="bg-gradient-to-r from-white to-stripe-cyan bg-clip-text text-transparent">
                  <AnimatedStat value={stat.value} delay={i * 0.15} />
                </span>
              </div>
              <p className="text-sm text-white/70 font-medium leading-snug">
                {stat.label}
              </p>
              <p className="text-[11px] text-white/30 mt-1">
                {stat.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Kicker line */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex items-start gap-3"
        >
          <div className="w-0.5 h-10 bg-gradient-to-b from-stripe-indigo to-stripe-cyan rounded-full shrink-0 mt-0.5" />
          <p className="text-sm text-white/40 leading-relaxed max-w-lg">
            The homepage headline — &ldquo;Financial infrastructure to grow your revenue&rdquo; — doesn&rsquo;t
            hint at any of this. These stats never appear on stripe.com.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
