import "./Phone.scss";
import phone from "../../assets/icons/phone.svg";

const Phone = () => {
  return (
    <span className="phone">
      <img alt="Phone" width="24" height="24" src={phone} />
      <a href="tel:+994124090050" className="subtitle2">
         +994 (12) 409 00 50
      </a>
    </span>
  );
};

export default Phone;