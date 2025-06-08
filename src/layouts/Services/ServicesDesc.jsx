import "./ServicesDesc.scss";
import { useTranslation } from "react-i18next";
import { SectionArticle } from "@components";

const ServicesDesc = () => {
  const { t } = useTranslation(["services"]);
  const services = t("services:list", { returnObjects: true });

  return (
    <section id="services-desc" className="services-desc">
      <div className="services-desc__container">
        {services.map(({ title, description }) => (
          <article key={title} className="services-desc__article">
            <h5 className="sevice-desc__title">{title}</h5>
            <p className="">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesDesc;
