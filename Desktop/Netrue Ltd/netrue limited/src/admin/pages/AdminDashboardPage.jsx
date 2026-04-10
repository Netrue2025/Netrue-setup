import { DollarSign, Newspaper, Package, ShoppingBag, Users } from "lucide-react";
import DashboardStatCard from "../components/DashboardStatCard";
import { useContent } from "../../context/ContentContext";

function AdminDashboardPage() {
  const { blogPosts, dashboardStats, products, projects, publications, shopItems, software } = useContent();

  return (
    <div className="grid gap-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Dashboard overview</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-slate-950">Everything in one place</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          This admin workspace manages every public-facing content stream on the site using a localStorage-backed mock CMS ready for Firebase or Node.js later.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard description="Connected devices and solution SKUs currently available." label="Products" value={dashboardStats.totalProducts} />
        <DashboardStatCard description="Project case studies and delivery initiatives tracked." label="Projects" value={dashboardStats.totalProjects} />
        <DashboardStatCard description="Manual editorial entries available on the public blog." label="Blog posts" value={dashboardStats.totalBlogPosts} />
        <DashboardStatCard description="Mock revenue summary from paid software and digital products." label="Revenue" value={`$${dashboardStats.revenueSummary}`} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-950">Recent content snapshot</h2>
          <div className="mt-8 grid gap-4">
            {[...products.slice(0, 2), ...projects.slice(0, 1), ...blogPosts.slice(0, 1)].map((item) => (
              <article className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5" key={item.id}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.category || item.stage || "Content"}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description || item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-brand-red" />
              <p className="font-semibold">Monetization summary</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/75">
              {software.filter((item) => item.pricingModel === "Paid").length} paid software items and{" "}
              {shopItems.filter((item) => item.pricingModel === "Paid").length} paid shop items are currently contributing to the mock revenue total.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2"><Package className="h-4 w-4 text-brand-red" /> Publications</span>
                <span className="font-semibold text-slate-950">{publications.length}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2"><ShoppingBag className="h-4 w-4 text-brand-red" /> Shop items</span>
                <span className="font-semibold text-slate-950">{shopItems.length}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2"><Newspaper className="h-4 w-4 text-brand-red" /> Software listings</span>
                <span className="font-semibold text-slate-950">{software.length}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-brand-red" /> Team members</span>
                <span className="font-semibold text-slate-950">{dashboardStats.totalTeamMembers}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboardPage;
