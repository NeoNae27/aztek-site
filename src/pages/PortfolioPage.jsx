import { Hero } from "@templates";
import { Gallery } from "@layouts";
import { useTranslation } from "react-i18next";
import heroImage from "@assets/portfolio-hero-img.png";

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        backgroundImage={heroImage}
        title={"Portfolio"}
        subtitle={"See our works"}
      />
      <Gallery />
    </>
  );
};

export default PortfolioPage;