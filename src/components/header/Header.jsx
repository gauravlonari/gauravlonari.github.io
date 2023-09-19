import React, { useState } from "react";
import CTA from "./CTA";
import "./header.css";
import dp2 from "../../assets/Profile5.png";
import dp1 from "../../assets/Profile6.png";
import Socials from "./Socials";
import Typewriter from "typewriter-effect";

export default function Header() {
  const [profileIcon, setProfileIcon] = useState(dp1);

  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Gaurav Lonari</h1>
        <h5 className="text-light">
          <Typewriter
            options={{
              strings: [
                "Software Developer",
                "Engineer",
                "Social Activist",
                "Android Developer",
                "Tech Geek",
                "Full Stack Web Developer",
                "Explorer",
                "Youtuber",
                "Indie Game Developer",
                "Tweaker",
                "Tech Enthusiast"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h5>
        <CTA />
        <Socials />
        <div
          className="me"
          onMouseOver={() => {
            setProfileIcon(dp2);
          }}
          onMouseOut={() => {
            setProfileIcon(dp1);
          }}
        >
          <img src={profileIcon} alt="Front Profile" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
