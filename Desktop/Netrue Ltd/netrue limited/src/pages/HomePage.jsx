import { ArrowRight, BarChart3, Cpu, Leaf, RadioTower, ShieldCheck } from "lucide-react";
import Button from "../components/Button";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import { useContent } from "../context/ContentContext";

const capabilityCards = [
  {
    title: "AI systems",
    description: "Operational AI products, copilots, analytics pipelines, and model-driven business workflows.",
    icon: Cpu
  },
  {
    title: "IoT automation",
    description: "Connected device ecosystems, monitoring dashboards, edge telemetry, and control systems.",
    icon: RadioTower
  },
  {
    title: "Agritech innovation",
    description: "Smart farm tools, incubation systems, crop intelligence, and field management platforms.",
    icon: Leaf
  },
  {
    title: "Software delivery",
    description: "Web apps, SaaS products, admin dashboards, and robust internal business systems.",
    icon: BarChart3
  }
];

function HomePage() {
  const { products, projects, software, dashboardStats } = useContent();
  const featuredProducts = [...products.slice(0, 2), ...software.slice(0, 1)];

  return (
    <>
      <Meta
        description="Netrue Limited builds AI systems, IoT automation, agritech products, and business software."
        title="Home"
      />

      <section className="page-section pb-10 pt-10">
        <div className="shell-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_420px] lg:items-stretch">
            <div className="hero-panel px-6 py-10 sm:px-10 sm:py-14">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                Netrue Limited
              </span>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Building intelligent platforms for the next wave of business and agriculture.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                We combine AI, IoT, agritech expertise, and modern software engineering to launch scalable products, operational dashboards, and digital services.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/solutions" variant="primary">
                  Explore solutions
                </Button>
                <Button className="border-white/20 bg-white/10 text-white hover:bg-white/20" to="/products" variant="outline">
                  Browse products
                </Button>
              </div>
              <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-semibold text-white">{dashboardStats.totalProducts}+</p>
                  <p className="mt-2 text-sm text-white/70">Productized solutions</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">{dashboardStats.totalProjects}+</p>
                  <p className="mt-2 text-sm text-white/70">Projects and pilots</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">$ {dashboardStats.revenueSummary}</p>
                  <p className="mt-2 text-sm text-white/70">Mock digital revenue</p>
                </div>
              </div>
            </div>

            <div className="surface-card grid gap-5 p-6">
              <div className="rounded-[1.75rem] bg-brand-light p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Positioning</p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950">A full-stack innovation partner.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  From intelligent dashboards to connected hardware, Netrue ships solutions that blend software, data, and real-world operations.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                  <ShieldCheck className="h-8 w-8 text-brand-red" />
                  <p className="mt-4 text-lg font-semibold">Production-minded</p>
                  <p className="mt-2 text-sm text-white/70">Secure, measurable, and built for teams that need reliability.</p>
                </div>
                <div className="rounded-[1.5rem] bg-brand-red p-5 text-white">
                  <ArrowRight className="h-8 w-8" />
                  <p className="mt-4 text-lg font-semibold">Execution-focused</p>
                  <p className="mt-2 text-sm text-white/80">Strategy, design, engineering, and admin workflows all in one delivery stream.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell-container">
          <SectionHeading
            description="Netrue operates across four connected capabilities so clients can move from concept to adoption without fragmented vendors."
            eyebrow="Capabilities"
            title="What we build and operate"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilityCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="surface-card p-6" key={card.title}>
                  <div className="inline-flex rounded-2xl bg-brand-green/10 p-3 text-brand-green">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              description="Featured hardware and digital products available across agritech, IoT, AI, and software."
              eyebrow="Products"
              title="Featured solutions"
            />
            <Button to="/products" variant="outline">
              View all products
            </Button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProducts.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="surface-card p-8">
              <SectionHeading
                description="Recent delivery work spans AI copilots, agritech platforms, and intelligent business systems."
                eyebrow="Projects"
                title="Recent project momentum"
              />
              <div className="mt-8 grid gap-5">
                {projects.map((project) => (
                  <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6" key={project.id}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                      <span className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">{project.stage}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
                    <p className="mt-4 text-sm font-medium text-slate-700">{project.outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card bg-slate-950 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Why teams choose Netrue</p>
              <ul className="mt-6 space-y-5 text-sm leading-7 text-white/75">
                <li>Cross-functional expertise from embedded systems through SaaS dashboards.</li>
                <li>Delivery patterns ready for startups, NGOs, enterprises, and innovation labs.</li>
                <li>Admin-first architecture so content, catalog items, and publications stay easy to manage.</li>
              </ul>
              <Button className="mt-8 w-full" to="/contact" variant="primary">
                Book a strategy session
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
