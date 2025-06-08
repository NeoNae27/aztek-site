import "./Phone.scss";
import phone from "../../assets/icons/phone.svg";

const Phone = () => {
  return (
    <span className="phone">
      <img alt="Phone" width="24" height="24" src={phone} />
      <a href="tel:+994(55)2142442" className="subtitle2">
          +994 (55) 214 24 42
      </a>
    </span>
  );
};

export default Phone;