"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Payments", x: 60, y: 50, size: 8 },
  { label: "Billing", x: 180, y: 30, size: 6 },
  { label: "Connect", x: 300, y: 55, size: 7 },
  { label: "Treasury", x: 120, y: 140, size: 7 },
  { label: "Issuing", x: 260, y: 150, size: 5 },
  { label: "Radar", x: 190, y: 220, size: 6 },
  { label: "Sigma", x: 340, y: 200, size: 5 },
];

const connections = [
  [0, 1], [0, 3], [1, 2], [1, 3], [1, 4],
  [2, 4], [2, 6], [3, 4], [3, 5], [4, 5], [4, 6], [5, 6],
];

export default function SystemsDiagram() {
  return (
    <div className="relative w-full aspect-[4/3]">
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-2xl opacity-40"
        style={{
          background: "radial-gradient(circle at 40% 40%, rgba(99,91,255,0.12) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,212,170,0.08) 0%, transparent 50%)"
        }}
      />
      <svg viewBox="0 0 400 270" className="w-full h-full relative" fill="none">
        {/* Connection lines */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x} y1={nodes[from].y}
            x2={nodes[to].x} y2={nodes[to].y}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeDasharray="3 5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.6 + i * 0.06, duration: 0.5 }}
            className="animate-dash"
          />
        ))}

        {/* Gradient defs */}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#635BFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D4AA" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#635BFF" />
            <stop offset="100%" stopColor="#0073E6" />
          </linearGradient>
        </defs>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
          >
            {/* Outer glow */}
            <circle
              cx={node.x} cy={node.y} r={node.size + 6}
              fill="#635BFF" opacity="0.06"
              className={`flow-pulse ${i > 0 ? `flow-pulse-delay-${Math.min(i, 4)}` : ""}`}
            />
            {/* Node */}
            <circle
              cx={node.x} cy={node.y} r={node.size}
              fill="white"
              stroke="url(#nodeGrad)"
              strokeWidth="1.5"
            />
            {/* Inner dot */}
            <circle
              cx={node.x} cy={node.y} r="2"
              fill="#635BFF"
              className={`flow-pulse ${i > 0 ? `flow-pulse-delay-${Math.min(i, 4)}` : ""}`}
            />
            {/* Label */}
            <text
              x={node.x}
              y={node.y + node.size + 16}
              textAnchor="middle"
              className="text-[10px] font-semibold"
              style={{ fontFamily: "Inter, system-ui, sans-serif", fill: "#425466" }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Center label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <text
            x="200" y="135"
            textAnchor="middle"
            className="text-[9px] font-medium tracking-[0.2em] uppercase"
            style={{ fontFamily: "Inter, system-ui, sans-serif", fill: "#635BFF", opacity: 0.5 }}
          >
            financial os
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
