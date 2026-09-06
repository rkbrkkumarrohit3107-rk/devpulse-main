"use client";

import React, { useState } from "react";
import {
  ArrowRight, Check, ChevronDown, Code2, Copy, Github, GitBranch,
  Instagram, Mail, Menu, MessageCircle, Play, Sparkles, Terminal,
  Wand2, X, Zap
} from "lucide-react";

const tools = [
  {
    icon: Wand2,
    title: "AI Code Optimizer & Bug Finder",
    description: "Spot bugs, simplify logic, and improve code quality with AI-assisted suggestions.",
    tags: ["Refactor", "Debug", "Optimize"]
  },
  {
    icon: Terminal,
    title: "Smart Regex & Cron Generator",
    description: "Generate readable regex patterns and cron schedules from plain-English requirements.",
    tags: ["Regex", "Cron", "Explain"]
  },
  {
    icon: Code2,
    title: "Advanced JSON Formatter & Type Generator",
    description: "Format messy JSON and turn API payloads into useful TypeScript types in seconds.",
    tags: ["JSON", "TypeScript", "Schema"]
  },
  {
    icon: GitBranch,
    title: "Visual Git Command Builder & Helper",
    description: "Understand Git workflows and build the right command without memorizing syntax.",
    tags: ["Git", "Workflow", "Learn"]
  }
];

const freeFeatures = [
  "Core developer utilities",
  "JSON formatter & type generator",
  "Regex & cron generation",
  "Community support"
];

const proFeatures = [
  "Everything in Free",
  "AI code optimization",
  "Advanced Git assistance",
  "Priority support",
  "Early access to new tools"
];

