const WORDPRESS_BASE_URL = (import.meta.env.VITE_WORDPRESS_API_BASE || "https://wordpress.org/news").replace(
  /\/$/,
  ""
);

function stripHtml(input) {
  return input.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

export async function fetchWordPressPosts() {
  const response = await fetch(`${WORDPRESS_BASE_URL}/wp-json/wp/v2/posts?per_page=6&_embed`);

  if (!response.ok) {
    throw new Error("Unable to load WordPress posts right now.");
  }

  const data = await response.json();

  return data.map((post) => ({
    id: `wp-${post.id}`,
    title: stripHtml(post.title?.rendered || "Untitled"),
    excerpt: stripHtml(post.excerpt?.rendered || "No excerpt available."),
    publishedAt: post.date,
    link: post.link,
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    source: "WordPress"
  }));
}
