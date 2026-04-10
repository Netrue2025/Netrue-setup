import { LayoutDashboard, Layers3, Library, LogOut, Newspaper, Package, ShoppingBag, Users, Workflow } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthContext";

const navigation = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", to: "/admin/products", icon: Package },
  { label: "Projects", to: "/admin/projects", icon: Workflow },
  { label: "Software", to: "/admin/software", icon: Layers3 },
  { label: "Shop", to: "/admin/shop", icon: ShoppingBag },
  { label: "Publications", to: "/admin/publications", icon: Library },
  { label: "Blog", to: "/admin/blog", icon: Newspaper },
  { label: "Team", to: "/admin/team", icon: Users }
];

function AdminLayout() {
  const { logout, user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl admin-grid">
        <aside className="rounded-[2rem] bg-slate-950 p-6 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">Secure admin</p>
            <h1 className="mt-4 font-display text-2xl font-semibold">Netrue CMS</h1>
            <p className="mt-3 text-sm leading-7 text-white/70">Manage the public site, digital catalog, publications, blog content, and team directory from one dashboard.</p>
          </div>

          <nav className="mt-8 grid gap-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? "bg-white text-slate-950" : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`
                  }
                  to={item.to}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-8 rounded-[1.5rem] bg-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Signed in as</p>
            <p className="mt-2 text-sm font-semibold">{user?.name}</p>
            <p className="text-sm text-white/65">{user?.email}</p>
          </div>

          <div className="mt-6 grid gap-3">
            <Button className="w-full justify-center" to="/" variant="outline">
              View website
            </Button>
            <Button className="w-full justify-center" onClick={logout} variant="primary">
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </div>
        </aside>

        <div className="min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
