import "./Banner.scss";
import { Button } from "@components";

const Banner = ({ title, subtitle, buttonText, buttonHref }) => {
  return (
    <section className="banner">
      <div className="banner__content">
        <div className="banner__headliner">
          <h2 className="banner__title">
            {title || "Error: Title not provided"}
          </h2>
          <h4 className="banner__subtitle">
            {subtitle || `Error: Subtitle not provided`}
          </h4>
        </div>
        {buttonText ? (
          <div className="banner__button">
            <Button
              label={buttonText}
              size="button-lg"
              type="outline"
              aria-label={buttonText}
              href={buttonHref}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Banner;
