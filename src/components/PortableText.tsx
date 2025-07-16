import { PortableText as PortableTextComponent, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative my-6 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={urlFor(value).width(800).fit('max').auto('format').url()}
            width={800}
            height={400}
            alt={value.alt || 'Blog post image'}
            className="w-full h-auto object-cover"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-primary underline hover:text-accent">
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-6 font-headline text-accent">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-5 font-headline text-accent">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-4 font-headline text-accent">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold my-3 font-headline text-accent">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-primary bg-secondary/20 p-4 my-6 italic text-muted-foreground rounded-r-lg">{children}</blockquote>,
    normal: ({ children }) => <p className="text-lg text-foreground/90 mb-6 leading-relaxed">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside my-6 space-y-2 text-lg text-foreground/90">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside my-6 space-y-2 text-lg text-foreground/90">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

export const PortableText = ({ value }: { value: any[] }) => {
  return <PortableTextComponent value={value} components={components} />;
};
