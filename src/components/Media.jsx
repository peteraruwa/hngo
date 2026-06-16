import { useState } from "react";
import Ico from "../icons";
import Reveal from "./Reveal";

const SERMONS = [
  { series: "Revival Series", title: "The Altar of Unquenchable Fire", meta: "Sermon · Available on request", yt: null },
  { series: "Crusade Highlights", title: "City Encounter — Healing Night", meta: "Highlights · Available on request", yt: null },
  { series: "Discipleship", title: "Walking in Truth & Purpose", meta: "Teaching · Available on request", yt: null },
];

function SermonCard({ it }) {
  return (
    <Reveal as="article" className="media-card">
      <div className="media-thumb">
        {it.yt ? (
          <iframe
            src={`https://www.youtube.com/embed/${it.yt}`}
            title={it.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            style={{ width: "100%", height: "100%", border: 0, position: "absolute", inset: 0 }}
          />
        ) : (
          <div className="play">{Ico.play}</div>
        )}
      </div>
      <div className="media-meta">
        <div className="series">{it.series}</div>
        <h4>{it.title}</h4>
        <p>{it.meta}</p>
      </div>
    </Reveal>
  );
}

function Media() {
  return (
    <section id="media" className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Media &amp; Sermons</Reveal>
        <Reveal as="h2" className="head">Watch. Listen.<br /><span className="lit">Catch the fire.</span></Reveal>
        <Reveal as="p" className="lede" style={{ marginTop: "1.3rem" }}>
          Messages, crusade moments, and testimonies — the Word preached with power, available wherever
          you are.
        </Reveal>
        <div className="media-grid">
          {SERMONS.map((it) => (
            <SermonCard key={it.title} it={it} />
          ))}
        </div>
        <Reveal style={{ marginTop: "2.4rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="https://www.youtube.com/@healingnationglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-fire"
          >
            Watch on YouTube {Ico.arrow}
          </a>
          <a href="#gallery" className="btn btn-ghost">View Field Gallery {Ico.arrow}</a>
        </Reveal>
      </div>
    </section>
  );
}

export default Media;
