import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsArrowUp, BsCodeSlash } from "react-icons/bs";
import { MdWorkspacesFilled } from "react-icons/md";
import "./experience.css";

export default function Experience() {

  const experienceData=[
    {
      position:"Full Stack Web Developer",
      company:"The Innovative Solutions",
      companyLink:"https://theinnovativesolutions.in/",
      desc:"Developed web applications using the MERN stack and gained a thorough understanding of the skills and knowledge required to excel in this field. I learned about the scalability and robustness requirements for enterprise-grade applications and gained experience working in an Agile environment.",
      tools:"ReactJS, ExpressJS, NodeJS, MongoDB, REST API, Trello, Github",
      duration:"Oct 2022 - Present"
    },
  ]

  return (
    <section id="experience">
      <h5>Where I have contributed</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
        <div className="">
          {
            experienceData.map((item,i)=>{
              return (
                <div key={'experienceItem'+i}>
                { i!==0 && <BsArrowUp className="uparrow"/> }

                <article className="experience_card">
                  <p className="jobposition">{item.position}</p>
                  <a className="companylink" target="_blank" rel="noreferrer" href={item.companyLink}><p className="company">{item.company}</p></a>
                  <div className="desc">
                  <MdWorkspacesFilled />
                  <p className="text-light">{item.desc}
                  </p>
                  </div>
                  <div className="interntools text-light">
                  <BsCodeSlash/>
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
