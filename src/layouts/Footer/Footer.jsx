import "./Footer.scss";
import { Logo } from "@components";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="footer__left">
          <div className="footer__info">
            <Logo />
            <p className="body2">
              AZ1065, Bakı şəhəri, Azərbaycan, Bakıxanov küçəsi, 6, Bridge
              Plaza, 4-cü mərtəbə
            </p>
          </div>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/company/aztek-az/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/aztek.az/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/aztek.az/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size={24} />
            </a>
          </div>
        </span>
        <span className="footer__right">
          <div className="footer__copyright">
            <p className="body2">© 2025 AZTEK. All rights reserved.</p>
            <p className="body2">Privacy Policy</p>
          </div>
          <div className="author">
            <a className="body2">Made by Nick</a>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
