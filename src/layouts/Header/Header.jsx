import "./Header.scss";
import { Phone, Logo, LanguageSwitcher } from "@components";
import { useState, useEffect } from "react";
import { Link } from 'react-router';
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.js";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t("nav.home"), url: "/" },
    { name: t("nav.company"), url: "/about" },
    { name: t("nav.services"), url: "/services" },
    { name: t("nav.portfolio"), url: "/portfolio" },
    { name: t("nav.contact"), url: "/#contacts" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="header__content">
          <Logo />

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <nav aria-label="Main Navigation">
                <ul className="nav-list">
                  {navItems.map((item) => (
                    <li key={item.name} className="nav-item">
                      <Link to={item.url} className="caption">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li className="header__language nav-item ">
                    <LanguageSwitcher />
                  </li>
                </ul>
              </nav>
              <Phone />
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className={`hamburger ${isMenuOpen ? "active" : ""}`}>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
              </span>
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu Dropdown - Using conditional rendering with CSS for animation */}
      {isMobile && (
        <div className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}>
          <nav className="mobile-menu__nav" aria-label="Mobile Navigation">
            <ul className="mobile-menu__list">
              {navItems.map((item) => (
                <li key={item.name} className="mobile-menu__item">
                  <Link
                    to={item.url}
                    className="mobile-menu__link caption"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mobile-menu__link nav-item ">
                <LanguageSwitcher />
              </li>
            </ul>
            <div className="mobile-menu__phone">
              <Phone />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
