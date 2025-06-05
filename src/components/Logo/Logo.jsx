import "./Logo.scss";
import { Link } from "react-router";

const Logo = () => {
  return (
     <span className="logo">
      <img src="./aztek-white-logo.svg" alt="Logo" width="24" height="24" />
      <Link to="/" className="subtitle2">
        AZTEK
      </Link>
    </span>
  );
}

export default Logo;