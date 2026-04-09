import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Layers3,
  Wallet,
  BarChart3,
  Cpu,
  Building2,
  Sparkles,
  Mail,
  Globe,
  Menu,
  X,
  Dice5,
} from "lucide-react";

const projects = [
  {
    name: "FocusLottery",
    domain: "focuslottery.com",
    url: "https://focuslottery.com",
    category: "Lottery Analytics",
    icon: BarChart3,
    accent: "from-cyan-400/20 to-blue-500/20",
    badge: "Data-Driven Insights",
    tagline: "AI-powered lottery intelligence using statistics, patterns, and predictive analysis.",
    description:
      "A modern analytics platform for tracking number frequency, spotting patterns, and visualizing lottery insights through a clean interactive interface.",
    highlights: ["Pattern tracking", "Number analysis", "Insight dashboards"],
  },
  {
    name: "iKalisk",
    domain: "ikalisk.com",
    url: "https://ikalisk.com",
    category: "Crypto Payments",
    icon: Dice5,
    accent: "from-emerald-400/20 to-teal-500/20",
    badge: "Kaspa Powered",
    tagline: "An AI-enhanced betting and payment experience built on Kaspa for fast digital transactions.",
    description:
      "Designed for speed and simplicity, iKalisk explores a modern crypto-first payment flow with a strong product feel and practical transaction UX.",
    highlights: ["Kaspa payments", "Wallet flows", "Modern UI"],
  },
  {
    name: "PoundMod",
    domain: "poundmod.com",
    url: "https://poundmod.com",
    category: "Crypto Mining & Investment",
    icon: Cpu,
    accent: "from-orange-400/20 to-red-500/20",
    badge: "Mining + Capital",
    tagline: "An AI-optimized crypto mining and investment platform focused on performance, efficiency, and scalable returns.",
    description:
      "PoundMod operates as both a crypto mining farm and an investment firm, optimizing hardware, energy usage, and capital deployment to generate consistent blockchain-based returns.",
    highlights: ["Mining operations", "Investment strategies", "Hardware optimization", "Energy efficiency"],
  },
  {
    name: "Orcazoo",
    domain: "orcazoo.com",
    url: "https://orcazoo.com",
    category: "Business SaaS",
    icon: Building2,
    accent: "from-violet-400/20 to-fuchsia-500/20",
    badge: "Growth Platform",
    tagline: "An AI-powered platform for marketing, affiliate systems, and automation.",
    description:
      "Orcazoo brings multiple business-growth functions into one connected system for teams that want better visibility, stronger workflows, and smarter scale.",
    highlights: ["Marketing tools", "Affiliate workflows", "Automation"],
  },
];

