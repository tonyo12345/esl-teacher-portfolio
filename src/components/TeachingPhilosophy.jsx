import { Quote } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import "./TeachingPhilosophy.css";

function TeachingPhilosophy() {
  return (
    <section id="philosophy" className="philosophy">
      <div className="philosophy-container">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="What I Believe"
            title="Teaching Philosophy"
            subtitle="The beliefs that shape how I show up in the classroom every day."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="philosophy-grid">
            {portfolioData.philosophy.map((item, index) => (
              <div key={index} className="philosophy-item">
                <Quote size={26} className="philosophy-quote-icon" />
                <h3 className="philosophy-title">{item.title}</h3>
                <p className="philosophy-description">{item.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default TeachingPhilosophy;