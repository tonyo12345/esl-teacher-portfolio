import { Mail, MapPin, Link2, Send } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import "./Footer.css";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-name">{portfolioData.name}</p>
            <p className="footer-tagline">{portfolioData.tagline}</p>
          </div>

          <nav className="footer-nav">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <Send size={18} />
            </a>
            <a
              href={portfolioData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-link"
            >
              <Link2 size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              aria-label="Email"
              className="footer-social-link"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;