import { useState } from "react";
import Reveal from "./Reveal";

const VIDEOS = [
  { src: "/media/outreach-1.mp4", label: "Street Outreach · Field Ministry" },
  { src: "/media/outreach-2.mp4", label: "Community Evangelism" },
  { src: "/media/outreach-3.mp4", label: "Reaching the Unreached" },
  { src: "/media/outreach-4.mp4", label: "Crusade Moments" },
  { src: "/media/outreach-5.mp4", label: "Lives Being Touched" },
];

/* Photo filenames — drop files into public/media/ to activate */
const PHOTOS = [
  { src: "/media/photo-1.jpg", alt: "Outreach team with community members" },
  { src: "/media/photo-2.jpg", alt: "Community gathering under shelter" },
  { src: "/media/photo-3.jpg", alt: "Ministry reaching local residents" },
  { src: "/media/photo-4.jpg", alt: "Team photo after outreach" },
  { src: "/media/photo-5.jpg", alt: "Preaching to the community" },
];

function VideoModal({ src, label, onClose }) {
  return (
    <div className="gallery-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={label}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close" onClick={onClose} aria-label="Close video">✕</button>
        <video src={src} controls autoPlay playsInline className="gallery-video-full" />
        <p className="gallery-video-label">{label}</p>
      </div>
    </div>
  );
}

function Gallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="gallery" className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Outreach Gallery</Reveal>
        <Reveal as="h2" className="head">
          The fire on<br /><span className="lit">the ground.</span>
        </Reveal>
        <Reveal as="p" className="lede" style={{ marginTop: "1.3rem" }}>
          Real moments from the field — communities reached, lives impacted, the Gospel preached
          where it's needed most.
        </Reveal>

        {/* Photo Grid */}
        <div className="gallery-photos">
          {PHOTOS.map((p, i) => (
            <Reveal key={i} as="div" className="gallery-photo-wrap">
              <img
                src={p.src}
                alt={p.alt}
                className="gallery-photo"
                loading="lazy"
                onError={(e) => { e.target.style.display = "none"; e.target.parentElement.classList.add("gallery-photo-missing"); }}
              />
              <div className="gallery-photo-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                <span>{p.alt}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Video Grid */}
        <Reveal as="h3" className="gallery-vid-head" style={{ marginTop: "3rem", marginBottom: "1.2rem", color: "var(--gold-soft)", fontFamily: "'Cinzel',serif", fontSize: "1.1rem", letterSpacing: ".06em", textTransform: "uppercase" }}>
          Video Moments
        </Reveal>
        <div className="gallery-videos">
          {VIDEOS.map((v, i) => (
            <Reveal key={i} as="div" className="gallery-vid-card" onClick={() => setActiveVideo(v)}>
              <video src={v.src} className="gallery-vid-thumb" muted preload="metadata" playsInline />
              <div className="gallery-vid-overlay">
                <div className="gallery-play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="gallery-vid-label">{v.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {activeVideo && (
        <VideoModal src={activeVideo.src} label={activeVideo.label} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}

export default Gallery;
