const API_BASE = "https://cionixinnovations.com/api/blog.php";

export interface ApiBlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  sector: string;
  sector_label: string;
  author: string;
  author_image: string | null;
  read_time: string | null;
  image: string | null;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogPostFormData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  sector: string;
  sector_label: string;
  author: string;
  author_image: string;
  read_time: string;
  image: string;
  featured: boolean;
  published: boolean;
}

// Fetch all posts (optionally filter by sector, published only)
export const fetchBlogPosts = async (options?: {
  sector?: string;
  publishedOnly?: boolean;
}): Promise<ApiBlogPost[]> => {
  const params = new URLSearchParams();
  if (options?.sector) params.set("sector", options.sector);
  if (options?.publishedOnly) params.set("published", "1");
  const url = params.toString() ? `${API_BASE}?${params}` : API_BASE;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch blog posts");
  return res.json();
};

// Fetch single post by ID
export const fetchBlogPostById = async (id: number | string): Promise<ApiBlogPost | null> => {
  const res = await fetch(`${API_BASE}?action=single&id=${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog post");
  const data = await res.json();
  return data || null;
};

// Fetch single post by slug (client-side filter)
export const fetchBlogPostBySlug = async (slug: string, sector?: string): Promise<ApiBlogPost | null> => {
  const posts = await fetchBlogPosts({ sector, publishedOnly: true });
  return posts.find((p) => p.slug === slug) || null;
};

// Create post
export const createBlogPost = async (post: BlogPostFormData): Promise<{ id: number; success: boolean }> => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...post,
      featured: post.featured ? 1 : 0,
      published: post.published ? 1 : 0,
    }),
  });
  if (!res.ok) throw new Error("Failed to create blog post");
  return res.json();
};

// Update post
export const updateBlogPost = async (id: number, post: BlogPostFormData): Promise<{ success: boolean }> => {
  const res = await fetch(API_BASE, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...post,
      id,
      featured: post.featured ? 1 : 0,
      published: post.published ? 1 : 0,
    }),
  });
  if (!res.ok) throw new Error("Failed to update blog post");
  return res.json();
};

// Delete post
export const deleteBlogPost = async (id: number): Promise<{ success: boolean }> => {
  const res = await fetch(API_BASE, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error("Failed to delete blog post");
  return res.json();
};
