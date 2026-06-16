import { useEffect, useState } from "react";
import { LOGO_SRC } from "../assets";
import Ico from "../icons.jsx";
function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#home" className="brand">
              <img src={LOGO_SRC} alt="Healing Nation Global Outreach emblem" style={{ width: 46, height: 46, filter: "drop-shadow(0 0 10px rgba(255,106,24,.45))" }} />
              <span style={{ lineHeight: 1.05 }}>
                <b style={{ fontFamily: "'Cinzel',serif", fontWeight: 700, color: "var(--cream)", fontSize: "1.02rem", letterSpacing: ".04em" }}>HEALING NATION</b>
                <span style={{ display: "block", fontWeight: 500, fontSize: ".62rem", letterSpacing: ".32em", textTransform: "uppercase", color: "var(--ember)", marginTop: 3 }}>Global Outreach</span>
              </span>
            </a>
            <p style={{ color: "var(--gold-soft)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", fontSize: ".82rem", marginBottom: ".6rem" }}>Winning All for Christ</p>
            <p>A Christ-centered ministry carrying the fire of God to the nations through evangelism, healing, discipleship, and medical outreach.</p>
            <p style={{ marginTop: ".6rem", fontSize: ".85rem", color: "var(--ash)" }}>
              <a href="tel:+2348121848107" style={{ color: "var(--ash)", textDecoration: "none" }}>+234 812 184 8107</a>
              {" · "}
              <a href="tel:07035216257" style={{ color: "var(--ash)", textDecoration: "none" }}>07035216257</a>
            </p>
            <p className="foot-scripture">&ldquo;Go ye into all the world, and preach the gospel to every creature.&rdquo; &mdash; Mark 16:15</p>
          </div>
          <div className="foot-col">
            <h5>Explore</h5>
            <a href="#about">The Mandate</a>
            <a href="#founder">The Founder</a>
            <a href="#ministries">Ministry Arms</a>
            <a href="#medical">Medical Outreach</a>
            <a href="#media">Media &amp; Sermons</a>
          </div>
          <div className="foot-col">
            <h5>Get Involved</h5>
            <a href="#events">Upcoming Events</a>
            <a href="#give">Give / Support</a>
            <a href="#contact">Prayer Request</a>
            <a href="#contact">Host an Outreach</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="foot-bottom">
          <p>&copy; {year} Healing Nation Global Outreach. All rights reserved.</p>
          <p className="tag">Taking the fire of God to the nations</p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Top-level app: scroll-reveal + mobile menu state live here
   ============================================================ */

export default Footer;
