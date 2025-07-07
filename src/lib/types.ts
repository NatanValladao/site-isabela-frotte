import type { Image, Slug } from "@sanity/types";

export interface Post {
  _id: string;
  _type: 'post';
  title?: string;
  slug?: Slug;
  mainImage?: Image;
  publishedAt?: string;
  body?: any[]; // This is the Portable Text field
  excerpt?: string;
  category?: string;
}
