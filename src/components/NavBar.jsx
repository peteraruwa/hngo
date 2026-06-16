import { LOGO_SRC } from "../assets";
import Ico from "../icons";
function NavBar({ menuOpen, setMenuOpen }) {
  const links = [
    ["#about", "About"],
    ["#founder", "Founder"],
    ["#ministries", "Ministries"],
    ["#medical", "Medical"],
    ["#media", "Media"],
    ["#events", "Events"],
    ["#contact", "Contact"],
  ];
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="brand" aria-label="Healing Nation Global Outreach home">
          <img src={LOGO_SRC} alt="Healing Nation Global Outreach emblem" />
          <span style={{ lineHeight: 1.05 }}>
            <b>HEALING NATION</b>
            <span>Global Outreach</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map(([href, label]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <div className="nav-right">
          <a href="#give" className="btn btn-fire">Give {Ico.gift}</a>
          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {links.map(([href, label]) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a href="#give" className="btn btn-fire" onClick={() => setMenuOpen(false)}>Give / Support</a>
      </div>
    </header>
  );
}

export default NavBar;
