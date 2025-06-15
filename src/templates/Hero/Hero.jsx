import "./Hero.scss";
import { Header, Banner } from "@layouts";

const Hero = ({ backgroundImage, title, subtitle, buttonText, buttonHref }) => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <Banner
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
        buttonHref={buttonHref}
      />
    </div>
  );
};

export default Hero;
