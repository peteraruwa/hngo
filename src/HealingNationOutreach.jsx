import { useState } from "react";
import { CSS } from "./styles";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Founder from "./components/Founder";
import Ministries from "./components/Ministries";
import Medical from "./components/Medical";
import Media from "./components/Media";
import Events from "./components/Events";
import Testimonies from "./components/Testimonies";
import Give from "./components/Give";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function HealingNationOutreach() {
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = root.querySelectorAll(".reveal");
    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="hn-root" ref={rootRef}>
      <style>{CSS}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />

      <About />
      <FireDivider />

      <VisionMission />
      <Founder />

      <Ministries />
      <FireDivider />

      <Medical />
      <FireDivider />

      <Media />
      <Events />
      <Testimonies />
      <Give />
      <Contact />
      <Footer />
    </div>
  );
}
