import { Hero } from "@templates";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Footer, Services, ServicesDesc } from "@layouts";
import heroImage from "@assets/services-img.jpg";

const ServicesPage = () => {
  const { t } = useTranslation(["servicesLayout"]);

  return (
    <>
      <Helmet>
        <title>AZTEK - Main Page</title>
        <meta
          name="description"
          content="We provide a wide range of services. From small to fundamental works"
        />
        <meta
          name="keywords"
          content="company, services, about us, projects, building, Azerbaijan, maintenance, ventilation, painting, reconstruction, B2B, Manpower supply, Engineering"
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
            url: "https://aztek.com/services",
            logo: "https://aztek.com/public/aztek-logo.svg",
            sameAs: ["https://www.linkedin.com/company/aztek-mmc/"],
          })}
        </script>
      </Helmet>
      <Hero
        backgroundImage={heroImage}
        title="Our Services"
        subtitle={t("services.subtitle")}
      />
      <ServicesDesc />

      <Footer />
    </>
  );
};

export default ServicesPage;
