import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import BlogList from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos y consejos sobre seguros de decesos, vida, mascotas y protección familiar. Información clara y útil para proteger a tu familia.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Artículos y consejos para ayudarte a tomar las mejores decisiones sobre la protección de tu familia."
      />

      <SectionWrapper background="white">
        <BlogList posts={posts} />
      </SectionWrapper>
    </>
  );
}