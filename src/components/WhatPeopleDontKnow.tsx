"use client";

import { motion } from "framer-motion";

const items = [
  {
    category: "Infrastructure",
    headline: "They built their own blockchain",
    detail: "Tempo — purpose-built for payments with sub-second finality, incubated with Paradigm. Visa, Nubank, and Shopify are already testing it. Designed for agentic payments and microtransactions. This alone would be a headline product at most companies.",
  },
  {
    category: "AI Commerce",
    headline: "They co-created the protocol for AI shopping",
    detail: "The Agentic Commerce Protocol (ACP), built with OpenAI, is the shared language for AI agents to transact with businesses. They power shopping inside ChatGPT and are building for Microsoft Copilot. Stripe is becoming the rails for machine-to-machine commerce.",
  },
  {
    category: "Machine Economy",
    headline: "They launched payments between AI agents",
    detail: "Machine payments let developers charge agents directly for API calls, MCP usage, and HTTP requests via stablecoin micropayments. Autonomous agents are emerging as a new customer type — and Stripe is already serving them.",
  },
  {
    category: "Lending",
    headline: "They're becoming a new kind of bank",
    detail: "Stripe Capital has funded 81,000+ businesses. A randomized study showed recipients grew 27 percentage points faster. Instead of credit scores, they use real-time revenue data — a fundamentally better lending model that could reshape small business finance.",
  },
  {
    category: "Stablecoins",
    headline: "They process $400B in stablecoin payments",
    detail: "Bridge, their stablecoin orchestration platform, saw volume quadruple. Klarna launched a stablecoin on their testnet. A YC founder can now receive funding, hold it, and pay engineers — all in stablecoins through Stripe. The future of money movement is already here.",
  },
  {
    category: "Culture",
    headline: "They run a publishing house and a magazine",
    detail: "Stripe Press has sold over 1M books on ideas that shape progress. Works in Progress is a magazine about underrated ideas to improve the world — now in print. Few companies think this broadly about their role in civilization. This is brand equity that's hard to replicate.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhatPeopleDontKnow() {
  return (
    <section id="blind-spot" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-stripe-indigo">
            The Untold Story
          </span>
          <h2 className="font-editorial text-[1.75rem] md:text-[2rem] mt-2 tracking-[-0.01em] text-stripe-navy">
            What most people don&rsquo;t know Stripe does
          </h2>
          <p className="text-stripe-slate text-[15px] mt-2 max-w-lg">
            Ask a smart business leader what Stripe does. They&rsquo;ll say &ldquo;payments.&rdquo;
            That answer covers about 20% of the picture — which means 80% is opportunity.
          </p>
        </motion.div>

        <div className="space-y-2">
          {items.map((item, i) => (
            <motion.details
              key={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group rounded-xl border border-stripe-border bg-stripe-light hover:bg-white hover:border-stripe-indigo/20 transition-all duration-300 overflow-hidden"
            >
              <summary className="flex items-center gap-4 px-5 md:px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-stripe-indigo bg-stripe-indigo/[0.07] px-2 py-0.5 rounded-full shrink-0 w-[90px] text-center">
                  {item.category}
                </span>
                <span className="text-[15px] font-semibold text-stripe-navy flex-1">
                  {item.headline}
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="text-stripe-slate/30 shrink-0 transition-transform duration-200 group-open:rotate-180"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 pt-0">
                <div className="pl-[106px] md:pl-[106px]">
                  <p className="text-sm text-stripe-slate leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.details>
          ))}
        </div>

        <motion.p
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 text-[13px] text-stripe-slate/50 max-w-lg"
        >
          Each of these would be a defining product at any other company.
          Together, they&rsquo;re an extraordinary story waiting to be told more loudly.
        </motion.p>
      </div>
    </section>
  );
}
