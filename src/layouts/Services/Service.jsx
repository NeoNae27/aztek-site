import { SectionArticle, Button, ServiceCard } from "@components";
import { useTranslation } from "react-i18next";
import "./Services.scss";

/**
 * Services section displaying service cards and header
 * @returns {JSX.Element} Services component
 */
const Services = () => {
  const { t } = useTranslation(['servicesLayout , services']);
  const services = t('services:list', { returnObjects: true });

  return (
    <section id="services" className="services">
      <div className="services__container">
        <header className="services__header">
          <SectionArticle
            title={t('servicesLayout:services.title')}
            subtitle={t('servicesLayout:services.subtitle')}
          />
          <div className="services__desktop-button">
            <Button label={t('servicesLayout:button')} size="button-md" type="color" href="/services" />
          </div>
          <div className="services__mobile-button">
            <Button size="button-arrow" type="color" />
          </div>
        </header>

        <div className="services__card-grid">
          {services.map(({ title, backgroundImg, description }) => (
            <ServiceCard
              key={title}
              title={title}
              backgroundImg={backgroundImg}
              description={
                description || "Description not available"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
