import "./Banner.scss";
import { Button } from "@components";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation();

  return (
    <section className="banner">
      <div className="banner__content">
        <div className="banner__headliner">
          <h2 className="banner__title">
            Where Engineering <br /> Meets Enterprise
          </h2>
          <h4 className="banner__subtitle">{t("banner.subtitle")}</h4>
        </div>
        <div className="banner__buttons">
          <Button
            label={t("banner.button")}
            size="button-lg"
            type="outline"
            aria-label={t("banner.button")}
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
