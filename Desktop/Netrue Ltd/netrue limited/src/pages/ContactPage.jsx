import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import Meta from "../components/Meta";
import PageHero from "../components/PageHero";

const initialState = {
  name: "",
  email: "",
  message: ""
};

function ContactPage() {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Message captured. Wire this form to your email or backend service when ready.");
    setFormState(initialState);
  }

  return (
    <>
      <Meta description="Contact Netrue Limited for AI, IoT, agritech, and software development projects." title="Contact Us" />

      <PageHero
        aside={
          <div className="space-y-4 text-sm text-white/80">
            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="font-semibold uppercase tracking-[0.2em] text-white/70">Email ready</p>
              <p className="mt-3 leading-7">The UI is production-ready and can be connected to Node.js, Firebase, or any email service next.</p>
            </div>
          </div>
        }
        description="Tell us what you're building, where your systems are stuck, or what kind of product support your team needs."
        eyebrow="Contact"
        primaryAction={{ label: "View solutions", to: "/solutions" }}
        secondaryAction={{ label: "Browse services", to: "/solutions" }}
        title="Start a conversation with the Netrue team."
      />

      <section className="page-section">
        <div className="shell-container grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div className="surface-card p-8">
            <h2 className="font-display text-2xl font-semibold text-slate-950">Contact details</h2>
            <div className="mt-6 space-y-5 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-red" />
                <a href="mailto:hello@netrue.com">hello@netrue.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-red" />
                <a href="tel:+2348000000000">+234 800 000 0000</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-red" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <form className="surface-card p-8" onSubmit={handleSubmit}>
            <h2 className="font-display text-2xl font-semibold text-slate-950">Send a message</h2>
            <div className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-brand-green"
                  onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                  required
                  type="text"
                  value={formState.name}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-brand-green"
                  onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                  required
                  type="email"
                  value={formState.email}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Message
                <textarea
                  className="min-h-40 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-green"
                  onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                  required
                  value={formState.message}
                />
              </label>
              {status ? <p className="rounded-2xl bg-brand-green/10 px-4 py-3 text-sm text-brand-green">{status}</p> : null}
              <Button className="w-full sm:w-auto" type="submit" variant="primary">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
