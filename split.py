#!/usr/bin/env python3
import os

src = "/root/.claude/uploads/99c4e0d9-ec74-51fb-a7f2-63ad1659031d/4610bc26-HealingNationOutreach.jsx"

with open(src, "r", encoding="utf-8") as f:
    lines = f.readlines()

def get_lines(start, end):
    # 1-indexed, inclusive
    return "".join(lines[start-1:end])

os.makedirs("/home/user/hngo/src/components", exist_ok=True)

# 1. assets.js - lines 4-5 (LOGO_SRC and FOUNDER_PHOTO_SRC)
assets_content = get_lines(4, 5)
# These are like: const LOGO_SRC = `...`; const FOUNDER_PHOTO_SRC = `...`;
# We need to export them
assets_js = assets_content.rstrip()
# Replace 'const LOGO_SRC' with 'export const LOGO_SRC' etc
assets_js = assets_js.replace("const LOGO_SRC", "export const LOGO_SRC")
assets_js = assets_js.replace("const FOUNDER_PHOTO_SRC", "export const FOUNDER_PHOTO_SRC")
with open("/home/user/hngo/src/assets.js", "w", encoding="utf-8") as f:
    f.write(assets_js + "\n")

# 2. styles.js - lines 7-312
styles_content = get_lines(7, 312)
styles_js = styles_content.rstrip()
styles_js = styles_js.replace("const CSS", "export const CSS")
with open("/home/user/hngo/src/styles.js", "w", encoding="utf-8") as f:
    f.write(styles_js + "\n")

# 3. components/Reveal.jsx - lines 314-322
reveal_content = get_lines(314, 322).rstrip()
with open("/home/user/hngo/src/components/Reveal.jsx", "w", encoding="utf-8") as f:
    f.write(reveal_content + "\n\nexport default Reveal;\n")

# 4. components/FireDivider.jsx - lines 323-344
firediv_content = get_lines(323, 344).rstrip()
with open("/home/user/hngo/src/components/FireDivider.jsx", "w", encoding="utf-8") as f:
    f.write('import React from "react";\n')
    f.write(firediv_content + "\n\nexport default FireDivider;\n")

# 5. components/EmberCanvas.jsx - lines 345-431
ember_content = get_lines(345, 431).rstrip()
with open("/home/user/hngo/src/components/EmberCanvas.jsx", "w", encoding="utf-8") as f:
    f.write('import { useEffect, useRef } from "react";\n')
    f.write(ember_content + "\n\nexport default EmberCanvas;\n")

# 6. icons.js - lines 432-457
ico_content = get_lines(432, 457).rstrip()
ico_js = ico_content.replace("const Ico", "const Ico")
with open("/home/user/hngo/src/icons.js", "w", encoding="utf-8") as f:
    f.write(ico_js + "\n\nexport default Ico;\n")

# 7. components/NavBar.jsx - lines 458-504
navbar_content = get_lines(458, 504).rstrip()
with open("/home/user/hngo/src/components/NavBar.jsx", "w", encoding="utf-8") as f:
    f.write('import { LOGO_SRC } from "../assets";\n')
    f.write('import Ico from "../icons";\n')
    f.write(navbar_content + "\n\nexport default NavBar;\n")

# 8. components/Hero.jsx - lines 505-541
hero_content = get_lines(505, 541).rstrip()
with open("/home/user/hngo/src/components/Hero.jsx", "w", encoding="utf-8") as f:
    f.write('import EmberCanvas from "./EmberCanvas";\n')
    f.write('import Ico from "../icons";\n')
    f.write(hero_content + "\n\nexport default Hero;\n")

# 9. components/About.jsx - lines 542-595
about_content = get_lines(542, 595).rstrip()
with open("/home/user/hngo/src/components/About.jsx", "w", encoding="utf-8") as f:
    f.write('import Reveal from "./Reveal";\n')
    f.write('import FireDivider from "./FireDivider";\n')
    f.write(about_content + "\n\nexport default About;\n")

# 10. components/VisionMission.jsx - lines 596-629
vision_content = get_lines(596, 629).rstrip()
with open("/home/user/hngo/src/components/VisionMission.jsx", "w", encoding="utf-8") as f:
    f.write('import Reveal from "./Reveal";\n')
    f.write('import FireDivider from "./FireDivider";\n')
    f.write(vision_content + "\n\nexport default VisionMission;\n")

# 11. components/Founder.jsx - lines 630-685
founder_content = get_lines(630, 685).rstrip()
with open("/home/user/hngo/src/components/Founder.jsx", "w", encoding="utf-8") as f:
    f.write('import { FOUNDER_PHOTO_SRC } from "../assets";\n')
    f.write('import Reveal from "./Reveal";\n')
    f.write('import FireDivider from "./FireDivider";\n')
    f.write(founder_content + "\n\nexport default Founder;\n")

