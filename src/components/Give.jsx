import Ico from "../icons";
import Reveal from "./Reveal";
import FireDivider from "./FireDivider";
function Give() {
  const tiers = [
    {
      icon: <path d="M12 2C7 7 7 11 9 14a3 3 0 0 0 6 0c2-3 1-7-3-12z" />,
      title: "Mission Support",
      body: "Fuel ongoing evangelism, campus invasions, and the day-to-day work of the ministry.",
    },
    {
      icon: <path d="M12 2v20M5 9h14M7 14c0 2 2.2 3.5 5 3.5s5-1.5 5-3.5" />,
      title: "Crusade Sponsorship",
      body: "Help stage city-wide crusades and healing meetings that reach the multitudes.",
    },
    {
      icon: <path d="M9 2h6v7h7v6h-7v9H9v-9H2V9h7z" />,
      title: "Medical Outreach Fund",
      body: "Provide free consultations, screenings, and medicines on the field.",
    },
  ];
  return (
    <section id="give" className="give">
      <div className="give-bg" />
      <div className="wrap give-in">
        <Reveal as="span" className="eyebrow center">Support the Mission</Reveal>
        <Reveal as="h2" className="head" style={{ marginTop: ".7rem" }}>
          Your seed carries<br /><span className="lit">the fire farther.</span>
        </Reveal>
        <Reveal as="p" className="lede" style={{ margin: "1.3rem auto 0", textAlign: "center" }}>
          Every gift helps us preach the Gospel, hold crusades, disciple believers, and bring free medical
          care to communities that need it. Partner with what God is doing across the nations.
        </Reveal>
        <div className="give-tiers">
          {tiers.map((t) => (
            <Reveal as="div" className="tier" key={t.title}>
              <div className="ti">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{t.icon}</svg>
              </div>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <a href="#contact" className="btn btn-fire" style={{ fontSize: "1.02rem", padding: "1.05em 2.2em" }}>
            Give Now {Ico.arrow}
          </a>
        </Reveal>
        <Reveal as="p" style={{ marginTop: "1.1rem", fontSize: ".82rem", color: "var(--ash-dim)" }}>
          To set up giving, reach the ministry through the contact details below — a giving channel can
          be arranged for you.
        </Reveal>
      </div>
    </section>
  );
}

export default Give;
