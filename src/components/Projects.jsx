import { BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Hands-On Work"
            title="Projects & Teaching Materials"
            subtitle="A few of the activities, programs, and materials I've developed for my students."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-icon">
                  <BookOpen size={20} />
                </div>
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Projects;