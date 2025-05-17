import "./TextArticles.scss";

const SectionArticle = ({title , subtitle}) => {
  return (
    <article className="section-article">
      <h2>{title}</h2>
      <p className="subtitle1">{subtitle}</p>
    </article>
  );
};

export default SectionArticle;