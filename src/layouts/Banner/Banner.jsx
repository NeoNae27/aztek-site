import "./Banner.scss";
import { Button } from "@components";

const Section = () => {
  return (
    <section>
      <div className="content">
        <div className="headliner">
          <h2>
            Where Engineering <br /> Meets Enterprise
          </h2>
          <h4>Powering Industry Since 2004</h4>
        </div>
        <Button label="OUR PROJECTS" size="button-lg" type="outline" />
      </div>
    </section>
  );
};

export default Section;
