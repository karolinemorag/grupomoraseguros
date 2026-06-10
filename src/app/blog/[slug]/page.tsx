import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/shared/ContactForm";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${new Date(post.date).toLocaleDateString("es-ES", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })} · ${post.readTime}`}
      />

      <SectionWrapper background="white">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-dark"
            aria-label="Volver al blog"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al blog
          </Link>

          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy prose-p:text-gray-dark/80 prose-li:text-gray-dark/80 prose-strong:text-navy"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </SectionWrapper>

      <SectionWrapper background="light">
        <ContactForm title="¿Te ha surgido alguna duda?" subtitle="Estaremos encantados de ayudarte. Déjanos tus datos y te contactamos." />
      </SectionWrapper>
    </>
  );
}