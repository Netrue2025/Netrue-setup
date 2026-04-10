import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Button from "../components/Button";
import ScrollToTop from "../components/ScrollToTop";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Shop", to: "/shop" },
  { label: "Blog", to: "/blog" },
  { label: "Publications", to: "/publications" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-shell">
      <ScrollToTop />
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="shell-container flex items-center justify-between py-4">
          <Link className="flex items-center gap-3" to="/">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-green font-display text-lg font-bold text-white">N</div>
            <div>
              <p className="font-display text-lg font-semibold text-slate-950">Netrue Limited</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">AI • IoT • Agritech</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? "text-brand-green" : "text-slate-600 hover:text-brand-green"}`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/solutions" variant="outline">
              Explore solutions
            </Button>
            <Button to="/contact" variant="primary">
              Start a project
            </Button>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="shell-container flex flex-col gap-3 py-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium ${isActive ? "bg-brand-green text-white" : "bg-slate-50 text-slate-700"}`
                  }
                  onClick={() => setMobileOpen(false)}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 grid gap-3">
                <Button onClick={() => setMobileOpen(false)} to="/solutions" variant="outline">
                  Explore solutions
                </Button>
                <Button onClick={() => setMobileOpen(false)} to="/contact" variant="primary">
                  Start a project
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="shell-container grid gap-10 py-12 lg:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-slate-950">Netrue Limited</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              We design and deploy AI systems, IoT platforms, agritech products, and modern business software for ambitious teams.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Solutions</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <Link to="/solutions">AI & data intelligence</Link>
              <Link to="/solutions">IoT automation</Link>
              <Link to="/solutions">Agritech systems</Link>
              <Link to="/products">Hardware products</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Company</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <Link to="/about">About us</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/publications">Publications</Link>
              <Link to="/privacy-policy">Privacy policy</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <a href="mailto:hello@netrue.com">hello@netrue.com</a>
              <a href="tel:+2348000000000">+234 800 000 0000</a>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="mt-5">
              <Button to="/admin/login" variant="outline">
                Admin login
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
