"use client";

import { motion } from "framer-motion";

const levels = [
  {
    level: 1,
    name: "Eliminating web forms",
    description: "Send a URL to your agent, it fills out payment and shipping. The system isn't making decisions — just typing and clicking 'buy' on your behalf.",
    status: "now",
  },
  {
    level: 2,
    name: "Descriptive search",
    description: "You describe situations, not products. 'Back-to-school supplies for a third grader in Chicago.' The system reasons across weather, materials, reviews, and delivery timelines.",
    status: "now",
  },
  {
    level: 3,
    name: "Persistence",
    description: "You stop reintroducing yourself. The system already knows your preferences from previous conversations and purchases.",
    status: "emerging",
  },
  {
    level: 4,
    name: "Delegation",
    description: "You stop choosing altogether. 'Get the back-to-school shopping done. Keep it under $400.' The system handles search, evaluation, and purchase.",
    status: "emerging",
  },
  {
    level: 5,
    name: "Anticipation",
    description: "There is no prompt. The system knows the school calendar, your preferences, your budget. You just receive a notification that everything has been purchased.",
    status: "future",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  now: { bg: "bg-stripe-cyan/10", text: "text-stripe-cyan", label: "Today" },
  emerging: { bg: "bg-stripe-indigo/10", text: "text-stripe-indigo", label: "Emerging" },
  future: { bg: "bg-stripe-slate/10", text: "text-stripe-slate", label: "Future" },
};

export default function AgenticLevels() {
  return (
    <section id="agentic" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-stripe-indigo">
            The Vision
          </span>
          <h2 className="font-editorial text-[1.75rem] md:text-[2rem] mt-2 tracking-[-0.01em] text-stripe-navy">
            Stripe defined the 5 levels of agentic commerce
          </h2>
          <p className="text-stripe-slate text-[15px] mt-2 max-w-lg">
            Like self-driving levels for autonomous vehicles — but for AI-powered buying.
            This framework was buried in a PDF annual letter. It should be defining the industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-[23px] md:left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-stripe-cyan via-stripe-indigo to-stripe-border" />

          <div className="space-y-2">
            {levels.map((item, i) => {
              const status = statusColors[item.status];
              return (
                <motion.div
                  key={item.level}
                  initial="hidden" whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group relative flex gap-4 md:gap-5"
                >
                  {/* Level indicator */}
                  <div className="relative z-10 shrink-0 w-[46px] md:w-[54px] h-[46px] md:h-[54px] rounded-xl bg-white border border-stripe-border flex items-center justify-center group-hover:border-stripe-indigo/30 transition-colors duration-300">
                    <span className="text-lg md:text-xl font-editorial font-semibold text-stripe-navy">
                      {item.level}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border border-stripe-border bg-white p-4 md:p-5 group-hover:border-stripe-indigo/20 group-hover:shadow-[0_2px_12px_rgba(99,91,255,0.05)] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-[15px] font-semibold text-stripe-navy">
                        {item.name}
                      </h3>
                      <span className={`text-[10px] font-semibold tracking-[0.06em] uppercase px-2 py-0.5 rounded-full ${status.bg} ${status.text}`}>
                        {status.label}
                      </span>
                    </div>
                    <p className="text-sm text-stripe-slate leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex items-start gap-3"
        >
          <div className="w-0.5 h-10 bg-gradient-to-b from-stripe-indigo to-stripe-cyan rounded-full shrink-0 mt-0.5" />
          <p className="text-sm text-stripe-slate/60 leading-relaxed max-w-lg">
            Stripe already built the tools for this future: Agentic Commerce Protocol with OpenAI, shopping in ChatGPT, machine payments via stablecoins. The industry is at Level 1. Stripe is building for Level 5. Almost nobody knows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
