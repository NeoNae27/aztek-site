import Hero from "../templates/Hero/Hero.jsx";
import Gallery from "../layouts/Gallery/Gallery.jsx";
import heroImage from "/src/assets/portfolio-hero-img.png";

const PortfolioPage = () => {
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
