import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '' }) {
  const siteName = "Project Alphono 34";
  const baseUrl = "https://alphono34.netlify.app"; // Placeholder URL
  const url = `${baseUrl}${path}`;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDesc = description || "A critical research endeavor investigating the deep structural vulnerabilities, dependencies, and socio-economic realities of Gujarat's industrial economy.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
    </Helmet>
  );
}