# 12. components/Ministries.jsx - lines 686-744
ministries_content = get_lines(686, 744).rstrip()
with open("/home/user/hngo/src/components/Ministries.jsx", "w", encoding="utf-8") as f:
    f.write('import Reveal from "./Reveal";\n')
    f.write('import FireDivider from "./FireDivider";\n')
    f.write(ministries_content + "\n\nexport default Ministries;\n")

# 13. components/Medical.jsx - lines 745-818
medical_content = get_lines(745, 818).rstrip()
with open("/home/user/hngo/src/components/Medical.jsx", "w", encoding="utf-8") as f:
    f.write('import Reveal from "./Reveal";\n')
    f.write('import FireDivider from "./FireDivider";\n')
    f.write(medical_content + "\n\nexport default Medical;\n")

# 14. components/Media.jsx - lines 819-855
media_content = get_lines(819, 855).rstrip()
with open("/home/user/hngo/src/components/Media.jsx", "w", encoding="utf-8") as f:
    f.write('import Ico from "../icons";\n')
    f.write('import Reveal from "./Reveal";\n')
    f.write('import FireDivider from "./FireDivider";\n')
    f.write(media_content + "\n\nexport default Media;\n")

# 15. components/Events.jsx - lines 856-894
events_content = get_lines(856, 894).rstrip()
with open("/home/user/hngo/src/components/Events.jsx", "w", encoding="utf-8") as f:
    f.write('import Reveal from "./Reveal";\n')
    f.write('import FireDivider from "./FireDivider";\n')
    f.write(events_content + "\n\nexport default Events;\n")

# 16. components/Testimonies.jsx - lines 895-922
testimonies_content = get_lines(895, 922).rstrip()
with open("/home/user/hngo/src/components/Testimonies.jsx", "w", encoding="utf-8") as f:
    f.write('import Reveal from "./Reveal";\n')
    f.write('import FireDivider from "./FireDivider";\n')
    f.write(testimonies_content + "\n\nexport default Testimonies;\n")

# 17. components/Give.jsx - lines 923-977
give_content = get_lines(923, 977).rstrip()
with open("/home/user/hngo/src/components/Give.jsx", "w", encoding="utf-8") as f:
    f.write('import Ico from "../icons";\n')
    f.write('import Reveal from "./Reveal";\n')
    f.write('import FireDivider from "./FireDivider";\n')
    f.write(give_content + "\n\nexport default Give;\n")

# 18. components/PrayerForm.jsx - lines 978-1033
prayer_content = get_lines(978, 1033).rstrip()
with open("/home/user/hngo/src/components/PrayerForm.jsx", "w", encoding="utf-8") as f:
    f.write('import { useState } from "react";\n')
    f.write(prayer_content + "\n\nexport default PrayerForm;\n")

# 19. components/Contact.jsx - lines 1034-1087
contact_content = get_lines(1034, 1087).rstrip()
with open("/home/user/hngo/src/components/Contact.jsx", "w", encoding="utf-8") as f:
    f.write('import PrayerForm from "./PrayerForm";\n')
    f.write('import FireDivider from "./FireDivider";\n')
    f.write(contact_content + "\n\nexport default Contact;\n")

# 20. components/Footer.jsx - lines 1088-1135
footer_content = get_lines(1088, 1135).rstrip()
with open("/home/user/hngo/src/components/Footer.jsx", "w", encoding="utf-8") as f:
    f.write('import { LOGO_SRC } from "../assets";\n')
    f.write('import Ico from "../icons";\n')
    f.write(footer_content + "\n\nexport default Footer;\n")

# 21. HealingNationOutreach.jsx - lines 1136-1197
main_content = get_lines(1136, 1197).rstrip()
with open("/home/user/hngo/src/HealingNationOutreach.jsx", "w", encoding="utf-8") as f:
    f.write('import { useState } from "react";\n')
    f.write('import { CSS } from "./styles";\n')
    f.write('import NavBar from "./components/NavBar";\n')
    f.write('import Hero from "./components/Hero";\n')
    f.write('import About from "./components/About";\n')
    f.write('import VisionMission from "./components/VisionMission";\n')
    f.write('import Founder from "./components/Founder";\n')
    f.write('import Ministries from "./components/Ministries";\n')
    f.write('import Medical from "./components/Medical";\n')
    f.write('import Media from "./components/Media";\n')
    f.write('import Events from "./components/Events";\n')
    f.write('import Testimonies from "./components/Testimonies";\n')
    f.write('import Give from "./components/Give";\n')
    f.write('import Contact from "./components/Contact";\n')
    f.write('import Footer from "./components/Footer";\n')
    f.write(main_content + "\n")

print("Done! Files created.")
