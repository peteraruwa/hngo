import Reveal from "./Reveal";
import FireDivider from "./FireDivider";
function Testimonies() {
  const list = [
    { who: "Grace O.", tag: "Healing Crusade", initial: "G", text: "I was healed during the outreach. The pain that troubled me for years disappeared instantly." },
    { who: "Daniel A.", tag: "Campus Invasion", initial: "D", text: "I gave my life to Christ at the campus meeting and finally found purpose and direction." },
    { who: "Mary E.", tag: "Medical Mission", initial: "M", text: "The free medical outreach saved my family at a time we could not afford care. We are forever grateful." },
  ];
  return (
    <section className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Testimonies</Reveal>
        <Reveal as="h2" className="head">Lives the fire<br /><span className="lit">has touched.</span></Reveal>
        <div className="testi-grid">
          {list.map((t) => (
            <Reveal as="div" className="testi" key={t.who}>
              <div className="mark">&ldquo;</div>
              <p>{t.text}</p>
              <div className="who">
                <i>{t.initial}</i>
                <span><b>{t.who}</b><small>{t.tag}</small></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
