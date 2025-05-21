import "./Phone.scss";

const Phone = () => {
  return (
    <span className="phone">
      <img alt="Phone" width="24" height="24" src="./src/assets/icons/phone.svg" />
      <a href="tel:+9940502101366" className="subtitle2">
        + (994 050) 210 13 66
      </a>
    </span>
  );
};

export default Phone;