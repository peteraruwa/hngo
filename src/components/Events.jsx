import Reveal from "./Reveal";
import FireDivider from "./FireDivider";
function Events() {
  const list = [
    { m: "Soon", d: "01", title: "Campus Revival Night", loc: "University Campus · South-South", type: "Campus Invasion" },
    { m: "Soon", d: "02", title: "City Crusade & Healing Outreach", loc: "City Square · Reaching the Region", type: "Crusade" },
    { m: "Soon", d: "03", title: "Medical Mission Week", loc: "Host Community · To be announced", type: "Medical Outreach" },
  ];
  return (
    <section id="events">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Upcoming Events</Reveal>
        <Reveal as="h2" className="head">Where the fire<br /><span className="lit">is falling next.</span></Reveal>
        <div className="events">
          {list.map((e) => (
            <Reveal as="div" className="event" key={e.title}>
              <div className="date-chip"><div className="m">{e.m}</div><div className="d">{e.d}</div></div>
              <div>
                <h4>{e.title}</h4>
                <div className="loc">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {e.loc}
                </div>
              </div>
              <div className="ev-type">{e.type}</div>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" style={{ marginTop: "1.8rem", fontSize: ".9rem", color: "var(--ash-dim)" }}>
          Dates and venues are announced ahead of each program.{" "}
          <a href="#contact" style={{ color: "var(--gold-soft)" }}>Contact us</a> to host an outreach in
          your city or campus.
        </Reveal>
      </div>
    </section>
  );
}

export default Events;
