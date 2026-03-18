"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Payments", x: 200, y: 42, size: 12, color: "#635BFF" },
  { label: "Billing", x: 345, y: 105, size: 10, color: "#635BFF" },
  { label: "Connect", x: 315, y: 235, size: 11, color: "#0073E6" },
  { label: "Treasury", x: 85, y: 235, size: 11, color: "#00A4EF" },
  { label: "Issuing", x: 55, y: 105, size: 10, color: "#00D4AA" },
  { label: "Radar", x: 200, y: 280, size: 9, color: "#0A2540" },
];

// Hub center
const hub = { x: 200, y: 160 };

// Each node connects to the center hub
const spokes = nodes.map((_, i) => i);

// Node-to-node connections for the outer ring
const outerConnections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [2, 5], [3, 5],
];

export default function SystemsDiagram() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "1 / 0.85" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-2xl"
        style={{
          background: `
            radial-gradient(circle at 50% 45%, rgba(99,91,255,0.15) 0%, transparent 55%),
            radial-gradient(circle at 50% 45%, rgba(0,212,170,0.08) 0%, transparent 70%)
          `
        }}
      />

      <svg viewBox="0 0 400 330" className="w-full h-full relative" fill="none">
        <defs>
          {/* Gradients for each spoke */}
          {nodes.map((node, i) => (
            <linearGradient key={`spoke-${i}`} id={`spoke-${i}`}
              x1={hub.x} y1={hub.y} x2={node.x} y2={node.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#635BFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor={node.color} stopOpacity="0.3" />
            </linearGradient>
          ))}

          {/* Outer connection gradient */}
          <linearGradient id="outerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#635BFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00D4AA" stopOpacity="0.15" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Pulse circle for traveling dots */}
          <circle id="pulseDot" r="3" fill="#635BFF" />
        </defs>

        {/* Outer ring connections (faint) */}
        {outerConnections.map(([from, to], i) => (
          <motion.line
            key={`outer-${i}`}
            x1={nodes[from].x} y1={nodes[from].y}
            x2={nodes[to].x} y2={nodes[to].y}
            stroke="url(#outerGrad)"
            strokeWidth="1"
            strokeDasharray="4 6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 + i * 0.08, duration: 0.6 }}
          />
        ))}

        {/* Spokes from hub to each node */}
        {spokes.map((i) => {
          const node = nodes[i];
          return (
            <g key={`spoke-group-${i}`}>
              {/* Spoke line */}
              <motion.line
                x1={hub.x} y1={hub.y}
                x2={node.x} y2={node.y}
                stroke={`url(#spoke-${i})`}
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.7 }}
              />

              {/* Animated traveling pulse along spoke */}
              <motion.circle
                r="2.5"
                fill={node.color}
                opacity="0.8"
                filter="url(#glow)"
                initial={{ cx: hub.x, cy: hub.y, opacity: 0 }}
                animate={{
                  cx: [hub.x, node.x, hub.x],
                  cy: [hub.y, node.y, hub.y],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  delay: 1.5 + i * 0.5,
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: nodes.length * 0.5,
                  ease: "easeInOut" as const,
                }}
              />
            </g>
          );
        })}

        {/* Center hub */}
        <motion.g
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Hub outer glow ring */}
          <motion.circle
            cx={hub.x} cy={hub.y} r="32"
            fill="none"
            stroke="#635BFF"
            strokeWidth="0.5"
            opacity="0.2"
            animate={{ r: [32, 36, 32] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Hub background */}
          <circle cx={hub.x} cy={hub.y} r="28" fill="white" stroke="#635BFF" strokeWidth="1.5" />
          {/* Hub inner fill */}
          <circle cx={hub.x} cy={hub.y} r="22" fill="#635BFF" opacity="0.06" />
          {/* Hub icon: intersecting lines suggesting a system */}
          <line x1={hub.x - 8} y1={hub.y} x2={hub.x + 8} y2={hub.y} stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={hub.x} y1={hub.y - 8} x2={hub.x} y2={hub.y + 8} stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={hub.x - 6} y1={hub.y - 6} x2={hub.x + 6} y2={hub.y + 6} stroke="#635BFF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <line x1={hub.x + 6} y1={hub.y - 6} x2={hub.x - 6} y2={hub.y + 6} stroke="#635BFF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </motion.g>

        {/* Product nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
          >
            {/* Outer pulse ring */}
            <motion.circle
              cx={node.x} cy={node.y} r={node.size + 8}
              fill="none"
              stroke={node.color}
              strokeWidth="0.5"
              opacity="0.3"
              animate={{
                r: [node.size + 8, node.size + 12, node.size + 8],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                delay: i * 0.4,
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Glow halo */}
            <circle
              cx={node.x} cy={node.y} r={node.size + 4}
              fill={node.color} opacity="0.08"
            />
            {/* Main circle */}
            <circle
              cx={node.x} cy={node.y} r={node.size}
              fill="white"
              stroke={node.color}
              strokeWidth="2"
            />
            {/* Inner dot */}
            <motion.circle
              cx={node.x} cy={node.y} r="3"
              fill={node.color}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                delay: i * 0.3,
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Label */}
            <text
              x={node.x}
              y={node.y + node.size + 18}
              textAnchor="middle"
              className="text-[11px] font-semibold"
              style={{ fontFamily: "Inter, system-ui, sans-serif", fill: "#0A2540" }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Center label below hub */}
        <motion.g
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <text
            x={hub.x} y={hub.y + 46}
            textAnchor="middle"
            className="text-[10px] font-bold tracking-[0.15em] uppercase"
            style={{ fontFamily: "Inter, system-ui, sans-serif", fill: "#635BFF" }}
          >
            Financial OS
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
