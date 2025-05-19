import { useHover } from "@uidotdev/usehooks";
import "./ExtraButton.scss";

const ExtraButton = ({ title, subtitle, backgroundImg }) => {
  const [ref, isHovered] = useHover();

  return (
    <button
      ref={ref}
      className={`extraButton ${isHovered ? "hovered" : ""}`}
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="textContainer">
        <h5 className="title">{title}</h5>
        <p className="subtitle1">{subtitle}</p>
      </div>
    </button>
  );
};

export default ExtraButton;
