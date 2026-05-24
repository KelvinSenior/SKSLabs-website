"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Founder", href: "#founder" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-surface/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#hero" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-100">
          <Image src="/SKS_Labs_Logo_no_text-bg.png" alt="SKS Labs Logo" width={40} height={40} />
          SKS Labs
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/15">
          Get in Touch
        </a>
      </div>
    </motion.header>
  );
}
