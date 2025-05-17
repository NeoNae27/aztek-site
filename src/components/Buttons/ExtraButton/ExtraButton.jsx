import "./ExtraButton.scss";

// TODO: REWORK
const ExtraButton = ({ title, subtitle}) => {
  return (
    <button className="extraButton" style={{backgroundImage: './src/assets/extra1.png'}}>
      <h5>{title}</h5>
      <p className="subtitle1">{subtitle}</p>
    </button>
  );
};

export default ExtraButton;
