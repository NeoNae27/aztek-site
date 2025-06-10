import { lazy, Suspense } from "react";
import { Hero } from "@templates";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Footer } from "@layouts";
import heroImage from "@assets/portfolio-hero-img.webp";

const DocsGallery = lazy(() =>
  import("../layouts/Gallery/DocsGallery/DocsGallery.jsx")
);

const CertificatesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        backgroundImage={heroImage}
        title={"Certificate And Letters"}
        subtitle={t("projects.subtitle")}
      />
      <Suspense
        fallback={<div className="caption1 lazyload">Loading Gallery...</div>}
      >
        <DocsGallery title="Certificate" subtitle="Our certificate and licence" />
      </Suspense>
      <Footer />
    </>
  );
};

export default CertificatesPage;
