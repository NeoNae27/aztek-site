import { useTranslation } from "react-i18next";
import { Hero } from "@templates";
import { Helmet } from "react-helmet";
import { Footer, TextContainer } from "@layouts";
import heroImage from "@assets/about-hero-img.jpg";

const CompanyPage = () => {
  const { t } = useTranslation(["companyPage"]);
  const paragraphs = t("aboutText", { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>AZTEK - Company</title>
        <meta name="description" content="Powering Industry Since 2004" />
        <meta
          name="keywords"
          content="company, services, about us, SOCAR, BP, ITV, Technip Energies, Pasha Holding, Certificates, Lukoil, projects, building, Azerbaijan, maintenance, ventilation, painting, reconstruction, B2B, Manpower supply, Engineering"
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
            url: "https://aztek.com/company",
            logo: "https://aztek.com/public/aztek-logo.svg",
            sameAs: ["https://www.linkedin.com/company/aztek-mmc/"],
          })}
        </script>
      </Helmet>
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

export default CompanyPage;
