import { Bot, Building2, Cpu, Leaf, RadioTower, Workflow } from "lucide-react";
import Meta from "../components/Meta";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

const solutions = [
  {
    title: "Smart Business Systems",
    description: "Custom web apps, dashboards, admin panels, and SaaS tools that digitize operations and reporting.",
    icon: Building2
  },
  {
    title: "AI & Data Intelligence",
    description: "Copilots, computer vision workflows, analytics stacks, and decision-support systems grounded in business outcomes.",
    icon: Bot
  },
  {
    title: "IoT Automation",
    description: "Connected sensors, remote monitoring, automation logic, and telemetry-aware dashboards for device ecosystems.",
    icon: RadioTower
  },
  {
    title: "Agritech Systems",
    description: "Tools for smart incubation, crop intelligence, field operations, and data-informed agricultural workflows.",
    icon: Leaf
  }
];

function SolutionsPage() {
  return (
    <>
      <Meta
        description="Explore Netrue Limited's AI, IoT, agritech, and software solutions for modern organizations."
        title="Solutions"
      />

      <PageHero
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Delivery model</p>
              <p className="mt-3 text-sm leading-7 text-white/80">Discovery, prototype, production, and iteration under one product-engineering rhythm.</p>
            </div>
            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Core stack</p>
              <p className="mt-3 text-sm leading-7 text-white/80">React, Node.js, cloud APIs, analytics, connected hardware, and AI service integration.</p>
            </div>
          </div>
        }
        description="We architect practical systems that connect software, intelligence, and operations into one coherent delivery layer."
        eyebrow="Solutions"
        primaryAction={{ label: "Talk to our team", to: "/contact" }}
        secondaryAction={{ label: "Browse products", to: "/products" }}
        title="Modern systems for ambitious teams and real-world operations."
      />

      <section className="page-section">
        <div className="shell-container">
          <SectionHeading
            description="Each solution area can stand alone or combine into a single product roadmap."
            eyebrow="Offerings"
            title="Four pillars of Netrue delivery"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <article className="surface-card p-8" key={item.title}>
                  <div className="inline-flex rounded-2xl bg-brand-green/10 p-3 text-brand-green">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell-container grid gap-6 lg:grid-cols-3">
          <article className="surface-card p-8">
            <Workflow className="h-8 w-8 text-brand-red" />
            <h3 className="mt-6 text-xl font-semibold text-slate-950">Workflow automation</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">We replace spreadsheet-heavy operations with structured systems, approvals, alerts, and digital workflows.</p>
          </article>
          <article className="surface-card p-8">
            <Cpu className="h-8 w-8 text-brand-red" />
            <h3 className="mt-6 text-xl font-semibold text-slate-950">Data-driven intelligence</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Analytics and AI are embedded where teams act, so insight becomes part of execution instead of an afterthought.</p>
          </article>
          <article className="surface-card p-8">
            <Leaf className="h-8 w-8 text-brand-red" />
            <h3 className="mt-6 text-xl font-semibold text-slate-950">Field-ready agritech</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">We design for farms, health operations, and distributed environments where resilience and usability matter most.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default SolutionsPage;
