import Reveal from "./Reveal";

const EVENTS = [
  {
    m: "JUN",
    d: "28",
    title: "Campus Revival Night",
    loc: "University Campus · South-South, Nigeria",
    type: "Campus Invasion",
    detail: "An evening of worship, the Word, and encounters with God for students and young adults.",
  },
  {
    m: "JUL",
    d: "12",
    title: "City Crusade & Healing Outreach",
    loc: "City Square · Reaching the Region",
    type: "Crusade",
    detail: "Open-air gospel crusade with healing prayer, testimonies, and salvation calls.",
  },
  {
    m: "JUL",
    d: "20",
    title: "Medical Mission Week",
    loc: "Underserved Community · To be announced",
    type: "Medical Outreach",
    detail: "Free medical consultations, screenings, and medicines distributed to those in need.",
  },
];

function Events() {
  return (
    <section id="events">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Upcoming Events</Reveal>
        <Reveal as="h2" className="head">Where the fire<br /><span className="lit">is falling next.</span></Reveal>
        <div className="events">
          {EVENTS.map((e) => (
            <Reveal as="div" className="event" key={e.title}>
              <div className="date-chip">
                <div className="m">{e.m}</div>
                <div className="d">{e.d}</div>
              </div>
              <div style={{ flex: 1 }}>
                <h4>{e.title}</h4>
                <div className="loc">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {e.loc}
                </div>
                <p style={{ fontSize: ".85rem", color: "var(--ash-dim)", marginTop: ".4rem", lineHeight: 1.5 }}>{e.detail}</p>
              </div>
              <div className="ev-type">{e.type}</div>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" style={{ marginTop: "1.8rem", fontSize: ".9rem", color: "var(--ash-dim)" }}>
          Dates and venues are confirmed ahead of each program.{" "}
          <a href="#contact" style={{ color: "var(--gold-soft)" }}>Contact us</a> to host an outreach in
          your city or campus.
        </Reveal>
      </div>
    </section>
  );
}

export default Events;
