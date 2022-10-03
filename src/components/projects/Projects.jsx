import React from 'react'
import './projects.css'

export default function Projects() {
  return (
    <section id="projects">
      <h5>My Work</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        <article className='project_item'>
          <div className="portfolio_item_image"></div>
          <h3>title</h3>
          <a href="https://github.com/gauravlonari" target="_blank" rel='noreferrer' className='btn'>Source Code</a>
          <a href="https://github.com/gauravlonari" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}