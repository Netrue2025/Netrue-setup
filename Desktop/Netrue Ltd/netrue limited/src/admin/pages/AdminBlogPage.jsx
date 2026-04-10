import LoadingState from "../../components/LoadingState";
import { useWordPressPosts } from "../../hooks/useWordPressPosts";
import CollectionPage from "./CollectionPage";

function AdminBlogPage() {
  const { posts, isLoading, error } = useWordPressPosts(true);

  const topContent = (
    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Optional sync mode</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        WordPress sync is active for preview. This dashboard manages local posts manually while the public blog also fetches live remote content.
      </p>
      <div className="mt-5">
        {isLoading ? <LoadingState label="Checking WordPress feed..." /> : null}
        {error ? <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-600">{error}</p> : null}
        {!isLoading && !error ? (
          <div className="grid gap-3 md:grid-cols-2">
            {posts.slice(0, 4).map((post) => (
              <div className="rounded-2xl border border-slate-200 bg-white p-4" key={post.id}>
                <p className="text-sm font-semibold text-slate-950">{post.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                  {new Date(post.publishedAt).toLocaleDateString("en-US")}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );

  return <CollectionPage collectionKey="blogPosts" topContent={topContent} />;
}

export default AdminBlogPage;
