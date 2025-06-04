import docs from "../../../../public/aztek-docs.json";
import { DocsCard, SectionArticle } from "@components";
import "./DocsGallery.scss";

const DocsGallery = () => {
  return (
    <div className="docs-gallery">
      <SectionArticle
        title="Certificates and Letters"
        subtitle="Check out our achievements"
      />
      <div className="docs-gallery__container">
        {Object.entries(docs).map(([key, doc], index) => (
          <DocsCard
            className="docs-gallery__card"
            key={key}
            docImg={doc.img}
            docURL={doc.doc}
            docTitle={
              doc.title ||
              key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase()) ||
              `Document ${index + 1}`
            }
          />
        ))}
      </div>
    </div>
  );
};

export default DocsGallery;
