import { useState } from "react";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";
import Meta from "../components/Meta";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import { useContent } from "../context/ContentContext";

const filters = ["All", "Free", "Paid"];

function ShopPage() {
  const { shopItems, software } = useContent();
  const [activeFilter, setActiveFilter] = useState("All");

  const filterItems = (items) =>
    activeFilter === "All" ? items : items.filter((item) => item.pricingModel === activeFilter);

  const filteredShopItems = filterItems(shopItems);
  const filteredSoftware = filterItems(software);

  return (
    <>
      <Meta description="Browse Netrue Limited digital products, software, templates, workshops, and downloadable tools." title="Shop" />

      <PageHero
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Digital commerce</p>
              <p className="mt-3 text-sm leading-7 text-white/80">Structured for free and paid product launches with room for future payment integration.</p>
            </div>
          </div>
        }
        description="A curated storefront for software, courses, templates, and practical tools built by the Netrue team."
        eyebrow="Shop"
        primaryAction={{ label: "Contact sales", to: "/contact" }}
        secondaryAction={{ label: "Read publications", to: "/publications" }}
        title="Digital products ready for teams that need to move faster."
      />

      <section className="page-section">
        <div className="shell-container">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Button
                className={activeFilter === filter ? "bg-brand-green text-white hover:bg-brand-green" : ""}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "secondary" : "outline"}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="mt-10">
            <SectionHeading
              description="Courses, downloads, and digital offers designed to support implementation and training."
              eyebrow="Storefront"
              title="Shop catalog"
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {filteredShopItems.length ? (
                filteredShopItems.map((item) => <ProductCard ctaLabel="Request access" item={item} key={item.id} />)
              ) : (
                <div className="lg:col-span-2">
                  <EmptyState description="No shop items match the active pricing filter." title="Nothing here yet" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading
              description="Software products and bundles that support analytics, operations, and product delivery."
              eyebrow="Software"
              title="Software listings"
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {filteredSoftware.length ? (
                filteredSoftware.map((item) => <ProductCard ctaLabel="See offer" item={item} key={item.id} />)
              ) : (
                <div className="lg:col-span-2">
                  <EmptyState description="No software listings match the active pricing filter." title="No software found" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopPage;
