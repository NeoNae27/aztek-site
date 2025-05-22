import "./About.scss";
import { ExtraButton, List } from "@components";
import extra1 from "../../assets/extra1.webp";
import extra2 from "../../assets/extra2.webp";


const About = () => {
  return (
    <section className="about">
      <div className="about__content">
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
          <ExtraButton title="Projects" subtitle="See our portfolio" backgroundImg={extra1} />
          <ExtraButton title="Service" subtitle="See our services" backgroundImg={extra2} />
        </span>
      </div>
    </section>
  );
};

export default About;
