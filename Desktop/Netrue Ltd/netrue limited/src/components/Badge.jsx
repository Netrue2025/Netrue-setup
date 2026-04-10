const variantMap = {
  success: "bg-emerald-50 text-emerald-700",
  danger: "bg-rose-50 text-rose-600",
  neutral: "bg-slate-100 text-slate-700",
  green: "bg-brand-green/10 text-brand-green",
  red: "bg-brand-red/10 text-brand-red"
};

function Badge({ children, variant = "neutral" }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variantMap[variant]}`}>
      {children}
    </span>
  );
}

export default Badge;
