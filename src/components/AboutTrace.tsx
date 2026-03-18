"use client";

import { motion } from "framer-motion";

const credentials = [
  {
    label: "Tech PR roots",
    detail: "Parents built one of the largest tech PR agencies in the industry — strategic communications is in my DNA.",
  },
  {
    label: "Agency founder",
    detail: "Founded and ran my own PR agency for years, leading comms strategy for dozens of clients across tech, finance, and consumer.",
  },
  {
    label: "16 years of angel investing",
    detail: "Strategic communications advisor and angel investor across dozens of companies — I've seen firsthand how narrative shapes outcomes.",
  },
  {
    label: "Operator + strategist",
    detail: "Not just theory. Hands-on comms work across fundraising, launches, repositioning, and category creation for startups and growth-stage companies.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutTrace() {
  return (
    <section id="about" className="py-16 md:py-20 bg-stripe-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left — intro */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-stripe-cyan">
              Who Prepared This
            </span>
            <h2 className="font-editorial text-[1.75rem] md:text-[2rem] mt-2 tracking-[-0.01em] text-white">
              Trace Cohen
            </h2>
            <p className="text-white/70 text-[15px] mt-4 leading-relaxed">
              I grew up in strategic communications. My parents built one of the largest
              technology PR agencies in the country — I watched how the right narrative
              could transform how markets understood a company.
            </p>
            <p className="text-white/70 text-[15px] mt-3 leading-relaxed">
              I went on to found my own PR agency, leading comms strategy for dozens of
              clients. Over the past 16 years as an angel investor, I&rsquo;ve advised on
              strategic communications across dozens of portfolio companies — from
              early-stage positioning to category creation to IPO narratives.
            </p>
            <p className="text-white/70 text-[15px] mt-3 leading-relaxed">
              This brief is what I do: identify the gap between what a company
              <em> is </em> and what the world <em>understands it to be</em> — then close it.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://x.com/Trace_Cohen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @Trace_Cohen
              </a>
              <a
                href="mailto:t@nyvp.com"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                t@nyvp.com
              </a>
            </div>
          </motion.div>

          {/* Right — credentials */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="space-y-3"
          >
            {credentials.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fadeUp}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                className="group p-5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300"
              >
                <h3 className="text-[15px] font-semibold text-white mb-1.5">
                  {item.label}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
