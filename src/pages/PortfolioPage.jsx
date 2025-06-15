import { lazy, Suspense } from "react";
import { Hero } from "@templates";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Footer, DocsGallery } from "@layouts";
import heroImage from "@assets/portfolio-hero-img.jpg";

const Gallery = lazy(() => import(`../layouts/Gallery/Gallery.jsx`));

const PortfolioPage = () => {
  const { t } = useTranslation(["projectsLayout"]);

  return (
    <>
      <Helmet>
        <title>AZTEK - Portfolio</title>
        <meta
          name="description"
          content="We provide a wide range of services. From small to fundamental works"
        />
        <meta
          name="keywords"
          content="company, services, about us, SOCAR, BP, ITV, Technip Energies, Pasha Holding, Certificates, Lukoil, projects, building, Azerbaijan, maintenance, ventilation, painting, reconstruction, B2B, Manpower supply, Engineering"
        />
        <meta
          property="og:image"
          content="https://aztek.com/public/aztek-logo.svg"
        />
        <meta property="og:url" content="https://aztek.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://aztek.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AZTEK",
            url: "https://aztek.com/portfolio",
            logo: "https://aztek.com/public/aztek-logo.svg",
            sameAs: ["https://www.linkedin.com/company/aztek-mmc/"],
          })}
        </script>
      </Helmet>
      <Hero
        backgroundImage={heroImage}
        title={"Portfolio"}
        subtitle={t("projects.subtitle")}
      />
      <Suspense
        fallback={<div className="caption1 lazyload">Loading Gallery...</div>}
      >
        <Gallery />
      </Suspense>
      <Footer />
    </>
  );
};

export default PortfolioPage;