const stats = [
  { label: "Live Brands", value: "4" },
  { label: "Core Focus Areas", value: "Crypto • SaaS • Analytics" },
  { label: "Primary Stack", value: "React • PHP • UI Systems" },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06111a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-500/10">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-cyan-300 uppercase">Jebarco</p>
            <p className="text-xs text-white/50">Product Studio</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#projects" className="text-sm text-white/70 transition hover:text-white">Projects</a>
          <a href="#approach" className="text-sm text-white/70 transition hover:text-white">Approach</a>
          <a href="#about" className="text-sm text-white/70 transition hover:text-white">About</a>
          <a href="#contact" className="text-sm text-white/70 transition hover:text-white">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/15"
          >
            Explore Ventures
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="inline-flex rounded-xl border border-white/10 p-2 text-white/80 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#projects" onClick={() => setOpen(false)} className="text-sm text-white/70">Projects</a>
            <a href="#approach" onClick={() => setOpen(false)} className="text-sm text-white/70">Approach</a>
            <a href="#about" onClick={() => setOpen(false)} className="text-sm text-white/70">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm text-white/70">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-24"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/god-bg.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* dark + color overlay for readability and brand */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#06111a]" />
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d8b15a]/10 blur-3xl" />
        <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-[#4ea2ff]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#4ea2ff]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8b15a]/25 bg-[#d8b15a]/10 px-4 py-1.5 text-sm font-medium text-[#d8b15a]"
          >
            <span className="h-2 w-2 rounded-full bg-[#d8b15a]" />
            Founder Portfolio + Product Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl font-sans text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            One builder.
            <span className="block text-[#d8b15a]">Multiple products.</span>
            <span className="block text-white/90">Real digital solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl"
          >
            I build AI-powered software experiences across crypto payments, crypto mining, marketing, digital signage, automation, and business SaaS. Jebarco.com is the home for intelligent platforms I design, launch, and continuously evolve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e86f2a] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#d46022]"
            >
              Explore Ventures
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Work With Me
            </a>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">{stat.label}</p>
                <p className="mt-2 text-sm font-semibold text-white/90">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-[#d8b15a]/10 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#10182d] px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">Studio Overview</p>
                <p className="mt-1 text-sm font-semibold text-white">Product Ecosystem</p>
              </div>
              <div className="rounded-full border border-[#d8b15a]/25 bg-[#d8b15a]/10 px-3 py-1 text-xs font-medium text-[#d8b15a]">
                Live Portfolio
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.name}
                    className={`rounded-3xl border border-white/10 bg-gradient-to-br ${project.accent} p-5`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">{project.name}</h3>
                    <p className="mt-1 text-sm text-white/70">{project.domain}</p>
                    <p className="mt-3 text-sm leading-6 text-white/75">{project.tagline}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
        <span className="h-2 w-2 rounded-full bg-cyan-300" />
        {eyebrow}
      </div>
      <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-white/65">{description}</p>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07]"
    >
      <div className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${project.accent} opacity-70 blur-2xl`} />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
            {project.category}
          </span>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90">{project.badge}</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{project.name}</h3>
          <p className="mt-1 text-sm text-white/45">{project.domain}</p>
          <p className="mt-4 text-sm leading-7 text-white/72">{project.description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Visit Site
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Ask About It
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Ventures"
          title="A portfolio built around real use cases"
          description="Each product solves a different problem space, but they all share the same mindset: strong UX, practical value, and product-first execution."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const items = [
    {
      icon: Code2,
      title: "Build around the problem",
      description:
        "I focus on clear product value first, then shape the UI, workflows, and stack around the actual user need.",
    },
    {
      icon: Layers3,
      title: "Design for scale",
      description:
        "Every concept is approached like a living product with room for growth, iteration, and more advanced feature layers.",
    },
    {
      icon: Globe,
      title: "Make each brand distinct",
      description:
        "Even inside one portfolio, each venture gets its own voice, positioning, and audience-specific experience.",
    },
  ];

  return (
    <section id="approach" className="px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How I Build"
          title="From idea to product identity"
          description="My process blends interface design, product strategy, and full-stack thinking to turn ideas into usable digital experiences."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">About Jebarco</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white">Builder, thinker, and product creator.</h2>
          <p className="mt-5 text-base leading-8 text-white/68">
            I enjoy building software that feels practical, sharp, and useful. My work spans React interfaces,
            PHP-backed systems, product concepts, and brand-led digital experiences designed to solve real problems.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "React-driven frontends",
              "PHP and backend workflows",
              "Product positioning",
              "Scalable UI systems",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/75">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Current Direction</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-white">Creating connected products with distinct identities</h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Jebarco.com is designed to present a broader vision: not just what I build, but how each product fits into
              a larger product mindset around innovation, execution, and market-ready interfaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Founder portfolio",
                "Product showcase",
                "Creative technology",
                "Business-first software",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-6 pb-24 pt-12 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 p-8 sm:p-10 lg:p-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
            <Mail className="h-4 w-4" />
            Let’s Build Something
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Interested in one of these products or want to work together?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/68">
            Use this site as a starting point to explore my ventures, discuss product ideas, or connect around design,
            development, and execution.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@jebarco.com"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Email Jebarco
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Review Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white/45">© {new Date().getFullYear()} Jebarco. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm text-white/45">
          <a href="https://focuslottery.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">FocusLottery</a>
          <a href="https://ikalisk.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">iKalisk</a>
          <a href="https://poundmod.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">PoundMod</a>
          <a href="https://orcazoo.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Orcazoo</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#06111a] text-white">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ApproachSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
