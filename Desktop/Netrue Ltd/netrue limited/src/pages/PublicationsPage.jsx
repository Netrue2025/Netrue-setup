import { Download, FileText } from "lucide-react";
import Button from "../components/Button";
import Meta from "../components/Meta";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { useContent } from "../context/ContentContext";

function PublicationsPage() {
  const { publications } = useContent();

  return (
    <>
      <Meta description="Download Netrue Limited research papers, white papers, and case studies." title="Publications" />

      <PageHero
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Research lens</p>
              <p className="mt-3 text-sm leading-7 text-white/80">Applied writing on AI systems, connected devices, and practical digital transformation.</p>
            </div>
          </div>
        }
        description="White papers, research notes, and case studies designed to support product strategy and delivery conversations."
        eyebrow="Publications"
        primaryAction={{ label: "Contact Netrue", to: "/contact" }}
        secondaryAction={{ label: "About Netrue", to: "/about" }}
        title="Research and case-study content that makes complex systems easier to act on."
      />

      <section className="page-section">
        <div className="shell-container">
          <SectionHeading eyebrow="Library" title="Available publications" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {publications.map((item) => (
              <article className="surface-card p-8" key={item.id}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">{item.publishedOn || "Draft"}</span>
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{item.authors?.join(", ") || "Netrue"}</span>
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <div className="rounded-2xl bg-brand-light p-3 text-brand-green">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  {item.documentUrl ? (
                    <Button href={item.documentUrl} target="_blank" variant="outline">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                  ) : (
                    <Button to="/contact" variant="outline">
                      Request publication
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PublicationsPage;
