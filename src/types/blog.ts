export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: "decesos" | "vida" | "mascotas" | "general";
  keywords: string[];
}