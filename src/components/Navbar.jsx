import { useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          {portfolioData.name}
        </a>

        {/* Desktop nav */}
        <nav className="navbar-links-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="navbar-links-mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;