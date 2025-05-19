import "./Header.scss";
import { Phone, Logo } from "@components";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", url: "/" },
    { name: "Company", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Contact", url: "/contact" },
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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Блокируем прокрутку при открытом меню
    } else {
      document.body.style.overflow = ""; // Возвращаем прокрутку при закрытом меню
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="content">
          <Logo />

          {/* Desktop Navigation  */}
          {!isMobile && (
            <>
              <nav>
                <ul className="nav-list">
                  {navItems.map((item) => (
                    <li key={item.name} className="nav-item">
                      <a href={item.url} className="caption">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <Phone />
            </>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <button className="" onClick={toggleMenu} width="24" height="24">
              <img
                src="./src/assets/hamburger.svg"
                width="24"
                height="24"
              ></img>
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu Dropdown */}

      {isMobile && isMenuOpen && (
        <div className={`mobile-menu-container ${isMenuOpen ? "open" : ""}`}>
          <nav className="navMenu">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.name} className="mobile-nav-item">
                  <a
                    href={item.url}
                    className="caption"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <Phone />
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
