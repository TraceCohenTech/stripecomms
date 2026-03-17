"use client";

import { motion } from "framer-motion";

const layers = [
  {
    action: "Earn money",
    products: ["Payments", "Checkout", "Billing"],
    color: "#635bff",
  },
  {
    action: "Move money",
    products: ["Connect", "Treasury"],
    color: "#0073e6",
  },
  {
    action: "Store money",
    products: ["Treasury", "Issuing"],
    color: "#0ea5e9",
  },
  {
    action: "Orchestrate money",
    products: ["Connect", "Billing", "Revenue Recognition"],
    color: "#10b981",
  },
  {
    action: "Optimize money",
    products: ["Radar", "Sigma", "Data Pipeline"],
    color: "#f59e0b",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PlatformView() {
  return (
    <section id="platform" className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted">
            The Reframe
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl mt-4 tracking-[-0.01em] max-w-2xl">
            What Stripe actually is
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl">
            Not a menu of products. A system for how money works on the internet.
          </p>
        </motion.div>

        <div className="mt-16 space-y-0">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.action}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="grid grid-cols-[140px,1fr] md:grid-cols-[200px,1fr] items-center border-b border-divider py-6 md:py-8">
                <div className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: layer.color }}
                  />
                  <span className="text-sm md:text-base font-semibold text-ink">
                    {layer.action}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {layer.products.map((product) => (
                    <span
                      key={product}
                      className="px-3 py-1.5 text-xs md:text-sm font-medium text-muted bg-surface rounded-full border border-divider group-hover:border-transparent transition-all duration-300"
                      style={{
                        "--hover-bg": `${layer.color}10`,
                        "--hover-color": layer.color,
                      } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = `${layer.color}10`;
                        (e.target as HTMLElement).style.color = layer.color;
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "";
                        (e.target as HTMLElement).style.color = "";
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 p-8 md:p-10 bg-surface rounded-2xl border border-divider"
        >
          <p className="font-editorial text-xl md:text-2xl italic text-ink/80 leading-relaxed max-w-2xl">
            &ldquo;Every layer exists. The architecture is implicit in the product.
            What&rsquo;s missing is making that architecture the story.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
