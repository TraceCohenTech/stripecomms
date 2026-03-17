"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Payments", x: 140, y: 30 },
  { label: "Billing", x: 260, y: 70 },
  { label: "Connect", x: 160, y: 130 },
  { label: "Treasury", x: 280, y: 170 },
  { label: "Intelligence", x: 180, y: 240 },
];

const connections = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 4 },
];

export default function SystemsDiagram() {
  return (
    <div className="relative w-full aspect-[4/3]">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        fill="none"
      >
        {/* Connection lines */}
        {connections.map((conn, i) => {
          const from = nodes[conn.from];
          const to = nodes[conn.to];
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#e5e5e5"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
              className="animate-dash"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="white"
              stroke="#635bff"
              strokeWidth="1.5"
              className={`flow-pulse ${i > 0 ? `flow-pulse-delay-${Math.min(i, 4)}` : ""}`}
            />
            <text
              x={node.x + 14}
              y={node.y + 4}
              className="fill-ink text-[11px] font-medium"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Flow arrows at edges */}
        <motion.text
          x="80"
          y="140"
          className="fill-subtle text-[9px] font-light tracking-widest uppercase"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          system
        </motion.text>
        <motion.text
          x="310"
          y="240"
          className="fill-subtle text-[9px] font-light tracking-widest uppercase"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          graph
        </motion.text>
      </svg>
    </div>
  );
}
