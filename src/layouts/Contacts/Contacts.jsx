import "./Contacts.scss";
import { SectionArticle, Phone } from "@components";
import { useTranslation } from "react-i18next";

/**
 * Contacts section
 * @returns {JSX.Element} Contacts component
 */
const Contacts = () => {
  const { t } = useTranslation("contactsLayout");

  return (
    <section id="contacts" className="contacts">
      <div className="contacts__container">
        <header className="contacts__header">
          <SectionArticle
            title={t("contacts.title")}
            subtitle={t("contacts.subtitle")}
          />
        </header>

        <div className="contacts__area">
          <div className="contacts__block">
            <article className="contacts__info">
              <h5 className="contacts__title">{t("contacts.address.title")}</h5>
              <p className="body1">
                124C Khojasan Highway Baku, Azerbaijan. AZ1063
              </p>
            </article>

            <article className="contacts__info">
              <h5 className="contacts__title">{t("contacts.email.title")}</h5>
              <p className="body1">Email: office@aztek.az</p>
            </article>

            <div className="contacts__phone">
              <p className="body1">
                {t("contacts.phone.text")}
              </p>
              <Phone number="+994 (55) 214 24 42" />
              <Phone number="+994 (12) 565 50 05" />

            </div>
          </div>
          <div className="contacts__img"></div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