function Button({ children, href, variant = "primary", className = "" }) {
  const styles = {
    primary: "bg-emerald-500 text-zinc-950 hover:bg-emerald-400",
    secondary: "border border-white/10 bg-white/5 hover:bg-white/10 text-white",
    ghost: "text-zinc-300 hover:text-white"
  };
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function ToolCard({ tool }) {
  const Icon = tool.icon;
  return (
    <div className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-glow">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold">{tool.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{tool.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tool.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
            <Check size={13} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function DevPulseLandingPage() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText("const result = optimizeCode(input);");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400 text-zinc-950">
              <Zap size={19} fill="currentColor" />
            </span>
            <span>Dev<span className="text-emerald-400">Pulse</span></span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#tools" className="hover:text-white">Tools</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#founder" className="hover:text-white">About Founder</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="#contact" variant="ghost">Sign In</Button>
            <Button href="#pricing">Get Started Free <ArrowRight size={16} /></Button>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-zinc-300 md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/5 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-zinc-300">
              {["features", "tools", "pricing", "founder", "contact"].map((id) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="capitalize">
                  {id === "founder" ? "About Founder" : id}
                </a>
              ))}
              <Button href="#pricing">Get Started Free</Button>
            </div>
          </div>
        )}
      </header>

      <section className="relative grid-bg">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
              <Sparkles size={14} /> AI-powered developer productivity
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Supercharge Your Dev Workflow with{" "}
              <span className="gradient-text">AI Automation</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              DevPulse brings practical AI utilities into one fast, focused workspace so you can
              spend less time on repetitive developer tasks and more time building.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#tools">Explore Tools <ArrowRight size={17} /></Button>
              <Button href="https://github.com/" variant="secondary">
                <Github size={17} /> View GitHub Repo
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs text-zinc-500">
              <span>Fast workflow helpers</span>
              <span>Mobile-friendly UI</span>
              <span>Developer-first design</span>
            </div>
          </div>

          <div className="glass relative rounded-3xl p-3 shadow-glow">
            <div className="rounded-2xl border border-white/5 bg-zinc-950/90 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                </div>
                <span className="text-xs text-zinc-500">AI Refactor</span>
              </div>
              <div className="rounded-xl bg-black/50 p-4 font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
                <div><span className="text-zinc-600">01</span> <span className="text-violet-300">const</span> input = fetchData();</div>
                <div><span className="text-zinc-600">02</span> <span className="text-violet-300">const</span> result = optimizeCode(input);</div>
                <div><span className="text-zinc-600">03</span> <span className="text-emerald-300">return</span> result;</div>
              </div>
              <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                  <Sparkles size={16} /> Optimization suggestion
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-400">
                  Reduce repeated work by combining the transformation into a single pass.
                </p>
                <button
                  onClick={copyCode}
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-300 hover:bg-white/5"
                >
                  <Copy size={13} /> {copied ? "Copied" : "Copy suggestion"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 sm:grid-cols-4 lg:px-8">
          {[
            ["4+", "Core tools"],
            ["AI", "Workflow assistance"],
            ["24/7", "Self-serve access"],
            ["∞", "Ideas to automate"]
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black">{value}</div>
              <div className="mt-1 text-xs text-zinc-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Features</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A sharper toolkit for everyday engineering.</h2>
          <p className="mt-4 leading-7 text-zinc-400">
            From debugging to data formatting, DevPulse keeps common developer workflows close at hand.
          </p>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {tools.map((tool) => <ToolCard key={tool.title} tool={tool} />)}
        </div>
      </section>

      <section id="pricing" className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Start free. Upgrade when you need more.</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="glass rounded-3xl p-7">
              <h3 className="text-xl font-semibold">Free</h3>
              <p className="mt-2 text-sm text-zinc-500">For exploring the toolkit.</p>
              <div className="mt-6 text-4xl font-black">$0<span className="text-base font-medium text-zinc-500">/mo</span></div>
              <div className="my-7 h-px bg-white/10" />
              <FeatureList items={freeFeatures} />
              <Button href="#contact" variant="secondary" className="mt-8 w-full">Get Started Free</Button>
            </div>
            <div className="relative rounded-3xl border border-emerald-400/30 bg-emerald-400/[.04] p-7 shadow-glow">
              <div className="absolute right-6 top-6 rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-bold text-zinc-950">POPULAR</div>
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="mt-2 text-sm text-zinc-500">For serious productivity.</p>
              <div className="mt-6 text-4xl font-black">$19<span className="text-base font-medium text-zinc-500">/mo</span></div>
              <div className="my-7 h-px bg-white/10" />
              <FeatureList items={proFeatures} />
              <Button href="#contact" className="mt-8 w-full">Upgrade <ArrowRight size={16} /></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="founder" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="glass rounded-3xl p-7 sm:p-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 text-2xl font-black text-emerald-300">
              RK
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">About Founder</p>
              <h2 className="mt-2 text-2xl font-bold">Rohit Kumar Bairwa</h2>
              <p className="mt-1 text-sm text-zinc-500">Founder & Lead Architect</p>
              <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                Software Engineer passionate about developer experience, automation, and AI-driven workflow optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Contact</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Have a question or idea?</h2>
            <p className="mt-4 text-zinc-400">Reach out directly and we&apos;ll take it from there.</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <a href="mailto:rkkumarbairwa007@gmail.com" className="glass rounded-2xl p-6 transition hover:border-emerald-400/30">
              <Mail className="text-emerald-300" size={22} />
              <div className="mt-4 text-sm font-semibold">Email</div>
              <div className="mt-1 break-all text-sm text-zinc-400">rkkumarbairwa007@gmail.com</div>
            </a>

            <a
              href="https://wa.me/916378684105"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-6 transition hover:border-emerald-400/30"
            >
              <MessageCircle className="text-emerald-300" size={22} />
              <div className="mt-4 text-sm font-semibold">Text / WhatsApp Support</div>
              <div className="mt-1 text-sm text-zinc-400">+91 63786 84105</div>
              <div className="mt-2 text-xs text-zinc-500">Text / WhatsApp Message Only (No Direct Calls Accepted)</div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#" className="flex items-center gap-2 font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 text-zinc-950">
                <Zap size={16} fill="currentColor" />
              </span>
              Dev<span className="text-emerald-400">Pulse</span>
            </a>
            <p className="mt-2 text-xs text-zinc-600">Build faster. Automate smarter.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-zinc-500">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#tools" className="hover:text-white">Tools</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={16} /></a>
            <a href="#contact" className="hover:text-white" aria-label="LinkedIn"><Play size={16} /></a>
            <a href="#contact" className="hover:text-white" aria-label="Instagram"><Instagram size={16} /></a>
          </div>
          <div className="text-xs text-zinc-600">© {new Date().getFullYear()} DevPulse. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
