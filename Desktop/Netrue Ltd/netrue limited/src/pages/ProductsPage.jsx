import { useState } from "react";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";
import Meta from "../components/Meta";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import { useContent } from "../context/ContentContext";

const categories = ["All", "Agritech", "IoT", "AI", "Software"];

function ProductsPage() {
  const { products } = useContent();
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProducts = activeCategory === "All" ? products : products.filter((item) => item.category === activeCategory);

  return (
    <>
      <Meta
        description="Browse Netrue Limited's connected devices, agritech tools, and AI-enabled product catalog."
        title="Products"
      />

      <PageHero
        aside={
          <div className="space-y-4 text-sm text-white/80">
            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="font-semibold uppercase tracking-[0.2em] text-white/70">Catalog focus</p>
              <p className="mt-3 leading-7">Operational hardware, intelligent systems, and deployment-ready tooling for field and office teams.</p>
            </div>
          </div>
        }
        description="A product catalog spanning IoT devices, agritech tools, and intelligence-ready systems."
        eyebrow="Products"
        primaryAction={{ label: "Request a demo", to: "/contact" }}
        secondaryAction={{ label: "See shop", to: "/shop" }}
        title="Purpose-built technology products for connected operations."
      />

      <section className="page-section">
        <div className="shell-container">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                className={activeCategory === category ? "bg-brand-green text-white hover:bg-brand-green" : ""}
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "secondary" : "outline"}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {visibleProducts.length ? (
              visibleProducts.map((item) => <ProductCard item={item} key={item.id} />)
            ) : (
              <div className="lg:col-span-3">
                <EmptyState
                  description="No products match this filter yet. Add more from the admin dashboard to populate this view."
                  title="No matching products"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
