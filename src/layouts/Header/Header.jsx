import "./Header.scss";
import {Phone, Logo} from "@components";

const Header = () => {
  return (
    <header className="header">
      <div className="content">
        <Logo />
        {/* TODO: Create a nav component */}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="caption">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="caption">
                Company
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="caption">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="caption">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="caption">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <Phone />
      </div>
    </header>
  );
};

export default Header;
