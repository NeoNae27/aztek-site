import "./Footer.scss";
import { Logo } from "@components";
import {
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
              124C Khojasan Highway
              Baku, Azerbaijan. AZ1063
            </p>
          </div>

          {/* {TODO: Add linkedIn Account} */}

          <div className="footer__social">
            <a
              href="https://www.linkedin.com/company/aztek-az/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={24} href="https://www.linkedin.com/company/aztek-mmc" target="blank" />
            </a>
          </div>
        </span>
        <span className="footer__right">
          <div className="footer__copyright">
            <p className="body2">© 2025 AZTEK. All rights reserved.</p>
            <p className="body2">Privacy Policy</p>
          </div>
          <div className="author">
            <a href="https://x.com/NeoNae27" target="blank" className="body2">
              Made by Nick
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
