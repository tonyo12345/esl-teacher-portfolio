import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import "./About.css";
import RevealOnScroll from "./RevealOnScroll";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Get to Know Me"
            title="About Me"
            subtitle="A little bit about my journey, my values, and what drives my teaching."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="about-content">
            <div className="about-text">
              <p>{portfolioData.shortBio}</p>
              <p>
                [PLACEHOLDER: A paragraph about her teaching background — where
                she started, what drew her to ESL teaching, and what she's
                learned along the way.]
              </p>
              <p>
                [PLACEHOLDER: A paragraph about her educational interests and
                personal values — what she believes makes a great learning
                environment, and what she personally enjoys outside of
                teaching.]
              </p>
            </div>

            <div className="about-stats">
              {portfolioData.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default About;