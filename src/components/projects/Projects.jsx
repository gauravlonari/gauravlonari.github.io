import React from 'react'
import './projects.css'
import elar from '../../assets/elar.png'
export default function Projects() {
  return (
    <section id="projects">
      <h5>My Work</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        <article className='project_item'>
          <div className="portfolio_item_image"><img src={elar} alt="elar" /></div>
          <h3>ELAR</h3>
          <a href="https://github.com/gauravlonari/ELAR" target="_blank" rel='noreferrer' className='btn'>Source Code</a>
          <a href="https://github.com/gauravlonari/ELAR/releases/tag/ELAR-APK" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='project_item'>
          <div className="portfolio_item_image"><img src={elar} alt="elar" /></div>
          <h3>Minibis</h3>
          <a href="https://github.com/gauravlonari/NewNews" target="_blank" rel='noreferrer' className='btn'>Source Code</a>
          <a href="https://github.com/gauravlonari/ELAR/releases/tag/ELAR-APK" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='project_item'>
          <div className="portfolio_item_image"><img src={elar} alt="elar" /></div>
          <h3>Sahyadri Safar</h3>
          <a href="https://github.com/gauravlonari/SahyadriSafar" target="_blank" rel='noreferrer' className='btn'>Source Code</a>
          <a href="https://github.com/gauravlonari/ELAR/releases/tag/ELAR-APK" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='project_item'>
          <div className="portfolio_item_image"><img src={elar} alt="elar" /></div>
          <h3>TextUtility</h3>
          <a href="https://github.com/gauravlonari/TextUtility" target="_blank" rel='noreferrer' className='btn'>Source Code</a>
          <a href="https://github.com/gauravlonari/ELAR/releases/tag/ELAR-APK" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='project_item'>
          <div className="portfolio_item_image"><img src={elar} alt="elar" /></div>
          <h3>NewNews</h3>
          <a href="https://github.com/gauravlonari/NewNews" target="_blank" rel='noreferrer' className='btn'>Source Code</a>
          <a href="https://github.com/gauravlonari/ELAR/releases/tag/ELAR-APK" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='project_item'>
          <div className="portfolio_item_image"><img src={elar} alt="elar" /></div>
          <h3>Stock Edge</h3>
          <a href="https://github.com/gauravlonari/Stock-Edge" target="_blank" rel='noreferrer' className='btn'>Source Code</a>
          <a href="https://github.com/gauravlonari/ELAR/releases/tag/ELAR-APK" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='project_item'>
          <div className="portfolio_item_image"><img src={elar} alt="elar" /></div>
          <h3>NotesKeeper</h3>
          <a href="https://github.com/gauravlonari/NotesKeeper" target="_blank" rel='noreferrer' className='btn'>Source Code</a>
          <a href="https://github.com/gauravlonari/ELAR/releases/tag/ELAR-APK" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}