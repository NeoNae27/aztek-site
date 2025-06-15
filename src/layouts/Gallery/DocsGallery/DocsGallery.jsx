import { DocsCard, SectionArticle } from "@components";
import { useEffect, useRef } from "react";
import "./DocsGallery.scss";

const DocsGallery = ({ title, subtitle, docs }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      const hasHorizontalScroll = container.scrollWidth > container.clientWidth;
      
      if (hasHorizontalScroll && window.innerWidth >= 768) {
        e.preventDefault();
        
        const scrollAmount = e.deltaY;
        container.scrollLeft += scrollAmount;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="docs-gallery">
      <SectionArticle
        title={title}
        subtitle={subtitle}
      />
      <div 
        className="docs-gallery__container"
        ref={containerRef}
      >
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