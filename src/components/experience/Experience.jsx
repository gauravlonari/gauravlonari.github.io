import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skillset</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>Vanilla JS</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>Bootstrap 5</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>Android (XML)</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>Android (Java)</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>Java Server Pages</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Programming Languages</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>C</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_content_icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
