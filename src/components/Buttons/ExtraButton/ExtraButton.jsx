import { memo } from "react";
import "./ExtraButton.scss";

/**
 * ExtraButton component with hover effect
 * @param {Object} props Component props
 * @param {string} props.title Button title
 * @param {string} props.subtitle Button subtitle
 * @param {string} props.backgroundImg URL for background image
 * @returns {JSX.Element} ExtraButton component
 */
const ExtraButton = memo(({ title, subtitle, backgroundImg }) => {
  return (
    <button
      className="extra-button"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="extra-button__content">
        <h5 className="extra-button__title">{title}</h5>
        <p className="extra-button__subtitle subtitle1">{subtitle}</p>
      </div>
    </button>
  );
});

export default ExtraButton;