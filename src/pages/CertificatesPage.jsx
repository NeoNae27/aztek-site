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
