import "./Logo.scss";

const Logo = () => {
  return (
     <span className="logo">
      <img src="/aztek-white-logo.svg" alt="Logo" width="24" height="24" />
      <a href="#home" className="subtitle2">
        AZTEK
      </a>
    </span>
  );
}

export default Logo;