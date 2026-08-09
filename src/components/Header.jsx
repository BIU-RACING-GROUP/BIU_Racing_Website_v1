import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#team", label: "The Team" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#media", label: "Media" },
  { href: "#updates", label: "Updates" },
  { href: "#contact-section", label: "Join Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header>
        <nav>
          <div className="nav-side">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#team">The Team</a>
          </div>

          <div className="nav-logo-badge">
            <img src="/assets/logo-icon.png" alt="BIU-Racing logo" />
          </div>

          <div className="nav-side" style={{ justifyContent: 'flex-end' }}>
            <a href="#sponsors">Sponsors</a>
            <a href="#media">Media</a>
            <a href="#updates">Updates</a>
            <a href="#contact-section" className="btn btn-primary hero-primary nav-cta">
              Join Us
            </a>
          </div>

          <button
            className="nav-burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* rendered outside <header> so position:fixed resolves against the
          viewport, not header's own box (header's backdrop-filter would
          otherwise become the containing block and collapse the drawer's
          height to its content) */}
      <div className={`nav-drawer${menuOpen ? " open" : ""}`}>
        <button
          className="nav-drawer-close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ✕
        </button>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
      </div>
      <div
        className={`nav-drawer-backdrop${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  )
}
