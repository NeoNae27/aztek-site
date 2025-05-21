import { SectionArticle, Button, ServiceCard } from "@components";
import serviceCardData from "../../assets/serviceCards.json";
import "./Services.scss";

/**
 * Services section displaying service cards and header
 * @returns {JSX.Element} Services component
 */
const Services = () => {
  return (
    <section className="services">
      <div className="services__container">
        <header className="services__header">
          <SectionArticle
            title="Our Services"
            subtitle="We provide a wide range of services. From small to fundamental works"
          />
          <div className="services__desktop-button">
            <Button label="See More" size="button-md" type="color" />
          </div>
        </header>
        
        <div className="services__card-grid">
          {serviceCardData.map(({ title, backgroundImg, description }) => (
            <ServiceCard
              key={title}
              title={title}
              backgroundImg={backgroundImg}
              description={description || "Learn more about our premium services"}
            />
          ))}
        </div>
        
        <div className="services__mobile-button">
          <Button label="See More" size="button-md" type="color" />
        </div>
      </div>
    </section>
  );
};

export default Services;