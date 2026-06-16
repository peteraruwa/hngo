import EmberCanvas from "./EmberCanvas";
import Ico from "../icons.jsx";
import Reveal from "./Reveal";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <EmberCanvas />
      <svg className="hero-globe" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="200" cy="200" r="160" />
        <ellipse cx="200" cy="200" rx="160" ry="62" />
        <ellipse cx="200" cy="200" rx="160" ry="120" />
        <ellipse cx="200" cy="200" rx="62" ry="160" />
        <ellipse cx="200" cy="200" rx="120" ry="160" />
        <line x1="40" y1="200" x2="360" y2="200" />
        <line x1="200" y1="40" x2="200" y2="360" />
      </svg>
      <div className="wrap hero-in">
        <Reveal as="span" className="tag-loc"><i />Global Outreach &middot; To Every Nation</Reveal>
        <Reveal as="p" className="hero-motto">WINNING ALL FOR CHRIST</Reveal>
        <Reveal as="h1" className="hero-title">
          Taking the <span className="fire">Fire of God</span><br />to the Nations
        </Reveal>
        <Reveal as="p" className="hero-sub">
          A Christ-centered ministry carrying an apostolic mandate for evangelism, revival, healing,
          discipleship, and medical outreach &mdash; winning souls and restoring lives across the earth.
        </Reveal>
        <Reveal className="hero-cta">
          <a href="#about" className="btn btn-fire">Join the Mission {Ico.arrow}</a>
          <a href="#give" className="btn btn-ghost">Give / Support</a>
          <a href="#media" className="btn btn-ghost">{Ico.play} Watch Sermons</a>
        </Reveal>
        <Reveal as="div" className="scripture-rail">
          &ldquo;The fire shall ever be burning upon the altar; it shall never go out.&rdquo;
          <cite>Leviticus 6:13</cite>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
