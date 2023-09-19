import React from 'react'
import './projects.css'
import { BsCodeSlash } from 'react-icons/bs'
import { PROJECTS_DATA as projectData } from '../../constants/data'

export default function Projects() {

  return (
    <section id="projects">
      <h5>My Work</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        {projectData.map((prj, i) => {
          return (
            <article className='project_item' key={i}>
              <div className="project_item_image"><img src={prj.image} alt={"project" + i} /></div>
              <h3>{prj.title}</h3>
              <small className='text-light project_item_description'>{prj.description}</small>
              <div className='text-light project_item_tools'>
                <BsCodeSlash />
                <small>{prj.tools}</small>
              </div>
              <div className="project_item_cta">
                {
                  !prj.githubDisabled &&
                  <a href={prj.github} target="_blank" rel='noreferrer' className='btn btn-sm'>Source Code</a>
                }
                {
                  prj.liveEnabled &&
                  <a href={prj.live} target={prj.live === "#" ? "_self" : "_blank"} rel='noreferrer' className='btn btn-sm btn-primary'>Try it</a>
                }
              </div>
            </article>
          )
        })}

      </div>
    </section>
  )
}