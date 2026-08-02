const stats = [
  { n: "1st", l: "Formula Student Team at BIU" },
  { n: "2027", l: "Competition Year" },
  { n: "75", l: "Team Members" },
  { n: "05", l: "Departments" },
];

export default function About() {
  return (
    <section id="about">
      <div className="glow"></div>
      <div className="wrap">
        <div className="section-head">
          <h2>
            What is
            <br />
            BIU-Racing?
          </h2>
          <p>
            The 1st team to bring Formula Student to Bar-Ilan University - just
            an idea and international ambitions, now an engineering program.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              <strong>BIU-Racing</strong> is Bar-Ilan University's founding
              Formula Student electric vehicle team. What started as a
              whiteboard sketch is now a 75-person, five-department operation
              designing and building a competition-grade EV from the ground up.
            </p>
            <p>
              It's not just engineers.{" "}
              <strong>
                Electrical, Mechanical, Embedded Systems, Product Management and
                Operations
              </strong>{" "}
              work side by side - designers, marketers and business minds
              included - because a Formula Student car is as much an
              organization problem as it is a technical one.
            </p>
            <p>
              The car hits completion in <strong>May 2027</strong>, ahead of
              competition at <strong>FS Europe</strong>. This is the first lap
              of a much longer race.
            </p>
          </div>
          <div className="about-img">
            <img src="/assets/media-3.jpeg" alt="BIU-Racing team meeting" />
          </div>
        </div>

        <div className="stats-row">
          {stats.map((s) => (
            <div className="stat" key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
