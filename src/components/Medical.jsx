import Reveal from "./Reveal";
import FireDivider from "./FireDivider";
function Medical() {
  const cards = [
    {
      icon: (
        <>
          <path d="M12 7v10M7 12h10" />
          <rect x="3" y="3" width="18" height="18" rx="4" />
        </>
      ),
      title: "Free Consultations",
      body: "Qualified medical attention at no cost to those who need it most.",
    },
    {
      icon: <path d="M3 12h4l2 5 4-12 2 7h6" />,
      title: "Health Screenings",
      body: "Early checks for blood pressure, sugar, and other vital indicators.",
    },
    {
      icon: (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </>
      ),
      title: "Community Education",
      body: "Practical health teaching that empowers families to thrive.",
    },
    {
      icon: <path d="M12 3v18M5 8c0-2 2-4 7-4s7 2 7 4M7 13c0 2 2 3.5 5 3.5s5-1.5 5-3.5" />,
      title: "Prayer & Healing",
      body: "Every clinic carries faith — ministering to spirit alongside body.",
    },
  ];
  return (
    <section id="medical">
      <div className="wrap">
        <div className="med-grid">
          <div>
            <Reveal as="span" className="eyebrow">Medical Outreach</Reveal>
            <Reveal as="h2" className="head" style={{ fontSize: "clamp(1.9rem,4vw,2.9rem)" }}>
              Healing for the<br /><span className="lit">whole person.</span>
            </Reveal>
            <Reveal as="p" className="lede" style={{ marginTop: "1.2rem" }}>
              Where the Gospel meets the practical needs of the body. Our medical missions bring free,
              compassionate healthcare into communities — integrated with prayer, healing, and the hope
              of Christ.
            </Reveal>
            <div className="med-services">
              {cards.map((c) => (
                <Reveal as="div" className="med-card" key={c.title}>
                  <div className="mi">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{c.icon}</svg>
                  </div>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal as="div" className="med-art">
            <svg className="cross" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M9 2h6v7h7v6h-7v9H9v-9H2V9h7z" />
            </svg>
            <blockquote>
              &ldquo;They shall lay hands on the sick, and they shall recover.&rdquo;
              <cite>Mark 16:18</cite>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Medical;
