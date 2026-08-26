import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="My Journey"
            title="Teaching Experience"
            subtitle="Where I've taught, and what I've learned along the way."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="timeline">
            {portfolioData.experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <GraduationCap size={18} />
                </div>

                <div className="timeline-card">
                  <span className="timeline-dates">
                    {job.startDate} — {job.endDate}
                  </span>
                  <h3 className="timeline-position">{job.position}</h3>
                  <p className="timeline-institution">{job.institution}</p>
                  <p className="timeline-description">{job.description}</p>

                  {job.responsibilities?.length > 0 && (
                    <ul className="timeline-responsibilities">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Experience;