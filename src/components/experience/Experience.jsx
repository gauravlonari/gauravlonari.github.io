import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsArrowUp, BsCodeSlash } from "react-icons/bs";
import { MdWorkspacesFilled } from "react-icons/md";
import { EXPERIENCE_DATA as experienceData } from "../../constants/data";
import "./experience.css";

export default function Experience() {

  return (
    <section id="experience">
      <h5>My Corporate Life</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
        <div className="">
          {
            experienceData.map((item, i) => {
              return (
                <div key={item.position + item.company}>
                  {i !== 0 && <BsArrowUp className="uparrow" />}

                  <article className="experience_card">
                    <p className="jobposition">{item.position}</p>
                    <a className="companylink" target="_blank" rel="noreferrer" href={item.companyLink}><p className="company">{item.company}</p></a>
                    <div className="desc">
                      <MdWorkspacesFilled />
                      <p className="text-light">{item.desc}
                      </p>
                    </div>
                    <div className="interntools text-light">
                      <BsCodeSlash />
                      <p>{item.tools}</p>
                    </div>
                    <small className="text-light position_date"><AiTwotoneCalendar />{item.duration}</small>
                  </article>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}
