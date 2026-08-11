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
        <div className="combo-grid">
          <div className="combo-main">
            <div className="section-head">
              <h2>
                What is
                <br />
                BIU-Racing?
              </h2>
            </div>

            <div className="about-copy">
              <p>
                <strong>BIU-Racing</strong> is Bar-Ilan University's founding
                Formula Student electric vehicle team. What started as a
                whiteboard sketch is now a 75-person, five-department
                operation designing and building a competition-grade EV from
                the ground up.
              </p>
              <p>
                It's not just engineers.{" "}
                <strong>
                  Electrical, Mechanical, Embedded Systems, Product
                  Management and Operations
                </strong>{" "}
                work side by side - designers, marketers and business minds
                included - because a Formula Student car is as much an
                organization problem as it is a technical one.
              </p>
              <p>
                The car hits completion in <strong>May 2027</strong>, ahead
                of competition at <strong>FS Europe</strong>. This is the
                first lap of a much longer race.
              </p>
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

          <div className="combo-side">
            <div className="fs-box" id="formula-student">
              <h3>
                What is
                <br />
                Formula Student?
              </h3>
              <p>
                Formula Student (also known as Formula SAE) is the world's
                largest student engineering competition, run by SAE
                International and partner organizations across the UK,
                Germany, Italy, Austria, Hungary, Spain, Australia and
                beyond. Since the first competitions in the late 1970s, it
                has grown into a genuine training ground for the automotive
                and motorsport industry.
              </p>
              <p>
                Every year, hundreds of university teams design, build, and
                race a small formula-style car from scratch. Competition
                weekends combine on-track dynamic events - acceleration,
                skidpad, autocross, and an endurance race - with static
                evaluations: engineering design judging, a cost report, and a
                business case pitched to real judges from Formula 1,
                aerospace, and the automotive industry.
              </p>
              <p>
                It's less a single race and more a full product-development
                cycle compressed into a year - design, manufacture, validate,
                and defend every decision in front of professionals who've
                built real cars. That's the standard BIU-Racing is building
                toward.
              </p>
            </div>
            <div className="combo-photo">
              <img src="/assets/media-3.jpeg" alt="BIU-Racing team meeting" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
