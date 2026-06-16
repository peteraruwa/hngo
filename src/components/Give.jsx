import { useState } from "react";
import Ico from "../icons";
import Reveal from "./Reveal";

/* Replace with your actual Paystack public key */
const PAYSTACK_PUBLIC_KEY = "pk_live_REPLACE_WITH_YOUR_PAYSTACK_KEY";
const MINISTRY_EMAIL = "info@healingnationglobal.org";

const TIERS = [
  {
    icon: <path d="M12 2C7 7 7 11 9 14a3 3 0 0 0 6 0c2-3 1-7-3-12z" />,
    title: "Mission Support",
    body: "Fuel ongoing evangelism, campus invasions, and the day-to-day work of the ministry.",
    amounts: [1000, 5000, 10000],
  },
  {
    icon: <path d="M12 2v20M5 9h14M7 14c0 2 2.2 3.5 5 3.5s5-1.5 5-3.5" />,
    title: "Crusade Sponsorship",
    body: "Help stage city-wide crusades and healing meetings that reach the multitudes.",
    amounts: [5000, 20000, 50000],
  },
  {
    icon: <path d="M9 2h6v7h7v6h-7v9H9v-9H2V9h7z" />,
    title: "Medical Outreach Fund",
    body: "Provide free consultations, screenings, and medicines on the field.",
    amounts: [2000, 10000, 25000],
  },
];

function DonateModal({ tier, onClose }) {
  const [amount, setAmount] = useState(tier.amounts[1]);
  const [custom, setCustom] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const finalAmount = custom ? parseInt(custom, 10) : amount;

  function handlePay(e) {
    e.preventDefault();
    if (!email || !finalAmount || finalAmount < 100) return;
    setLoading(true);

    /* Load Paystack inline script dynamically */
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => {
      const handler = window.PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email,
        amount: finalAmount * 100,
        currency: "NGN",
        metadata: { custom_fields: [{ display_name: "Donor Name", variable_name: "name", value: name }, { display_name: "Giving For", variable_name: "tier", value: tier.title }] },
        callback: () => { setLoading(false); onClose(); alert("Thank you! Your gift has been received. God bless you."); },
        onClose: () => setLoading(false),
      });
      handler.openIframe();
    };
    document.body.appendChild(script);
  }

  return (
    <div className="gallery-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Donate to ${tier.title}`}>
      <div className="donate-modal" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close" onClick={onClose} aria-label="Close">✕</button>
        <h3>Give to {tier.title}</h3>
        <p style={{ color: "var(--ash-dim)", fontSize: ".9rem", marginBottom: "1.4rem" }}>{tier.body}</p>

        <form onSubmit={handlePay}>
          <div className="field">
            <label>Your Name</label>
            <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="field">
            <label>Email Address <span style={{ color: "var(--ember)" }}>*</span></label>
            <input type="email" placeholder="For your receipt" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label>Select Amount (₦)</label>
            <div className="amount-chips">
              {tier.amounts.map((a) => (
                <button
                  key={a}
                  type="button"
                  className={`amount-chip${amount === a && !custom ? " active" : ""}`}
                  onClick={() => { setAmount(a); setCustom(""); }}
                >
                  ₦{a.toLocaleString()}
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <label>Or enter custom amount (₦)</label>
            <input
              type="number"
              placeholder="e.g. 15000"
              min="100"
              value={custom}
              onChange={(e) => { setCustom(e.target.value); setAmount(0); }}
            />
          </div>
          <button type="submit" className="btn btn-fire" style={{ width: "100%", justifyContent: "center", marginTop: ".5rem" }} disabled={loading}>
            {loading ? "Opening payment…" : `Give ₦${(finalAmount || 0).toLocaleString()} Now ${Ico.arrow ? "" : "→"}`}
            {!loading && Ico.arrow}
          </button>
          <p style={{ fontSize: ".75rem", color: "var(--ash-dim)", marginTop: ".8rem", textAlign: "center" }}>
            Secured by Paystack. You can also give via bank transfer — contact{" "}
            <a href={`mailto:${MINISTRY_EMAIL}`} style={{ color: "var(--gold-soft)" }}>{MINISTRY_EMAIL}</a>.
          </p>
        </form>
      </div>
    </div>
  );
}

function Give() {
  const [activeTier, setActiveTier] = useState(null);

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
          {TIERS.map((t) => (
            <Reveal as="div" className="tier" key={t.title}>
              <div className="ti">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{t.icon}</svg>
              </div>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
              <button
                className="btn btn-fire"
                style={{ marginTop: "1.2rem", width: "100%", justifyContent: "center", fontSize: ".9rem" }}
                onClick={() => setActiveTier(t)}
              >
                Give Now {Ico.arrow}
              </button>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" style={{ marginTop: "1.6rem", fontSize: ".82rem", color: "var(--ash-dim)", textAlign: "center" }}>
          You can also give via bank transfer. Email{" "}
          <a href={`mailto:${MINISTRY_EMAIL}`} style={{ color: "var(--gold-soft)" }}>{MINISTRY_EMAIL}</a>{" "}
          to receive bank details.
        </Reveal>
      </div>

      {activeTier && <DonateModal tier={activeTier} onClose={() => setActiveTier(null)} />}
    </section>
  );
}

export default Give;
