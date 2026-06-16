import PrayerForm from "./PrayerForm";
import Reveal from "./Reveal";

/* Update these with real social handles */
const SOCIAL = {
  facebook: "https://facebook.com/healingnationglobal",
  instagram: "https://instagram.com/healingnationglobal",
  youtube: "https://youtube.com/@healingnationglobal",
  tiktok: "https://tiktok.com/@healingnationglobal",
};

/* Replace with the actual WhatsApp number (international format, no +) */
const WHATSAPP_NUMBER = "2348000000000";
const WHATSAPP_MSG = encodeURIComponent("Hello, I'd like to get in touch with Healing Nation Global Outreach.");

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
                <div>
                  <div className="k">Email</div>
                  <div className="v">
                    <a href="mailto:info@healingnationglobal.org" style={{ color: "inherit" }}>
                      info@healingnationglobal.org
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal as="div" className="ci">
                <div className="cii">
                  {/* WhatsApp icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.7.1-.2 0-.4-.1-.5-.1-.1-.7-1.8-1-2.4-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.5.1-.8.4C7 7.5 6 8.5 6 10.3c0 1.8 1.3 3.5 1.5 3.7.2.2 2.6 4 6.3 5.5 3.7 1.5 3.7 1 4.3.9.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.1-.3-.2-.7-.3z" />
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.4 5.3L2 22l4.8-1.4C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.2.9.9-3.1-.2-.4C3.5 14.5 3 13.3 3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9z" />
                  </svg>
                </div>
                <div>
                  <div className="k">Phone / WhatsApp</div>
                  <div className="v">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--gold-soft)" }}
                    >
                      Message us on WhatsApp →
                    </a>
                  </div>
                </div>
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
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" /></svg>
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3.5-.4-5a2.5 2.5 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4A2.5 2.5 0 0 0 2.4 7C2 8.5 2 12 2 12s0 3.5.4 5a2.5 2.5 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-5 .4-5zM10 15V9l5 3z" /></svg>
              </a>
              <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.3 1.8 4.1 4 4.4V11c-1.5 0-2.9-.5-4-1.3V16a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2A2.8 2.8 0 1 0 13 16V3h3z" /></svg>
              </a>
            </Reveal>
          </div>
          <PrayerForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
