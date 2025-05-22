import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = ["en", "az"];

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  };

  return (
    <a className="language-toggle caption" onClick={toggleLanguage}>
      {i18n.language.toUpperCase()}
    </a>
  );
};

export default LanguageSwitcher;
