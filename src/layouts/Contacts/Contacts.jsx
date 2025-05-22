import "./Contacts.scss";
import contactImg from "../../assets/contacts-pic.png";
import { SectionArticle, Phone } from "@components";

/**
 * Contacts section with equal height columns
 * @returns {JSX.Element} Contacts component
 */
const Contacts = () => {
  return (
    <section id="#contacts" className="contacts">
      <div className="contacts__container">
        <header className="contacts__header">
          <SectionArticle
            title="Contact Us"
            subtitle="We are here to help you with your projects. Get in touch with us!"
          />
        </header>

        <div className="contacts__area">
          <div className="contacts__block">
            <article className="contacts__info">
              <h5 className="contacts__title">OUR LOCATION</h5>
              <p className="body1">
                AZ1065, Bakı şəhəri, Azərbaycan, <br /> Bakıxanov küçəsi, 6,
                Bridge Plaza, 4-cü mərtəbə
              </p>
            </article>

            <article className="contacts__info">
              <h5 className="contacts__title">CONTACTS</h5>
              <p className="body1">Email: office@aztek.az</p>
            </article>

            <div className="contacts__phone">
              <p className="body1">
                We will get back to you within 24 hours, or call us every day,
                09:00 - 24:00
              </p>
              <Phone />
            </div>
          </div>
          <div className="contacts__img">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
