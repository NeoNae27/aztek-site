import "./DocsCard.scss";

const DocsCard = ({ docImg, docURL, docTitle }) => {
  const handleImageClick = () => {
    if (docURL) {
      window.open(docURL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="docs-card">
      <div className="docs-card__container">
        <img 
          src={docImg} 
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label={docTitle ? `Open ${docTitle} PDF` : "Open PDF document"}
          alt={docTitle ? `Preview of ${docTitle}` : "Document preview"}
          loading="lazy"

        />
      </div>
    </div>
  );
};

export default DocsCard;
