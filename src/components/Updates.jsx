import { useEffect, useRef, useState } from "react";
import { updates } from "../data/updates.js";

export default function Updates() {
  const [index, setIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.children[index];
    if (item) {
      track.scrollTo({
        left: item.offsetLeft - track.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [index]);

  function go(dir) {
    setIndex((i) => Math.min(Math.max(i + dir, 0), updates.length - 1));
  }

  return (
    <section id="updates">
      <div className="checker"></div>
      <div className="glow"></div>
      <div className="wrap">
        <div className="section-head">
          <h2>
            Latest
            <br />
            Updates
          </h2>
          <p>
            Real progress, in real time - swipe through what every department's
            been building.
          </p>
        </div>

        <div className="carousel-wrap">
          <div className="carousel-nav">
            <button
              className="arrow-btn"
              onClick={() => go(-1)}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              className="arrow-btn"
              onClick={() => go(1)}
              aria-label="Next"
            >
              →
            </button>
          </div>
          <div className="carousel" ref={trackRef}>
            {updates.map((u) => (
              <div
                className={`carousel-item${expandedId === u.id ? " expanded" : ""}`}
                key={u.id}
                onClick={() =>
                  setExpandedId((prev) => (prev === u.id ? null : u.id))
                }
              >
                <span className="date">{u.date}</span>
                <div className="head-row">
                  <span className={`cat-pill cat-${u.category}`}>
                    {u.category}
                  </span>
                </div>
                <h3>{u.title}</h3>
                <span className="update-summary">{u.summary}</span>
                <div className="tag-row">
                  {u.tags.map((t) => (
                    <span className="tag-chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stay-loop">
          <h3>Stay in the Loop</h3>
          <p>
            We post regular updates on Instagram and LinkedIn - follow us to see
            the car come to life in real time.
          </p>
          <div className="loop-actions">
            <a href="#" className="social-btn ig">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.6" r="1" fill="white" stroke="none" />
              </svg>
              <span className="social-btn-label">Follow on Instagram</span>
            </a>
            <a href="#" className="social-btn li">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="9" width="3.4" height="10" fill="white" />
                <circle cx="4.7" cy="5" r="2" fill="white" />
                <path
                  d="M9.6 9h3.2v1.7c.6-1.1 1.8-2 3.6-2 3.2 0 4 2.1 4 4.9V19h-3.4v-5.1c0-1.2 0-2.8-1.8-2.8s-2.1 1.4-2.1 2.7V19H9.6Z"
                  fill="white"
                />
              </svg>
              <span className="social-btn-label">Follow on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
