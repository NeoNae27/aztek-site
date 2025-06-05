import "./About.scss";
import { ExtraButton, List } from "@components";
import { useTranslation } from "react-i18next";
import extra1 from "@assets/buttons/extra1.webp";
import extra2 from "@assets/buttons/extra2.webp";

const About = () => {
  const { t } = useTranslation(["about"]);
  const paragraphs = t("paragraphs", { returnObjects: true });
  const listElements1 = t("listElements1", { returnObjects: true });
  const listElements2 = t("listElements2", { returnObjects: true });
  console.log(listElements1);

  return (
    <section className="about">
      <div className="about__container">
        <span className="about__textArea">
          <article className="about__article">
            <h2 className="about__article--title">{t("about.title")}</h2>
            <p className="about__article--text body1">
              {paragraphs[0]}
              <br /> <br />
              {paragraphs[1]}
            </p>
          </article>
          <span className="about__doubleList">
            <List
              listElements={listElements1}
            />
            <List
              listElements={listElements2}
            />
          </span>
        </span>
        <span className="about__buttonsArea">
          {/* <ExtraButton
            title={t("about.extraButton1.title")}
            subtitle={t("about.extraButton1.subtitle")}
            backgroundImg={extra1}
          />
          <ExtraButton
            title={t("about.extraButton2.title")}
            subtitle={t("about.extraButton2.subtitle")}
            backgroundImg={extra2}
          /> */}
        </span>
      </div>
    </section>
  );
};

export default About;
