function EmptyState({ title, description }) {
  return (
    <div className="surface-card flex min-h-56 flex-col items-center justify-center px-6 py-10 text-center">
      <div className="mb-4 h-12 w-12 rounded-2xl bg-brand-green/10" />
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 max-w-md text-sm text-slate-600">{description}</p>
    </div>
  );
}

export default EmptyState;
