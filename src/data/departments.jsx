export const captain = {
  key: "captain",
  title: "Team Captain",
  lead: "Shahar Admoni",
  body: "Sets the direction for the whole team - coordinating across all five departments, owning the competition timeline, and making sure every group is building toward the same car.",
  icon: (props) => (
    <svg
      className="icon"
      style={{ stroke: "var(--off-white)" }}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 3v4.5M12 16.5V21M3 12h4.5M16.5 12H21" />
    </svg>
  ),
};

export const departments = [
  {
    key: "mechanical",
    dname: "Mechanical",
    lead: "Benny Provatorov",
    body: "Chassis, bodywork, suspension and vehicle dynamics. This department turns concept sketches into the physical structure the car is built around.",
    icon: (props) => (
      <svg className="icon" viewBox="0 0 24 24" {...props}>
        <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3Z" />
      </svg>
    ),
  },
  {
    key: "electrical",
    dname: "Electrical",
    lead: "Rotem Sillam",
    body: "High Voltage, Low Voltage, Motor and Inverter sub-teams. Responsible for the full electric drivetrain that powers the car.",
    icon: (props) => (
      <svg className="icon" viewBox="0 0 24 24" {...props}>
        <path d="M13 2 4 14h6l-1 8 9-12h-6Z" />
      </svg>
    ),
  },
  {
    key: "embedded",
    dname: "Embedded Systems",
    lead: "Michelle Tobias",
    body: "Builds the car's electronic control systems and firmware - the software layer that keeps every other department's hardware talking to each other.",
    icon: (props) => (
      <svg className="icon" viewBox="0 0 24 24" {...props}>
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
      </svg>
    ),
  },
  {
    key: "operations",
    dname: "Operations",
    lead: "Tair Sackstein",
    body: "Runs the business side of the team - partnerships, sponsorships, budgeting and logistics - so the technical departments can focus on building.",
    icon: (props) => (
      <svg className="icon" viewBox="0 0 24 24" {...props}>
        <path d="M9 11l2 2 4-4" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
      </svg>
    ),
  },
  {
    key: "product",
    dname: "Product Mgmt",
    lead: "Product Team",
    body: "Keeps the build on schedule - tracking milestones across departments and making sure design decisions stay aligned with the competition roadmap.",
    icon: (props) => (
      <svg className="icon" viewBox="0 0 24 24" {...props}>
        <path d="M12 3 3 8l9 5 9-5-9-5Z" />
        <path d="M3 8v8l9 5 9-5V8" />
      </svg>
    ),
  },
];
