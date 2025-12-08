import type { Image, Slug } from "@sanity/types";
import type { PortableTextBlock } from "@portabletext/types";

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: Slug;
  mainImage?: Image;
  publishedAt: string;
  body: PortableTextBlock[]; 
  excerpt?: string;
  category?: string;
  author?: {
    name: string;
    image?: Image;
  };
}
