import { useEffect, useRef, useState } from "react";
import { mediaItems } from "../data/media.js";

const trackItems = [...mediaItems, ...mediaItems];

export default function Media() {
  const [featuredIndex, setFeaturedIndex] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const gridRef = useRef(null);
  const skipAnim = useRef(false);

  // scroll the row to the current slide whenever it changes
  useEffect(() => {
    const track = gridRef.current;
    if (!track) return;
    const item = track.children[slideIndex];
    if (item) {
      track.scrollTo({
        left: item.offsetLeft - track.offsetLeft,
        behavior: skipAnim.current ? "auto" : "smooth",
      });
      skipAnim.current = false;
    }
  }, [slideIndex]);

  // auto-advance every 2s, always moving right; once the duplicated set has
  // played through, snap back invisibly to the start and keep going
  useEffect(() => {
    const id = setInterval(() => {
      if (featuredIndex === null) {
        setSlideIndex((i) => {
          if (i >= mediaItems.length) {
            skipAnim.current = true;
            return 0;
          }
          return i + 1;
        });
      }
    }, 2000);
    return () => clearInterval(id);
  }, [featuredIndex]);

  return (
    <section id="media">
      <div className="checker"></div>
      <div className="wrap">
        <div className="section-head">
          <h2>Media</h2>
          <p>
            From the lecture hall to the workshop floor - a look at the build in
            progress.
          </p>
        </div>

        {featuredIndex === null && (
          <div className="media-grid" ref={gridRef}>
            {trackItems.map((item, i) => (
              <figure
                key={`${item.src}-${i}`}
                onClick={() => setFeaturedIndex(i % mediaItems.length)}
              >
                <img src={item.src} alt={item.alt} />
              </figure>
            ))}
          </div>
        )}

        {featuredIndex !== null && (
          <div className="media-featured">
            <div className="big-wrap animate" key={featuredIndex}>
              <img
                src={mediaItems[featuredIndex].src}
                alt={mediaItems[featuredIndex].alt}
              />
              <button
                className="modal-close"
                onClick={() => setFeaturedIndex(null)}
              >
                ✕
              </button>
            </div>
            <div className="media-strip">
              {mediaItems.map((item, i) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  className={i === featuredIndex ? "active" : ""}
                  onClick={() => setFeaturedIndex(i)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
