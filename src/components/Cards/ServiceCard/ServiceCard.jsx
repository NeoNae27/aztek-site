import "./ServiceCard.scss";

/**
 * Service Card component with hover effect
 * @param {Object} props Component props
 * @param {string} props.title Card title
 * @param {string} props.backgroundImg URL for background image
 * @param {string} [props.description="Learn more about our services"] Optional description text
 * @returns {JSX.Element} ServiceCard component
 */
const ServiceCard = ({ 
  title, 
  backgroundImg, 
  description = "Learn more about our services" 
}) => {
  return (
    <div
      className="service-card"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="service-card__overlay"></div>
      <div className="service-card__content">
        <h5 className="service-card__title">{title}</h5>
        <p className="service-card__description body1">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;