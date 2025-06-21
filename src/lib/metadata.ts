import { Metadata } from "next";

// TODO: Update metadata

export function constructMetadata({
  title = "Kunal Arunkumar Singh", // TODO: Add a custom title
  description = "I am a software engineer with expertise in frontend development and a proven track record of delivering innovative solutions across the Banking, Education, and Media domains, with aspirations to create transformative tools powered by AI.", // TODO: Add a custom description
  image = "/avatar.png", // TODO: Add a custom image
  icons = "/avatar.JPG", // TODO: Add a custom icon
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@chrislonzo",
    },
    icons,
    metadataBase: new URL("https://www.chrislonzo.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
