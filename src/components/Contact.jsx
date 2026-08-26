import { Mail, MapPin, Link2, Send } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Let's Connect"
            title="Get In Touch"
            subtitle="Whether you're a student, parent, or fellow educator — I'd love to hear from you."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="contact-card">
            <a href={`mailto:${portfolioData.email}`} className="contact-row">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">{portfolioData.email}</p>
              </div>
            </a>

            <div className="contact-row">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <p className="contact-label">Location</p>
                <p className="contact-value">{portfolioData.location}</p>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon-link"
              >
                <Send size={20} />
              </a>
              <a
                href={portfolioData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon-link"
              >
                <Link2 size={20} />
              </a>
              <a
                href={portfolioData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon-link"
              >
                <Link2 size={20} />
              </a>
            </div>

            <a
              href={`mailto:${portfolioData.email}`}
              className="btn btn-primary contact-cta"
            >
              Say Hello
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Contact;