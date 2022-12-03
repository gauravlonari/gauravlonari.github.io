import React from "react";
import "./skillset.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Skillset() {
  return (
    <section id="skillset">
      <h5>Tools I know</h5>
      <h2>Skillset</h2>
      <div className="container skillset_container">
        <div>
          <h3>Frontend Development</h3>
          <div className="skillset_content">
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>Vanilla JS</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>Bootstrap 5</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>Android (XML)</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div>
          <h3>Backend Development</h3>
          <div className="skillset_content">
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>Android (Java)</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>Java Server Pages</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>Git &amp; Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div>
          <h3>Programming Languages</h3>
          <div className="skillset_content">
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>C</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skillset_details">
              <BsPatchCheckFill className="skillset_content_icon" />
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
