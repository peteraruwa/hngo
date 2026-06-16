import Reveal from "./Reveal";
import FireDivider from "./FireDivider";
function About() {
  const pillars = [
    {
      icon: <path d="M12 2C7 7 7 11 9 14a3 3 0 0 0 6 0c2-3 1-7-3-12z" />,
      icon2: <path d="M12 14c-1.5 1.5-1.5 4 0 6 1.5-2 1.5-4.5 0-6z" />,
      title: "Evangelism & Soul Winning",
      body: "Crusades, campus invasions, and mass outreaches that bring the lost face to face with the saving power of Jesus.",
    },
    {
      icon: <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />,
      title: "Healing & Deliverance",
      body: "The demonstration of God's power — the sick made whole, the bound set free, and faith stirred for the miraculous.",
    },
    {
      icon: (
        <>
          <path d="M12 5v14M5 12h14" />
          <circle cx="12" cy="12" r="9" />
        </>
      ),
      title: "Medical & Humanitarian",
      body: "Free medical care and compassion-driven service, meeting physical needs as we minister hope to the whole person.",
    },
  ];
  return (
    <section id="about">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">The Mandate</Reveal>
        <Reveal as="h2" className="head">
          One Gospel. One Fire.<br /><span className="lit">Sent to every nation.</span>
        </Reveal>
        <Reveal as="p" className="lede" style={{ marginTop: "1.3rem" }}>
          Healing Nation Global Outreach exists to preach Jesus Christ, demonstrate His power, and meet
          people at the point of their need — in spirit, soul, and body. What began as a campus revival
          vision now reaches cities and communities as a global outreach movement.
        </Reveal>
        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal as="div" className="pillar" key={i}>
              <div className="p-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {p.icon}{p.icon2}
                </svg>
              </div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
