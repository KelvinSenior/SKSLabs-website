"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 hero-background opacity-90" />
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-10 top-14 hidden h-3 w-3 rounded-full bg-cyan-400/70 blur-xl lg:block animate-slow-float" />
        <span className="absolute right-14 top-32 hidden h-4 w-4 rounded-full bg-sky-400/30 blur-2xl lg:block animate-slow-float" />
        <span className="absolute left-1/2 top-2/3 h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
          <div className="inline-flex items-center justify-center rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.28em] text-cyan-200 shadow-glow backdrop-blur">
            <Sparkles className="mr-2 h-4 w-4 text-cyan-300" />
            Premium Startup Studio
          </div>

          <h1 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Building Digital Products, AI Solutions &amp; Scalable Systems
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            SKS Labs is a technology-focused startup studio building modern software products, intelligent business systems, and future-ready digital experiences.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-400/95 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-400/25 transition hover:-translate-y-0.5 hover:bg-cyan-300/95">
              Explore Projects
              <ArrowRight className="ml-3 h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-200">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
