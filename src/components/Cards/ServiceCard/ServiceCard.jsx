import "./ServiceCard.scss";

const ServiceCard = ({ title, backgroundImg }) => {
  return (
    <span
      className="serviceCard"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h5>{title}</h5>
    </span>
  );
};

export default ServiceCard;
