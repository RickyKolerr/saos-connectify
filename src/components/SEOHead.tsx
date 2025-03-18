
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead = ({
  title = "ORCHESITY - AI Orchestration Platform",
  description = "We are introducing Orchesity - A Smart AI Orchestration System Powered by Kolerr Technologies & KravenB.",
  image = "/lovable-uploads/7a969d60-8b7e-430a-a955-dcf819a3db6f.png",
  article = false,
  keywords = "AI orchestration, AI operations, artificial intelligence, orchestration platform, AI integration, AI tools",
  author = "ORCHESITY",
  publishedTime,
  modifiedTime,
}: SEOHeadProps) => {
  const { pathname } = useLocation();
  const siteUrl = "https://orchesity.com";
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ORCHESITY" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:creator" content="@orchesity" />

      {/* Article specific metadata */}
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      
      {/* Additional structured data for search engines */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": article ? "Article" : "WebSite",
          "name": title,
          "description": description,
          "url": canonical,
          ...(article ? {
            "headline": title,
            "image": image,
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "ORCHESITY",
              "logo": {
                "@type": "ImageObject",
                "url": "https://orchesity.com/lovable-uploads/f8bf36fe-cc6d-44ce-9063-bf0eedd072cb.png"
              }
            }
          } : {
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://orchesity.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
