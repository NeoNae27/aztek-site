import "./NumberBlock.scss";
import phoneIcon from "@assets/phone-icon.svg";

const NumberBlock = ({ text, number }) => {
  return (
    <article className="number-block">
      <p className="body2">
        {text}
      </p>
      <div>
        <img src={phoneIcon} />
        <p className="subtitle2">{number}</p>
      </div>
    </article>
  );
};

export default NumberBlock;