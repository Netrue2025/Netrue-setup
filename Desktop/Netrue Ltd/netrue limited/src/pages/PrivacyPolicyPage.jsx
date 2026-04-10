import Meta from "../components/Meta";
import PageHero from "../components/PageHero";

const sections = [
  {
    title: "Information we collect",
    body: "We may collect contact information, inquiry details, and operational usage data needed to provide our services and respond to requests."
  },
  {
    title: "How we use information",
    body: "Information is used to communicate with prospects, improve our services, manage client work, and support platform administration."
  },
  {
    title: "Data storage",
    body: "This demo application currently stores admin-managed content locally in the browser. Production deployments should use managed infrastructure with appropriate backups and access controls."
  },
  {
    title: "Your rights",
    body: "You may request access, correction, or deletion of personal information submitted through Netrue channels, subject to applicable laws."
  }
];

function PrivacyPolicyPage() {
  return (
    <>
      <Meta description="Read the Netrue Limited privacy policy template." title="Privacy Policy" />

      <PageHero
        aside={<p className="text-sm leading-7 text-white/80">This is a clean policy template you can extend with jurisdiction-specific legal review.</p>}
        description="A practical privacy policy template for the Netrue Limited website and admin system."
        eyebrow="Legal"
        primaryAction={{ label: "Contact us", to: "/contact" }}
        secondaryAction={{ label: "Back home", to: "/" }}
        title="Privacy policy"
      />

      <section className="page-section">
        <div className="shell-container">
          <div className="surface-card p-8">
            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-semibold text-slate-950">{section.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicyPage;
