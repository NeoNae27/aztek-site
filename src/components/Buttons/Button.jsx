import { memo } from "react";
import "./Button.scss";
import classNames from "classnames";

/**
 * Button component that renders a button with different styles based on props.
 * @param {Object} props - The properties for the button.
 * @param {string} props.label - The text to display on the button.
 * @param {string} props.size - The size of the button (e.g., "button-md", "button-arrow").
 * @param {string} props.type - The type of the button (e.g., "color", "outline").
 */
const Button = memo(({ label, size, type }) => {
  return (
    <button className={classNames("button", [size], [type])}>
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
});

export default Button;
