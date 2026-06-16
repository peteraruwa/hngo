import Reveal from "./Reveal";
import FireDivider from "./FireDivider";
function Ministries() {
  const arms = [
    {
      num: "I",
      title: "Campus Invasion",
      body: "Evangelism and revival meetings in universities and campuses — igniting students, raising young believers, and planting fire on the next generation.",
      icon: (
        <>
          <path d="M22 10 12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5" />
        </>
      ),
    },
    {
      num: "II",
      title: "Crusades & Evangelistic Outreaches",
      body: "City-wide crusades, healing and deliverance meetings, and mass evangelism programs that gather communities to encounter the power of God.",
      icon: <path d="M12 2v20M5 9h14M7 14c0 2 2.2 3.5 5 3.5s5-1.5 5-3.5" />,
    },
    {
      num: "III",
      title: "Discipleship & Bible School",
      body: "Sound doctrinal teaching, leadership training, and spiritual development — establishing converts and equipping leaders to walk in purpose.",
      icon: (
        <>
          <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
          <path d="M19 3v18" />
        </>
      ),
    },
  ];
  return (
    <section id="ministries" className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">The Ministry Arms</Reveal>
        <Reveal as="h2" className="head">Three arms.<br /><span className="lit">One advancing fire.</span></Reveal>
        <Reveal as="p" className="lede" style={{ marginTop: "1.3rem" }}>
          Born as a campus revival vision during university days, the ministry now moves through three
          coordinated arms — each carrying the same flame to a different field.
        </Reveal>
        <div className="arms">
          {arms.map((a) => (
            <Reveal as="div" className="arm" key={a.num}>
              <div className="num">{a.num}</div>
              <div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
              <div className="arm-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{a.icon}</svg>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ministries;
