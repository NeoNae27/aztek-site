import "./TextArticles.scss";

const CardArticle = (props) => {
  return (
    <article className="card-article">
      <h5>{props.title}</h5>
      <p className="body1">{props.subtitle}</p>
    </article>
  );
};

export default CardArticle;