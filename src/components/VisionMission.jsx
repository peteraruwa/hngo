import Reveal from "./Reveal";
import FireDivider from "./FireDivider";
function VisionMission() {
  return (
    <section className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Vision &amp; Mission</Reveal>
        <div className="vm-grid" style={{ marginTop: "2.4rem" }}>
          <Reveal as="blockquote" className="vm-quote">
            To take the fire of God to the nations — raising a generation that walks in{" "}
            <em>truth, power, and purpose</em>, until every people group has encountered the love of
            Jesus Christ.
          </Reveal>
          <div className="vm-cards">
            <Reveal as="div" className="vm-card">
              <div className="k">Our Vision</div>
              <h4>Revival without borders</h4>
              <p>A move of God that crosses campuses, cities, and continents — leaving transformed lives and established believers in its wake.</p>
            </Reveal>
            <Reveal as="div" className="vm-card">
              <div className="k">Our Mission</div>
              <h4>Preach, heal, disciple</h4>
              <p>To proclaim the Gospel, demonstrate God's healing power, and raise kingdom ambassadors grounded in sound doctrine.</p>
            </Reveal>
            <Reveal as="div" className="vm-card">
              <div className="k">Our Mandate</div>
              <h4>Apostolic &amp; sent</h4>
              <p>A strong apostolic commission to establish the work of Christ and equip the saints for the work of ministry.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
