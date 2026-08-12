import type { Metadata } from "next";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "pt_BR",
      images: [{ url: "/og.jpg", width: 1536, height: 1024, alt: "Acolher para escutar. Formar para transformar." }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  };
}
