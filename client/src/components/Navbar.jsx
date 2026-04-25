import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest(".nav-container")) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  const links = [
    { href: "#about",    label: "About"    },
    { href: "#skills",   label: "Skills"   },
    { href: "#projects", label: "Projects" },
    { href: "#contact",  label: "Contact"  },
  ];

  return (
    <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">

        {/* Logo */}
        <a href="#" className="logo" onClick={() => handleNav("")}>
          <span className="logo-dot" />
          Pradeep
        </a>

        {/* Desktop links */}
        <ul className="desktop-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={activeLink === href ? "active" : ""}
                onClick={() => handleNav(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — divider + CTA + hamburger */}
        <div className="nav-right">
          <span className="nav-divider" />
          <a
            href="#contact"
            className="nav-cta"
            onClick={() => handleNav("#contact")}
          >
            Hire me
          </a>
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`mobile-drawer ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <ul className="mobile-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeLink === href ? "active" : ""}
                  onClick={() => handleNav(href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mobile-cta"
            onClick={() => handleNav("#contact")}
          >
            Hire me
          </a>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;