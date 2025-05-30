import { SectionArticle, Button, ServiceCard } from "@components";
import services from "../../assets/services.json";
import "./Services.scss";

/**
 * Services section displaying service cards and header
 * @returns {JSX.Element} Services component
 */
const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <header className="services__header">
          <SectionArticle
            title="Our Services"
            subtitle="We provide a wide range of services. From small to fundamental works"
          />
          <div className="services__desktop-button">
            <Button label="See More" size="button-md" type="color" />
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
                description || "Learn more about our premium services"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
