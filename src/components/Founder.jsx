import { FOUNDER_PHOTO_SRC } from "../assets";
import Reveal from "./Reveal";
import FireDivider from "./FireDivider";
function Founder() {
  return (
    <section id="founder">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">About the Founder</Reveal>
        <div className="founder-grid" style={{ marginTop: "2.6rem" }}>
          <Reveal as="div" className="portrait">
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img src={FOUNDER_PHOTO_SRC} alt="Dr. Edafe Kelvin Ezebue, Founder of Healing Nation Global Outreach" />
              <div className="cred-chip">Medical Doctor &middot; Evangelist</div>
            </div>
          </Reveal>
          <Reveal>
            <div className="f-role">Founder &amp; Visionary</div>
            <h3 className="f-name">Dr. Edafe Kelvin Ezebue</h3>
            <div className="f-bio">
              <p>
                <strong>Dr. Edafe Kelvin Ezebue</strong> is a dynamic servant of God, a seasoned teacher
                of the Word, and a trained medical doctor. He carries a strong apostolic mandate to
                spread the Gospel of Jesus Christ across the nations.
              </p>
              <p>
                He is the visionary behind Healing Nation Global Outreach — a ministry committed to
                revival, transformation, and raising kingdom ambassadors. A graduate of Igbinedion
                University, Okada, he distinguished himself through both academic excellence and
                spiritual leadership.
              </p>
              <p>
                Carrying a vision that stretches far beyond a single nation, he is widely recognized as a
                passionate evangelist, mentor, and spiritual father, raising believers who walk in truth,
                power, and purpose across the nations he is called to reach.
              </p>
            </div>
            <ul className="cred-list">
              {[
                "Two-time President, Redeemed Christian Fellowship",
                "President, Christian Community — Igbinedion University Chapter",
                "President, Christian Association of Nigerian Students — South-South Region",
              ].map((t) => (
                <li key={t}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
                  {t}
                </li>
              ))}
            </ul>
            <div className="f-tags">
              <span>Apostolic Vision</span><span>Medical Doctor</span><span>Bible Teacher</span><span>Mentor</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Founder;
