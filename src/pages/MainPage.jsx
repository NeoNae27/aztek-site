import { lazy, Suspense } from "react";

import { Hero } from "@templates";
import { About, Projects, Contacts, Footer } from "@layouts";
import { useTranslation } from "react-i18next";
import heroImage from "@assets/main-pic.jpg";

const Services = lazy(() => import(`../layouts/Services/Service.jsx`));

const MainPage = () => {
  const { t } = useTranslation("mainPage");

  return (
    <>
      <Hero
        backgroundImage={heroImage}
        title={"Where Engineering Meets Enterprise"}
        subtitle={t("mainBanner.subtitle")}
        buttonText={t("mainBanner.button")}
      />
      <About />
      <Suspense
        fallback={<div className="caption1 lazyload">Loading Gallery...</div>}
      >
        <Services />
      </Suspense>
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default MainPage;
