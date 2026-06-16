import { useState } from "react";
function PrayerForm() {
  const [noteShown, setNoteShown] = useState(false);
  const timerRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setNoteShown(true);
    form.reset();
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setNoteShown(false), 9000);
  }

  return (
    <Reveal as="form" className="prayer" onSubmit={handleSubmit} noValidate>
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
      <button type="submit" className="btn btn-fire">
        Send Request
        <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="m22 2-7 20-4-9-9-4z" />
        </svg>
      </button>
      <div className={`form-note ${noteShown ? "show" : ""}`}>
        Thank you — your request has been received. We are believing God with you.
      </div>
    </Reveal>
  );
}

export default PrayerForm;
