import BlogCard from "../components/BlogCard";
import LoadingState from "../components/LoadingState";
import Meta from "../components/Meta";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { useContent } from "../context/ContentContext";
import { useWordPressPosts } from "../hooks/useWordPressPosts";

function BlogPage() {
  const { blogPosts } = useContent();
  const { posts, isLoading, error } = useWordPressPosts(true);

  return (
    <>
      <Meta description="Read Netrue Limited's internal insights and live WordPress-powered blog feed." title="Blog" />

      <PageHero
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">WordPress sync</p>
              <p className="mt-3 text-sm leading-7 text-white/80">This page fetches live posts from a WordPress REST endpoint and blends them with local editorial entries.</p>
            </div>
          </div>
        }
        description="Product thinking, field lessons, AI implementation notes, and selected content synced from WordPress."
        eyebrow="Blog"
        primaryAction={{ label: "Talk to the team", to: "/contact" }}
        secondaryAction={{ label: "Read publications", to: "/publications" }}
        title="Insights from shipping AI, IoT, agritech, and software systems."
      />

      <section className="page-section">
        <div className="shell-container">
          <SectionHeading eyebrow="Editorial" title="Internal Netrue articles" />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} source="Netrue" />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="shell-container">
          <SectionHeading
            description="Live content fetched from the configured `/wp-json/wp/v2/posts` endpoint."
            eyebrow="WordPress Feed"
            title="Synced external posts"
          />

          <div className="mt-8">
            {isLoading ? <LoadingState label="Loading WordPress posts..." /> : null}
            {error ? <div className="surface-card px-6 py-8 text-sm text-rose-600">{error}</div> : null}
            {!isLoading && !error ? (
              <div className="grid gap-6 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} source="WordPress" />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
