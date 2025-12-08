import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { env } from '@/lib/env';

export const client = createClient({
  projectId: env.sanity.projectId,
  dataset: env.sanity.dataset,
  apiVersion: env.sanity.apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
