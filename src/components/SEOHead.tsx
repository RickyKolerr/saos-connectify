
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

const SEOHead = ({
  title = "ORCHESITY - AI Orchestration Platform",
  description = "ORCHESITY helps you orchestrate and streamline your AI operations with powerful integration tools",
  image = "https://orchesity.com/lovable-uploads/fd113699-d245-43bc-9586-f66ba7ef4268.png",
  article = false,
}: SEOHeadProps) => {
  const { pathname } = useLocation();
  const siteUrl = "https://orchesity.com";
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;
