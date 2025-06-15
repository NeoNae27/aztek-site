import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import heroImage from "@assets/main-pic.jpg";
import { Hero } from "@templates";
import { About, Contacts, Footer } from "@layouts";

const Services = lazy(() => import(`../layouts/Services/Service.jsx`));
const Projects = lazy(() => import(`../layouts/Projects/Projects.jsx`));

const MainPage = () => {
  const { t } = useTranslation("mainPage");

  return (
    <>
      <Helmet>
        <title>AZTEK - Main Page</title>
        <meta
          name="description"
          content="Where Engineering Meets Enterprise. Powering Industry Since 2004"
        />
        <meta
          name="keywords"
          content="company, about us, projects, building, Azerbaijan, maintenance, ventilation, painting, reconstruction, B2B, Manpower supply, Engineering"
        />
        <meta
          property="og:image"
          content="https://aztek.com/public/aztek-logo.svg"
        />
        <meta property="og:url" content="https://aztek.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://aztek.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AZTEK",
            url: "https://aztek.com",
            logo: "https://aztek.com/public/aztek-logo.svg",
            sameAs: ["https://www.linkedin.com/company/aztek-mmc/"],
          })}
        </script>
      </Helmet>
      <Hero
        backgroundImage={heroImage}
        title={"Where Engineering Meets Enterprise"}
        subtitle={t("mainBanner.subtitle")}
        buttonText={t("mainBanner.button")}
        buttonHref="/portfolio"
      />
      <About />
      <Suspense
        fallback={<div className="caption1 lazyload">Loading Gallery...</div>}
      >
        <Services />
      </Suspense>
      <Suspense
        fallback={<div className="caption1 lazyload">Loading Projects...</div>}
      >
        <Projects />
      </Suspense>
      <Contacts />
      <Footer />
    </>
  );
};

export default MainPage;
