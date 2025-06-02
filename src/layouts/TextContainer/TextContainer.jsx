import "./TextContainer.scss";

const TextContainer = ({ paragraphs }) => {

  return (
    <section className="company">
      <div className="company__container">
        <span className="company__textArea">
          <article className="company__article">
            <h3 className="company__article--title">About Us</h3>
            <span>
              {paragraphs.map((paragraph, index) => (
                <p className="company__article--text body1" key={index}>
                  {paragraph}
                  {index < paragraphs.length - 1 && <br />}
                </p>
              ))}
            </span>
          </article>
        </span>
      </div>
    </section>
  );
};

export default TextContainer;
