import { lazy, Suspense } from "react";
import { Hero } from "@templates";
import { useTranslation } from "react-i18next";
import { Footer, Services } from "@layouts";
import heroImage from "@assets/portfolio-hero-img.webp";

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
      <Services />
      <Footer />
    </>
  );
};

export default PortfolioPage;
