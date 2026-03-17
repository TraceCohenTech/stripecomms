"use client";

import { motion } from "framer-motion";

const layers = [
  {
    action: "Earn",
    desc: "Accept and process revenue",
    products: ["Payments", "Checkout", "Billing"],
    color: "#635BFF",
  },
  {
    action: "Move",
    desc: "Route funds between parties",
    products: ["Connect", "Treasury"],
    color: "#0073E6",
  },
  {
    action: "Store",
    desc: "Hold and issue capital",
    products: ["Treasury", "Issuing"],
    color: "#00A4EF",
  },
  {
    action: "Orchestrate",
    desc: "Coordinate financial workflows",
    products: ["Connect", "Billing", "Revenue Recognition"],
    color: "#00D4AA",
  },
  {
    action: "Optimize",
    desc: "Analyze and protect",
    products: ["Radar", "Sigma", "Data Pipeline"],
    color: "#0A2540",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PlatformView() {
  return (
    <section id="platform" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-stripe-indigo">
            The Reframe
          </span>
          <h2 className="font-editorial text-[1.75rem] md:text-[2rem] mt-2 tracking-[-0.01em] text-stripe-navy">
            What Stripe actually is
          </h2>
          <p className="text-stripe-slate text-[15px] mt-2 max-w-md">
            Not a menu of products. A system for how money works on the internet.
          </p>
        </motion.div>

        {/* Architecture flow */}
        <div className="bg-stripe-light rounded-xl border border-stripe-border overflow-hidden">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.action}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group"
            >
              <div className={`grid grid-cols-[100px,1fr] md:grid-cols-[140px,160px,1fr] items-center px-5 md:px-6 py-4 ${i < layers.length - 1 ? "border-b border-stripe-border" : ""} hover:bg-white transition-colors duration-200`}>
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-2 h-2 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-150"
                    style={{ backgroundColor: layer.color }}
                  />
                  <span className="text-sm font-semibold text-stripe-navy">
                    {layer.action}
                  </span>
                </div>
                <span className="hidden md:block text-xs text-stripe-slate/60">
                  {layer.desc}
                </span>
                <div className="flex flex-wrap gap-1.5 justify-end md:justify-start">
                  {layer.products.map((product) => (
                    <span
                      key={product}
                      className="px-2.5 py-1 text-[11px] font-medium text-stripe-slate bg-white rounded-md border border-stripe-border group-hover:border-transparent transition-all duration-200"
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = `${layer.color}0D`;
                        (e.target as HTMLElement).style.color = layer.color;
                        (e.target as HTMLElement).style.borderColor = `${layer.color}25`;
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "";
                        (e.target as HTMLElement).style.color = "";
                        (e.target as HTMLElement).style.borderColor = "";
                      }}
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pullquote */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex items-start gap-4 px-1"
        >
          <div className="w-0.5 h-14 bg-gradient-to-b from-stripe-indigo to-stripe-cyan rounded-full shrink-0 mt-1" />
          <p className="font-editorial text-lg md:text-xl italic text-stripe-navy/70 leading-relaxed">
            Every layer exists. The architecture is implicit in the product.
            What&rsquo;s missing is making that architecture the story.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
