import "./Phone.scss";
import phone from "../../assets/icons/phone.svg";

const Phone = ({number}) => {
  return (
    <span className="phone">
      <img alt="Phone" width="24" height="24" src={phone} />
      <a href={`tel:${number}`} className="subtitle2">
          {number}
      </a>
    </span>
  );
};

export default Phone;