import { lazy, Suspense } from "react";
import { Hero } from "@templates";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Footer } from "@layouts";

import heroImage from "@assets/certificates-page-img.jpg";
import docsData from "./../../public/aztek-docs.json";

const DocsGallery = lazy(() =>
  import("../layouts/Gallery/DocsGallery/DocsGallery.jsx")
);

const CertificatesPage = () => {
  const { t } = useTranslation(["certificatesPage"]);

  return (
    <>
      <Helmet>
        <title>AZTEK - Certificates</title>
        <meta
          name="description"
          content="Nailiyyətlərimiz haqqında daha çox məlumat əldə edin"
        />
        <meta
          name="description"
          content="Find out more about our achievements"
        />
        <meta
          name="keywords"
          content="company, QHSE, Keyfiyyət, Səhiyyə, Təhlükəsizlik, Ətraf Mühit, STP, Alfa/Zeman Celik, ABB, ISO 9001,  OHSAS 18001 , services, about us, SOCAR, BP, ITV, Technip Energies, Pasha Holding, Certificates, Lukoil, projects, building, Azerbaijan, maintenance, ventilation, painting, reconstruction, B2B, Manpower supply, Engineering"
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
            url: "https://aztek.com/portfolio",
            logo: "https://aztek.com/public/aztek-logo.svg",
            sameAs: ["https://www.linkedin.com/company/aztek-mmc/"],
          })}
        </script>
      </Helmet>
      <Hero
        backgroundImage={heroImage}
        title={"Certificates And Letters"}
        subtitle={t("certificatesBanner.subtitle")}
      />
      <Suspense
        fallback={<div className="caption1 lazyload">Loading Gallery...</div>}
      >
        <DocsGallery
          title="Certificates"
          subtitle="Our certificates and licenses"
          docs={docsData.certificates}
        />
        <DocsGallery
          title="Letters"
          subtitle="Our recommendation letters"
          docs={docsData.letters}
        />
      </Suspense>
      <Footer />
    </>
  );
};

export default CertificatesPage;
