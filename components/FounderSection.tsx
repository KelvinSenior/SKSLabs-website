"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail, Globe } from "lucide-react";

const founderHighlights = [
  { label: "Global Reach", value: "Ghana to the world" },
  { label: "AI Focus", value: "Smart systems & automation" },
  { label: "Scalability", value: "Built for future growth" },
];

export default function FounderSection() {
  return (
    <section id="founder" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-glow backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.12),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.08),transparent_18%)]" />
          <div className="relative flex h-full flex-col items-center justify-center gap-6 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-8 text-center shadow-xl shadow-slate-950/40">
            <div className="relative h-44 w-44 overflow-hidden rounded-[2rem] bg-slate-900/70 ring-1 ring-white/10">
              <Image src="/founder.jpg" alt="Founder portrait" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Founder</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Kelvin Senior Sarfo</h3>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <a href="https://www.linkedin.com/in/kelvin-senior-sarfo-2b98852a7/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="rounded-full bg-white/5 p-3 transition hover:bg-cyan-400/15">
                <Linkedin className="h-5 w-5 text-cyan-300" />
              </a>
              <a href="mailto:hello@skslabs.dev" title="Email" className="rounded-full bg-white/5 p-3 transition hover:bg-cyan-400/15">
                <Mail className="h-5 w-5 text-cyan-300" />
              </a>
              <a href="https://kelvinsenior.github.io/KelvinSenior/" target="_blank" rel="noopener noreferrer" title="Website" className="rounded-full bg-white/5 p-3 transition hover:bg-cyan-400/15">
                <Globe className="h-5 w-5 text-cyan-300" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Founder story</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Building scalable software, AI systems, and digital infrastructure.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Founded by Sarfo Kelvin Senior, SKS Labs is focused on building scalable software products, AI-powered systems, and modern digital infrastructure from Ghana to the world.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {founderHighlights.map((item) => (
              <div key={item.label} className="glass-panel rounded-3xl border border-white/10 p-6 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/20">
                <p className="font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-slate-400">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
