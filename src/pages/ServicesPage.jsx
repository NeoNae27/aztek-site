import { Hero } from "@templates";
import { useTranslation } from "react-i18next";
import { Footer, Services, ServicesDesc } from "@layouts";
import heroImage from "@assets/services-img.jpg";

const ServicesPage = () => {
    const { t } = useTranslation(["servicesLayout"]);
    
    return (
        <>
        <Hero
            backgroundImage={heroImage}
            title="Our Services"
            subtitle={t("service.subtitle")}
        />
        <ServicesDesc />

        <Footer />
        </>
    );
}

export default ServicesPage;