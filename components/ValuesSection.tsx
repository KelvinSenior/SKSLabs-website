"use client";

import { motion } from "framer-motion";
import { Cpu, Rocket, Layers, Zap } from "lucide-react";

const values = [
  {
    title: "Software Engineering",
    description: "Product-first architectures built with performance, polish, and scale in mind.",
    icon: Cpu,
  },
  {
    title: "AI Systems",
    description: "Intelligent automation and machine learning pipelines designed for real business outcomes.",
    icon: Zap,
  },
  {
    title: "Startup Innovation",
    description: "Strategic product roadmaps, go-to-market innovation, and brand-led experiences.",
    icon: Rocket,
  },
  {
    title: "Business Automation",
    description: "Workflow-driven systems that reduce friction and accelerate modern teams.",
    icon: Layers,
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Core offerings</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Modern technology capabilities for ambitious teams.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-panel rounded-[2rem] border border-white/10 p-7 transition duration-500 hover:border-cyan-300/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{value.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
