import Hero from "../templates/Hero/Hero.jsx";
import About from "../layouts/About/About.jsx";
import Services from "../layouts/Services/Service.jsx";
import Projects from "../layouts/Projects/Projects.jsx";
import Contacts from "../layouts/Contacts/Contacts.jsx";
import Footer from "../layouts/Footer/Footer.jsx";
import { useTranslation } from "react-i18next";

const MainPage = () => {
const { t } = useTranslation();

  return (
    <>
      <Hero
        backgroundImage={"/src/assets/hero-pic.webp"}
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
