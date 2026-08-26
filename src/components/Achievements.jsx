import { Award, Trophy, Star, Medal } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import "./Achievements.css";

// Cycle through a few icons so cards don't all look identical
const icons = [Award, Trophy, Star, Medal];

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Milestones"
            title="Achievements"
            subtitle="Moments and recognitions I'm proud of along the way."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="achievements-grid">
            {portfolioData.achievements.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    <Icon size={22} />
                  </div>
                  <span className="achievement-year">{item.year}</span>
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Achievements;