function LoadingState({ label = "Loading..." }) {
  return (
    <div className="surface-card flex min-h-40 items-center justify-center px-6 py-10">
      <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
        <span className="h-3 w-3 animate-pulse rounded-full bg-brand-red" />
        {label}
      </div>
    </div>
  );
}

export default LoadingState;
