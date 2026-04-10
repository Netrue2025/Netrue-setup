import { ArrowUpRight, Cpu, Leaf, MonitorSmartphone, Wrench } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";

const iconMap = {
  Agritech: Leaf,
  AI: Cpu,
  IoT: Wrench,
  Software: MonitorSmartphone
};

function ProductCard({ item, ctaLabel = "Explore", ctaTo = "/contact", variant = "product" }) {
  const Icon = iconMap[item.category] || MonitorSmartphone;
  const tags = item.specs || item.features || item.tags || [];
  const priceLabel =
    item.pricingModel === "Paid" ? `$${Number(item.price || 0).toFixed(0)}` : item.pricingModel === "Free" ? "Free" : item.status;

  return (
    <article className="surface-card overflow-hidden">
      <div className="relative h-52 overflow-hidden bg-brand-green px-6 py-6 text-white">
        {item.image ? (
          <img alt={item.title} className="h-full w-full rounded-[1.5rem] object-cover" src={item.image} />
        ) : (
          <div className="grid h-full place-items-center rounded-[1.5rem] border border-white/10 bg-white/10">
            <Icon className="h-12 w-12" />
          </div>
        )}
        <div className="absolute left-8 top-8">
          <Badge variant="red">{item.category || item.type || item.pricingModel || "Catalog"}</Badge>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
          {priceLabel ? <span className="text-sm font-semibold text-brand-green">{priceLabel}</span> : null}
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
        {variant === "publication" ? null : (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="green">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="mt-6">
          <Button className="w-full justify-between rounded-2xl px-4" to={ctaTo} variant="outline">
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
