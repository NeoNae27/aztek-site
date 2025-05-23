import "./About.scss";
import { ExtraButton, List } from "@components";
import { useTranslation } from "react-i18next";
import extra1 from "../../assets/extra1.webp";
import extra2 from "../../assets/extra2.webp";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about__container">
        <span className="about__textArea">
          <article className="about__article">
            <h2 className="about__article--title">{t("about.title")}</h2>
            <p className="about__article--text body1">
              {t("about.text1")}
              <br /> <br />
              {t("about.text2")}
            </p>
          </article>
          <span className="about__doubleList">
            <List
              listElements={[
                "High quality of work",
                "100% Guarantee",
                "Professional staff",
              ]}
            />
            <List
              listElements={[
                "Individual approach",
                "High Level of Security",
                "Modern equipment",
              ]}
            />
          </span>
        </span>
        <span className="about__buttonsArea">
          <ExtraButton
            title={t("about.extraButton1.title")}
            subtitle={t("about.extraButton1.subtitle")}
            backgroundImg={extra1}
          />
          <ExtraButton
            title={t("about.extraButton2.title")}
            subtitle={t("about.extraButton2.subtitle")}
            backgroundImg={extra2}
          />
        </span>
      </div>
    </section>
  );
};

export default About;
