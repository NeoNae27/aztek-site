import "./About.scss";
import { ExtraButton, List } from "@components";

const About = () => {
  return (
    <section className="about">
      <div className="content">
        <span className="textArea">
          <article>
            <h2>Bigger, Better, Faster And Stronger Projects</h2>
            <p className="body1">
              Since 2004, we've specialized in the installation and maintenance
              of technical systems — ventilation, painting, reconstruction, and
              more. With a focus on quality craftsmanship and efficiency, we
              serve both residential and commercial clients across a wide range
              of industries.
              <br /> <br />
              Rely on our experience to support your projects with precision,
              reliability, and a commitment to long-term performance.
            </p>
          </article>
          <span className="doubleList">
            <List
              listElements={[
                "High quality of work",
                "100% Guarantee",
                "Professional staff",
              ]}
            />
            <List
              listElements={[
                "Individual approach",
                "High Level of Security",
                "Modern equipment",
              ]}
            />
          </span>
        </span>
        <span className="buttonsArea">
          
        </span>
      </div>
    </section>
  );
};

export default About;
