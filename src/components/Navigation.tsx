"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "thesis", label: "Thesis" },
  { id: "critique", label: "Critique" },
  { id: "platform", label: "Platform" },
  { id: "gaps", label: "Gaps" },
  { id: "opportunities", label: "Opportunities" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("thesis");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);

      const sectionElements = sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionElements[i].id);
            break;
          }
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
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-xl border border-divider rounded-full px-2 py-1.5 shadow-sm"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors duration-200 rounded-full ${
                activeSection === section.id
                  ? "text-accent"
                  : "text-muted hover:text-ink"
              }`}
            >
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-accent-soft rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
