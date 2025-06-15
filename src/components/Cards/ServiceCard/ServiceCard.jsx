import "./ServiceCard.scss";
import { useState, useRef, useEffect } from "react";

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
  description = "Learn more about our services",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <span
      className="service-card"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
      ref={cardRef}
    >
      {isInView && (
        <span loading="lazy">
          <div className="service-card__overlay"></div>
          <div className="service-card__container">
            <h5 className="service-card__title">{title}</h5>
            <p className="service-card__description body1">{description}</p>
          </div>
        </span>
      )}
    </span>
  );
};

export default ServiceCard;