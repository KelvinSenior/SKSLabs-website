"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "RENTFLOW",
    description: "A rental management platform for modern event rental businesses.",
  },
  {
    name: "QUICKFIX",
    description: "A fast and scalable service marketplace platform.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Design-forward product experiences built for scale.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Explore the first products coming from SKS Labs, crafted for high-growth teams and modern businesses.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel group overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-glow transition duration-500"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">{project.name}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.name}</h3>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 ring-1 ring-cyan-300/15">
                  Coming Soon
                </span>
              </div>
              <p className="mt-6 text-base leading-7 text-slate-300">{project.description}</p>
              <div className="mt-8 flex items-center gap-3 text-sm text-cyan-200 transition group-hover:text-cyan-100">
                <span className="font-semibold">Learn more</span>
                <span aria-hidden="true">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
