import { Compass, Eye, Target } from "lucide-react";
import Meta from "../components/Meta";
import EmptyState from "../components/EmptyState";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import TeamMemberCard from "../components/TeamMemberCard";
import { useContent } from "../context/ContentContext";

const principles = [
  {
    title: "Mission",
    description: "To build practical technology systems that help organizations work smarter and operate with more confidence.",
    icon: Target
  },
  {
    title: "Vision",
    description: "To become a trusted African technology company shaping the future of AI, IoT, agritech, and digital products.",
    icon: Eye
  },
  {
    title: "What Netrue does",
    description: "We architect and deliver web apps, dashboards, SaaS systems, connected devices, and intelligence-ready platforms.",
    icon: Compass
  }
];

function AboutPage() {
  const { teamMembers } = useContent();

  return (
    <>
      <Meta description="Learn about Netrue Limited's mission, vision, team, and full-stack technology practice." title="About Us" />

      <PageHero
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Company focus</p>
              <p className="mt-3 text-sm leading-7 text-white/80">AI, IoT, agritech, research, and modern software delivery for organizations ready to scale.</p>
            </div>
          </div>
        }
        description="Netrue Limited is a technology company focused on practical innovation across artificial intelligence, connected systems, and custom software."
        eyebrow="About us"
        primaryAction={{ label: "Contact us", to: "/contact" }}
        secondaryAction={{ label: "Read publications", to: "/publications" }}
        title="We turn ambitious technology ideas into systems teams can actually run."
      />

      <section className="page-section">
        <div className="shell-container">
          <SectionHeading
            description="Our work combines engineering discipline with applied thinking grounded in real operating environments."
            eyebrow="Identity"
            title="What defines Netrue Limited"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <article className="surface-card p-8" key={item.title}>
                  <div className="inline-flex rounded-2xl bg-brand-green/10 p-3 text-brand-green">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="shell-container">
          <div className="surface-card grid gap-8 p-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <h2 className="font-display text-3xl font-semibold text-slate-950">How we engage</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We partner with organizations that need more than a landing page. Our work often spans architecture, UI systems, admin workflows,
                data pipelines, and operational rollout support.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Typical outcomes</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-white/75">
                <li>Faster operational reporting and visibility.</li>
                <li>Stronger digital product execution across teams.</li>
                <li>Better adoption of AI and IoT through usable systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="shell-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              description="Meet the people shaping product strategy, connected systems, and delivery across Netrue Limited."
              eyebrow="Meet Our Team"
              title="The team behind the work"
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {teamMembers.length ? (
              teamMembers.map((member) => <TeamMemberCard key={member.id} member={member} />)
            ) : (
              <div className="lg:col-span-3">
                <EmptyState
                  description="Add team profiles from the admin dashboard and they will appear here automatically."
                  title="No team members published yet"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
