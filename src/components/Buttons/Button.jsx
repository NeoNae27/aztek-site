import "./Button.scss";
import classNames from "classnames";

const Button = ({ label, size, type, color }) => {
  return (
    <button className={classNames("button", [size], [type], [color])}>
      {size === "button-arrow" ? (
        <>
          <span className="button__text">{label}</span>
          <span className="button__arrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
