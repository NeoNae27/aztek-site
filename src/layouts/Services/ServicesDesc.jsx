import "./ServicesDesc.scss";
import { useTranslation } from "react-i18next";
import { SectionArticle } from "@components";

const ServicesDesc = () => {
  const { t } = useTranslation(["services"]);
  const services = t("services:list", { returnObjects: true });
  console.log(services);

  return (
    <section id="services-desc" className="services-desc">
      <div className="services-desc__container">
        {services.map(({ title, description, backgroundImg }) => (
          <article key={title} className="services-desc__article">
            <img src={backgroundImg} />
            <span className="services-desc__text">
              <h5 className="services-desc__title">{title}</h5>
              <p className="">{description}</p>
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesDesc;
