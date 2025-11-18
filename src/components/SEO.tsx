import Head from "next/head";
import React from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  url: string;
  image?: string;
}

export default function SEO({
  title,
  description,
  keywords = "Medicine Hat rideshare, MHride, taxi Medicine Hat, ride app, local rideshare Medicine Hat, Redcliff rides, Dunmore rides, Desert Blume transportation, affordable rides Medicine Hat",
  author = "MHride",
  url = 'https://mhride.ca',
}: SEOProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Local Business Schema (JSON-LD for SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Rideshare Service",
            name: "MHride",
            url: url,
            description: description,
            areaServed: [
              "Medicine Hat, AB",
              "Redcliff, AB",
              "Dunmore, AB",
              "Desert Blume, AB",
              "Alberta",
            ],
            priceRange: "$",
            sameAs: [
              "https://facebook.com/mhride",
              "https://instagram.com/mhride",
            ],
          }),
        }}
      />
    </Head>
  );
}
