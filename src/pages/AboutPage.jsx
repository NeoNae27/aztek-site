import { useTranslation } from "react-i18next";
import { Hero } from "@templates";
import { Footer, TextContainer} from "@layouts";
import heroImage from "@assets/about-hero-img.jpg";

const AboutPage = () => {
  const { t } = useTranslation(["company"]);
  const paragraphs = t("aboutText", { returnObjects: true });
  console.log(paragraphs);

  return (
    <>
      <Hero
        backgroundImage={heroImage}
        title={"Company Profile"}
        subtitle={t("aboutBanner.subtitle")}
      />
      <TextContainer paragraphs={paragraphs} />

      <Footer />
    </>
  );
};

export default AboutPage;
