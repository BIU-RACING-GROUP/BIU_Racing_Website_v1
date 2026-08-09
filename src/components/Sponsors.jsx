import { useState } from "react";

const tiers = [
  {
    key: "platinum",
    name: "Platinum",
    price: "Lead Technical Partner",
    perks: [
      "Logo on livery + car",
      "Named case study",
      "On-site engineering access",
      "Investor deck placement",
    ],
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M6 3h12l3 5-9 13L3 8Z" />
        <path d="M3 8h18M9 3l3 5 3-5M12 8l-3 13M12 8l3 13" />
      </svg>
    ),
  },
  {
    key: "gold",
    name: "Gold",
    price: "Component Partner",
    perks: [
      "Logo on car + site",
      "Social media features",
      "Competition day passes",
    ],
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="14" r="6" />
        <path d="M9 8 6 2m9 6 3-6M9.5 12.5l1.8 1.8L15 10.5" />
      </svg>
    ),
  },
  {
    key: "silver",
    name: "Silver",
    price: "Supporting Partner",
    perks: ["Logo on website", "Quarterly update tag"],
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M12 3 3 7v6c0 5 4 7.5 9 8 5-.5 9-3 9-8V7Z" />
      </svg>
    ),
  },
  {
    key: "bronze",
    name: "Bronze",
    price: "Community Supporter",
    perks: ["Name on supporters wall", "Thank-you shoutout"],
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8 12H3l2-6h4Zm8 0h5l-2-6h-4ZM8 12l1 8h6l1-8M8 12h8" />
      </svg>
    ),
  },
];

export default function Sponsors() {
  const [activeKey, setActiveKey] = useState(null);

  function handleSelect(key) {
    setActiveKey((prev) => (prev === key ? null : key));
  }

  return (
    <section id="sponsors">
      <div className="checker"></div>
      <div className="glow"></div>
      <div className="wrap">
        <div className="section-head">
          <h2>
            Powering
            <br />
            the Build
          </h2>
          <p>
            Every sponsor's product ships in a real competition vehicle -
            case-study exposure a track record can't buy yet.
          </p>
        </div>

        <div className="tier-grid">
          {tiers.map((t) => (
            <div
              className={`tier ${t.key}${activeKey === t.key ? " active" : ""}`}
              key={t.key}
              onClick={() => handleSelect(t.key)}
            >
              <div className="tier-top">{t.icon}</div>
              <div className="tier-name">{t.name}</div>
              <div className="price">{t.price}</div>
              <ul>
                {t.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="sponsor-cta">
          <div>
            <div className="l1">Open for 2026–27</div>
            <div className="l2">
              We're early - which means there's still room to shape what this
              partnership looks like. Come build something with us from the
              ground up.
            </div>
          </div>
          <a href="#contact-section" className="btn btn-primary">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
