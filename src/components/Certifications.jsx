import { BadgeCheck, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import "./Certifications.css";

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Professional Growth"
            title="Certifications"
            subtitle="Credentials that support my teaching practice."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="certifications-grid">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-icon">
                  <BadgeCheck size={22} />
                </div>

                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-org">{cert.organization}</p>

                <div className="cert-meta">
                  <span>{cert.date}</span>
                  <span className="cert-meta-divider">•</span>
                  <span>ID: {cert.credentialId}</span>
                </div>

                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate
                  <ExternalLink size={15} />
                </a>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Certifications;