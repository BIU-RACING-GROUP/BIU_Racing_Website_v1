export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/assets/BIURacingColorLogo.png" alt="BIU-Racing logo" />
              <div className="name">BIU-RACING</div>
            </div>
            <p className="footer-tag">
              Bar-Ilan University's founding Formula Student electric vehicle
              team. Building toward FS Europe, 2027.
            </p>
          </div>

          <div className="fcol">
            <h4>Site</h4>
            <a href="#about">About Us</a>
            <a href="#team">The Team</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#media">Media</a>
            <a href="#updates">Updates</a>
          </div>

          <div className="fcol">
            <h4>Get Involved</h4>
            <a href="#team">Join the Team</a>
            <a href="#sponsors">Become a Sponsor</a>
            <a href="#contact-section">Contact Us</a>
          </div>

          <div className="fcol">
            <h4>Contact</h4>
            <a href="mailto:info@biuracing.com">info@biuracing.com</a>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r="0.6" fill="var(--muted)" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V11H8v3h2.6v7Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8" cy="8.2" r="1" />
                  <path d="M8 11.5v6M12 11.5v6M12 14c0-1.4 1-2.5 2.4-2.5s2.4 1.1 2.4 2.5v3.5" />
                </svg>
              </a>
              <a href="#" aria-label="Linktree">
                <svg viewBox="0 0 24 24">
                  <path d="M9 15 15 9M8.5 13 6.6 14.9a3 3 0 0 0 4.2 4.2L12.7 17M15.5 11l1.9-1.9a3 3 0 0 0-4.2-4.2L11.3 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="fcol">
            <h4>Visit Us</h4>
            <p className="addr-text">
              Max and Anna Webb St.
              <br />
              Ramat Gan, Israel
            </p>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps?q=Max+and+Anna+Webb+St,+Ramat+Gan,+Israel&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BIU-Racing location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="c">
            © 2026 BIU-RACING - BAR-ILAN FORMULA STUDENT. All Rights Reserved.
          </div>
          <div className="c credit">Website built by Shahar Admoni</div>
        </div>
      </div>
      <div className="checker-chess"></div>
    </footer>
  );
}
