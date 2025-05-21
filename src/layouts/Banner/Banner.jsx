import "./Banner.scss";
import { Button } from "@components";

const Section = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <div className="banner__headliner">
          <h2 className="banner__title">
            Where Engineering <br /> Meets Enterprise
          </h2>
          <h4 className="banner__subtitle">Powering Industry Since 2004</h4>
        </div>
        <div className="banner__buttons">
          <Button
            label="OUR PROJECTS"
            size="button-lg"
            type="outline"
            aria-label="View our projects"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
