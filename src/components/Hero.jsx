import { Download, Compass } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import RevealOnScroll from "./RevealOnScroll";
import "./Hero.css";
import profilePhoto from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <RevealOnScroll>
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">{portfolioData.name} 👋</h1>
            <p className="hero-title">{portfolioData.title}</p>
            <p className="hero-bio">{portfolioData.shortBio}</p>

            <div className="hero-cta-group">
              <a href="#about" className="btn btn-primary">
                <Compass size={18} />
                Explore My Journey
              </a>
              <a href="/resume-placeholder.pdf" className="btn btn-secondary" download>
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="hero-highlights">
              {portfolioData.stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="highlight-card">
                  <span className="highlight-value">{stat.value}</span>
                  <span className="highlight-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="hero-photo-wrap">
            <div className="hero-photo-placeholder">
               <img src={profilePhoto} alt={portfolioData.name} className="hero-photo-img" />
            </div>
            <div className="hero-decor-shape hero-decor-1" />
            <div className="hero-decor-shape hero-decor-2" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Hero;