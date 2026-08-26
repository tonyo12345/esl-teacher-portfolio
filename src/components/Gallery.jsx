import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import "./Gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...portfolioData.galleryCategories];

  const filteredImages =
    activeCategory === "All"
      ? portfolioData.galleryImages
      : portfolioData.galleryImages.filter(
          (img) => img.category === activeCategory
        );

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="A Peek Inside"
            title="Classroom Gallery"
            subtitle="Moments from the classroom, activities, and events."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((img) => (
              <div key={img.id} className="gallery-item">
                <img
                  src={`https://placehold.co/500x400/f3e9d7/a89a7d?text=${encodeURIComponent(
                    img.category
                  )}`}
                  alt={img.caption}
                  loading="lazy"
                />
                <div className="gallery-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Gallery;