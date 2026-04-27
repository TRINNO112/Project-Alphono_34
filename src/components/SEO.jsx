import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '', keywords }) {
  const siteName = "Project Alphono 34 — Anatomy of a Dependent State";
  const baseUrl = "https://alphono34.netlify.app";
  const url = `${baseUrl}${path}`;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDesc = description || "Anatomy of a Dependent State — a thirteen-pillar critical investigation into Gujarat's structural vulnerabilities, migrant worker discrimination, linguistic exclusion of Hindi speakers, and the gap between the published image of the state and the experience of non-Gujaratis who live in it.";
  const metaKeywords = keywords || "Gujarat discrimination, Hindi speakers in Gujarat, non-Gujarati experience, migrant workers Gujarat, linguistic discrimination India, Hindira slur, Surat migrant labor, Ahmedabad discrimination, Gujarat industrial dependencies, structural vulnerabilities Gujarat";

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Project Alphono 34" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
    </Helmet>
  );
}
