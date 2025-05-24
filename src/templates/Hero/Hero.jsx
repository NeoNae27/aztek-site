import "./Hero.scss";
import Header from "../../layouts/Header/Header.jsx";
import Banner from "../../layouts/Banner/Banner.jsx";

const Hero = ({ backgroundImage, title, subtitle, buttonText }) => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: {backgroundImage} }}
    >
      <Header />
      <Banner
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
      />
    </div>
  );
};

export default Hero;
