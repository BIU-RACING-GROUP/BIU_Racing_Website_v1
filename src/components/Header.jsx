export default function Header() {
  return (
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
      </nav>
    </header>
  )
}
