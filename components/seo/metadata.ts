import type { Metadata } from "next"

interface MetaInput {
  title?: string
  description?: string
  image?: string
}

export function generateMetadata({ title, description, image }: MetaInput = {}): Metadata {
  const meta: Metadata = {
    title,
    description,
    openGraph: image
      ? {
          images: [{ url: image }],
        }
      : undefined,
    twitter: image
      ? {
          card: "summary_large_image",
          images: [image],
        }
      : undefined,
  }
  return meta
}
