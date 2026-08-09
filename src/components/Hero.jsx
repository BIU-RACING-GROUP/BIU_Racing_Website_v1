export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div
        className="checker"
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }}
      ></div>

      <div className="hero-meta">
        <div className="tag">
          Chassis
          <br />
          <b>Fully Electric</b>
        </div>
        <div className="tag">
          Target Race
          <br />
          <b>FS Europe 2027</b>
        </div>
        <div className="tag">
          Build Complete
          <br />
          <b>May 2027</b>
        </div>
      </div>

      <div className="hero-content">
        <div className="eyebrow">Bar-Ilan's 1st Formula Student Team</div>
        <h1>
          Starting from zero. Racing for <em>everything.</em>
        </h1>
        <p className="sub">
          75 volunteer students across five departments, designing and building
          a fully electric race car from scratch - headed for FS Europe, 2027.
        </p>
        <div className="hero-actions">
          <a href="#sponsors" className="btn btn-primary hero-primary">
            Become a Sponsor
          </a>
          <a href="#team" className="btn btn-ghost hero-ghost">
            Meet the Team
          </a>
        </div>
      </div>

      <div className="scroll-cue">
        <div className="line"></div>Scroll
      </div>
    </section>
  );
}
