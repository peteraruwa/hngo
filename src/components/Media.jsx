import Ico from "../icons";
import Reveal from "./Reveal";
import FireDivider from "./FireDivider";
function Media() {
  const items = [
    { series: "Revival Series", title: "The Altar of Unquenchable Fire", meta: "Sermon · 48 min" },
    { series: "Crusade Highlights", title: "City Encounter — Healing Night", meta: "Highlights · 12 min" },
    { series: "Discipleship", title: "Walking in Truth & Purpose", meta: "Teaching · 36 min" },
  ];
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
          {items.map((it) => (
            <Reveal as="article" className="media-card" key={it.title}>
              <div className="media-thumb">
                <div className="play">{Ico.play}</div>
              </div>
              <div className="media-meta">
                <div className="series">{it.series}</div>
                <h4>{it.title}</h4>
                <p>{it.meta}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: "2.4rem" }}>
          <a href="#contact" className="btn btn-ghost">Request the full library {Ico.arrow}</a>
        </Reveal>
      </div>
    </section>
  );
}

export default Media;
