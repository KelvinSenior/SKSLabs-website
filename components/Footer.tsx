"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/80 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">SKS Labs</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
            Premium technology studio building software, AI systems, and scalable digital infrastructure for forward-looking businesses.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <a href="https://www.github.com/KelvinSenior" target="_blank" rel="noopener noreferrer" title="GitHub" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:bg-cyan-400/10">
            <Github className="h-4 w-4 text-cyan-300" /> GitHub
          </a>
          <a href="https://www.linkedin.com/company/sks-labs" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:bg-cyan-400/10">
            <Linkedin className="h-4 w-4 text-cyan-300" /> LinkedIn
          </a>
          <a href="mailto:hello@skslabs.dev" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:bg-cyan-400/10">
            <Mail className="h-4 w-4 text-cyan-300" /> hello@skslabs.dev
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SKS Labs. All rights reserved.
      </div>
    </footer>
  );
}
