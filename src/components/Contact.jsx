import PrayerForm from "./PrayerForm";
import FireDivider from "./FireDivider";
function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <Reveal as="span" className="eyebrow">Get in Touch</Reveal>
            <Reveal as="h2" className="head" style={{ fontSize: "clamp(1.9rem,4vw,2.9rem)" }}>
              Reach the<br /><span className="lit">ministry.</span>
            </Reveal>
            <Reveal as="p" className="lede" style={{ marginTop: "1.2rem" }}>
              For partnership, to host an outreach, to invite the ministry, or simply to connect — we
              would love to hear from you.
            </Reveal>
            <div className="ci-list">
              <Reveal as="div" className="ci">
                <div className="cii">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
                  </svg>
                </div>
                <div><div className="k">Email</div><div className="v">info@healingnationglobal.org</div></div>
              </Reveal>
              <Reveal as="div" className="ci">
                <div className="cii">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                  </svg>
                </div>
                <div><div className="k">Phone / WhatsApp</div><div className="v">Available on request</div></div>
              </Reveal>
              <Reveal as="div" className="ci">
                <div className="cii">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div><div className="k">Reach</div><div className="v">Headquartered locally &middot; sent to every nation</div></div>
              </Reveal>
            </div>
            <Reveal className="socials">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" /></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3.5-.4-5a2.5 2.5 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4A2.5 2.5 0 0 0 2.4 7C2 8.5 2 12 2 12s0 3.5.4 5a2.5 2.5 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-5 .4-5zM10 15V9l5 3z" /></svg></a>
              <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.3 1.8 4.1 4 4.4V11c-1.5 0-2.9-.5-4-1.3V16a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2A2.8 2.8 0 1 0 13 16V3h3z" /></svg></a>
            </Reveal>
          </div>
          <PrayerForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
