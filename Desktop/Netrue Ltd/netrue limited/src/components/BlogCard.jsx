import Badge from "./Badge";

function formatDate(value) {
  if (!value) {
    return "Coming soon";
  }

  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function BlogCard({ post, source = "Editorial" }) {
  return (
    <article className="surface-card overflow-hidden">
      <div className="h-52 bg-brand-green">
        {post.image || post.coverImage ? (
          <img alt={post.title} className="h-full w-full object-cover" src={post.image || post.coverImage} />
        ) : (
          <div className="grid h-full place-items-center bg-gradient-to-br from-brand-green to-brand-red/80">
            <span className="font-display text-2xl font-semibold text-white">Netrue Insights</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="green">{source}</Badge>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{formatDate(post.publishedAt)}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-950">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
          <span>{post.author || post.readTime || "Netrue Team"}</span>
          {post.link ? (
            <a className="font-semibold text-brand-green" href={post.link} rel="noreferrer" target="_blank">
              Read article
            </a>
          ) : (
            <span className="font-semibold text-brand-green">{post.readTime || "Internal article"}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
