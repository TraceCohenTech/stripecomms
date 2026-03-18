"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "thesis", label: "Thesis" },
  { id: "scale", label: "Scale" },
  { id: "critique", label: "Opportunity" },
  { id: "platform", label: "Platform" },
  { id: "blind-spot", label: "Untold" },
  { id: "agentic", label: "Agentic" },
  { id: "opportunities", label: "Playbook" },
  { id: "about", label: "About" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("thesis");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
      const sectionElements = sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].el;
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sectionElements[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="fixed top-3 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-0.5 bg-white/90 backdrop-blur-xl border border-stripe-border rounded-full px-1.5 py-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 rounded-full ${
                activeSection === section.id
                  ? "text-stripe-indigo"
                  : "text-stripe-slate hover:text-stripe-navy"
              }`}
            >
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-stripe-indigo/[0.07] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{section.label}</span>
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
