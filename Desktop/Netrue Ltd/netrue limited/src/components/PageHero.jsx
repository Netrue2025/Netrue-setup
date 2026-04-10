import Button from "./Button";

function PageHero({ eyebrow, title, description, primaryAction, secondaryAction, aside }) {
  return (
    <section className="page-section pt-10">
      <div className="shell-container">
        <div className="hero-panel px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/85">
                {eyebrow}
              </span>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryAction ? <Button to={primaryAction.to} variant="primary">{primaryAction.label}</Button> : null}
                {secondaryAction ? (
                  <Button className="border-white/20 bg-white/10 text-white hover:bg-white/20" to={secondaryAction.to} variant="outline">
                    {secondaryAction.label}
                  </Button>
                ) : null}
              </div>
            </div>
            <div className="relative z-10 rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur">{aside}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
