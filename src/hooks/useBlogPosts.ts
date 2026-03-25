import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts, fetchBlogPostBySlug, type ApiBlogPost } from "@/services/blogApi";

export const useBlogPosts = (sector?: string) => {
  return useQuery({
    queryKey: ["blog-posts", sector || "all"],
    queryFn: () => fetchBlogPosts({ sector, publishedOnly: true }),
  });
};

export const useBlogPostBySlug = (slug: string, sector?: string) => {
  return useQuery({
    queryKey: ["blog-post", slug, sector],
    queryFn: () => fetchBlogPostBySlug(slug, sector),
    enabled: !!slug,
  });
};

// Helper to map API post to display format
export const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};
