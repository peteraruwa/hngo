import { useRef, useState } from "react";
import Reveal from "./Reveal";

/* Replace YOUR_FORM_ID with the ID from your Formspree dashboard at formspree.io */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function PrayerForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const timerRef = useRef(null);
  const formRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) { form.reportValidity(); return; }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setStatus("idle"), 9000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Reveal as="form" className="prayer" onSubmit={handleSubmit} noValidate ref={formRef}>
      <h3>Send a Prayer Request</h3>
      <p className="sub">Share your need — our team will stand with you in prayer.</p>
      <div className="field">
        <label htmlFor="pf-name">Your name</label>
        <input id="pf-name" name="name" type="text" placeholder="Full name" required />
      </div>
      <div className="field">
        <label htmlFor="pf-email">Email or phone</label>
        <input id="pf-email" name="contact" type="text" placeholder="So we can reach you" required />
      </div>
      <div className="field">
        <label htmlFor="pf-type">This is about</label>
        <select id="pf-type" name="type" defaultValue="A prayer request">
          <option>A prayer request</option>
          <option>Salvation / giving my life to Christ</option>
          <option>Healing</option>
          <option>Partnership or hosting an outreach</option>
          <option>General enquiry</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="pf-msg">Your request</label>
        <textarea id="pf-msg" name="message" placeholder="Tell us how we can pray with you…" required />
      </div>
      <button type="submit" className="btn btn-fire" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Request"}
        {status !== "sending" && (
          <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="m22 2-7 20-4-9-9-4z" />
          </svg>
        )}
      </button>
      {status === "success" && (
        <div className="form-note show">
          Thank you — your request has been received. We are believing God with you.
        </div>
      )}
      {status === "error" && (
        <div className="form-note show" style={{ borderColor: "var(--ember)", color: "var(--ember)" }}>
          Something went wrong. Please email us directly at{" "}
          <a href="mailto:info@healingnationglobal.org" style={{ color: "var(--ember)" }}>info@healingnationglobal.org</a>.
        </div>
      )}
    </Reveal>
  );
}

export default PrayerForm;
