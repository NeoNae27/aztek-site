import { lazy, Suspense } from "react";
import { Hero } from "@templates";
import { useTranslation } from "react-i18next";
// import { DocsCard } from "@components";
import { Footer, Services, DocsGallery } from "@layouts";
import heroImage from "@assets/portfolio-hero-img.webp";

// TODO: FIX
// import docs from "../../public/aztek-docs.json";

const Gallery = lazy(() => import(`../layouts/Gallery/Gallery.jsx`));

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        backgroundImage={heroImage}
        title={"Portfolio"}
        subtitle={"See our works"}
      />
      <Suspense
        fallback={<div className="caption1 lazyload">Loading Gallery...</div>}
      >
        <Gallery />
      </Suspense>
      <Suspense
        fallback={<div className="caption1 lazyload">Loading Gallery...</div>}
      >
        <DocsGallery />
      </Suspense>
      <Footer />
    </>
  );
};

export default PortfolioPage;
