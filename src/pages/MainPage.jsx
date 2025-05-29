import { Hero } from "@templates";
import { About, Services, Projects, Contacts, Footer } from "@layouts";
import { useTranslation } from "react-i18next";
import heroImage from "@assets/hero-pic.webp";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        backgroundImage={heroImage}
        title={"Where Engineering Meets Enterprise"}
        subtitle={t("mainBanner.subtitle")}
        buttonText={t("mainBanner.button")}
      />
      <About />
      <Services />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default MainPage;
