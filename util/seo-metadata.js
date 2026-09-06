const siteUrl = 'https://www.sdiotecs.com';
const socialImage = {
  url: `${siteUrl}/logo.png`,
  width: 1152,
  height: 1152,
  alt: 'SD IoTecs logo',
};

export function createPageMetadata({ title, description, path, type = 'website' }) {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      images: [socialImage],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage.url],
    },
  };
}
