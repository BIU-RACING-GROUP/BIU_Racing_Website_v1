import { useState } from "react";
import { captain, departments } from "../data/departments.jsx";

export default function Team() {
  const [activeKey, setActiveKey] = useState(null);

  const allNodes = [captain, ...departments];
  const active = allNodes.find((d) => d.key === activeKey);

  function handleSelect(key) {
    setActiveKey((prev) => (prev === key ? null : key));
  }

  return (
    <section id="team">
      <div className="checker"></div>
      <div className="glow"></div>
      <div className="wrap">
        <div className="section-head">
          <h2>
            Meet the
            <br />
            Team
          </h2>
          <p>
            Five departments, one car. Every lead reports into the captain - no
            silos. Tap a department to learn more.
          </p>
        </div>

        <div className="org-tree">
          <div className="tree-root">
            <div
              className={`tree-node captain${activeKey === "captain" ? " active" : ""}`}
              onClick={() => handleSelect("captain")}
            >
              <div className="icon-wrap">{captain.icon()}</div>
              <div className="dname">{captain.title}</div>
              <div className="dlead">{captain.lead}</div>
              <div className="tap-hint">Tap to learn more</div>
            </div>
          </div>
          <div className="tree-trunk"></div>
          <div className="tree-children">
            {departments.map((d) => (
              <div
                key={d.key}
                className={`tree-node${activeKey === d.key ? " active" : ""}`}
                onClick={() => handleSelect(d.key)}
              >
                <div className="icon-wrap">{d.icon()}</div>
                <div className="dname">{d.dname}</div>
                <div className="dlead">{d.lead}</div>
                <div className="tap-hint">Tap to learn more</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`dept-panel${active ? " open" : ""}`}>
          {active && (
            <>
              <button
                className="modal-close"
                onClick={() => setActiveKey(null)}
              >
                ✕
              </button>
              <div className="icon-wrap">
                {active.icon ? active.icon() : null}
              </div>
              <h3>{active.title || active.dname}</h3>
              <div className="dlead">{active.lead}</div>
              <p>{active.body}</p>
            </>
          )}
        </div>

        <div className="join-panel">
          <div>
            <h3>Want in on the build?</h3>
            <p>
              We're recruiting across every department - engineers, marketers,
              designers, and business minds who want to learn by building
              something real.
            </p>
          </div>
          <a href="#contact-section" className="btn btn-primary">
            Apply to Join
          </a>
        </div>
      </div>
    </section>
  );
}
