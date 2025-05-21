import "./Services.scss";
import { SectionArticle, Button, ServiceCard } from "@components";
import cardsInfo from "../../assets/serviceCards.json";

const Services = () => {
  return (
    <section className="services">
      <div className="services__content">
        <div className="header">
          <SectionArticle
            title="Our Services"
            subtitle="We provide a wide range of services.
                    From small to fundamental works"
          />
          <Button label="See More" size="button-md" type="color" />
        </div>
        <div className="cardStack">
          {cardsInfo.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              backgroundImg={item.backgroundImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
