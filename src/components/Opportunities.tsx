"use client";

import { motion } from "framer-motion";

const opportunities = [
  {
    number: "01",
    title: "Invite CFOs into the conversation",
    description:
      "Finance leaders, COOs, and founders making platform decisions are an enormous untapped audience. A narrative about business architecture — not just APIs — could open doors that developer marketing alone cannot.",
    tag: "Audience",
  },
  {
    number: "02",
    title: "Name and own the financial OS category",
    description:
      "No company is better positioned to define this category. By naming it explicitly, Stripe can shape the competitive frame — rather than letting analysts, banks, or competitors do it with less product substance.",
    tag: "Positioning",
  },
  {
    number: "03",
    title: "Turn economic data into thought leadership",
    description:
      "Stripe sees real-time signals across millions of businesses globally. That data could power an authoritative voice on internet commerce — like Bloomberg for the API economy. The annual letter already does this brilliantly; the opportunity is doing it year-round.",
    tag: "Authority",
  },
  {
    number: "04",
    title: "Become the voice of AI-native commerce",
    description:
      "Stripe has the framework (5 levels), the protocol (ACP), the partnerships (OpenAI, Microsoft), and the products (machine payments). No one else has all four. Owning this narrative early means defining the category for a decade.",
    tag: "Vision",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Opportunities() {
  return (
    <section id="opportunities" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-stripe-indigo">
            The Playbook
          </span>
          <h2 className="font-editorial text-[1.75rem] md:text-[2rem] mt-2 tracking-[-0.01em] text-stripe-navy">
            Four moves to expand Stripe&rsquo;s reach
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3">
          {opportunities.map((item, i) => (
            <motion.div
              key={item.number}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group relative p-6 rounded-xl border border-stripe-border bg-stripe-light hover:bg-white hover:border-stripe-indigo/25 hover:shadow-[0_4px_20px_rgba(99,91,255,0.06)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-stripe-indigo/40">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-stripe-cyan bg-stripe-cyan/10 px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="text-stripe-indigo opacity-0 group-hover:opacity-60 translate-x-0 group-hover:translate-x-0.5 transition-all duration-300">
                  <path d="M3 7h8m0 0L8 4m3 3L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-semibold text-stripe-navy mb-2 group-hover:text-stripe-indigo transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-stripe-slate leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
