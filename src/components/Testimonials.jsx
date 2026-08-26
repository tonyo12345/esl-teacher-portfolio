import { Quote } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Kind Words"
            title="Testimonials"
            subtitle="What students, parents, and colleagues have shared about their experience."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="testimonials-grid">
            {portfolioData.testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <Quote size={24} className="testimonial-quote-icon" />
                <p className="testimonial-quote">{item.quote}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="testimonial-name">{item.name}</p>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Testimonials;