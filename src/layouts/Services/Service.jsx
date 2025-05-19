import "./Services.scss";
import { SectionArticle, Button, ServiceCard } from "@components";

const Services = () => {
  return (
    <section className="services">
      <div className="content">
        <div className="header">
          <SectionArticle
            title="Our Services"
            subtitle="We provide a wide range of services.
                    From small to fundamental works"
          />
          <Button label="See More" size="button-md" type="color" />
        </div>
        {/* <div className="cardStack">
          <ServiceCard title="Text" backgroundImg="./src/assets/cardsImgs/ship.png" />
          <ServiceCard title="Text" backgroundImg="./src/assets/cardsImgs/ship.png" />
          <ServiceCard title="Text" backgroundImg="./src/assets/cardsImgs/ship.png" />
          <ServiceCard title="Text" backgroundImg="./src/assets/cardsImgs/ship.png" />
          <ServiceCard title="Text" backgroundImg="./src/assets/cardsImgs/ship.png" />
          <ServiceCard title="Text" backgroundImg="./src/assets/cardsImgs/ship.png" />  
        </div> */}
      </div>
    </section>
  );
};

export default Services;
