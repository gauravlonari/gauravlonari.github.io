import React from "react";
import "./about.css";
import dp1 from "../../assets/highlight1.jpg";
import dp2 from "../../assets/Profile4.JPG";
import { FaWpexplorer } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { MdAndroid } from "react-icons/md";

export default function About() {
  return (
    <section id="about">
      <h5>Introduction</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img
              src={dp1}
              onMouseOver={(e) => {
                e.currentTarget.src = dp2;
              }}
              onMouseOut={(e) => {
                e.currentTarget.src = dp1;
              }}
              alt="About Profile"
            />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsCodeSlash className="about_icon" />
              <h5>Web Developer</h5>
              <small>MERN Stack</small>
            </article>
            <article className="about_card">
              <MdAndroid className="about_icon" />
              <h5>Android Developer</h5>
              <small>Java</small>
            </article>
            <article className="about_card">
              <FaWpexplorer className="about_icon" />
              <h5>Explore & Wander</h5>
              <small>&#10084;</small>
            </article>
          </div>
          <ul>
            <li>
              As a curious and dedicated learner, I am committed to
              understanding things at their roots and pushing my limits through
              exploration and problem-solving
            </li>
            <li>
              My primary focus is on personal growth and development, both
              mentally and physically
            </li>
            <li>
              I am currently focused on enhancing my skills in programming
            </li>
            <li>
              I believe that continuous learning and improvement is essential
              to success in any endeavor, and I am always eager to learn and
              develop new skills that will help me reach my goals
            </li>
            {/* <li>Eat - Code - Workout - Sleep - Repeat</li> */}
            {/* <li>Explore - Adapt - Improve</li> */}
          </ul>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
