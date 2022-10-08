import React from 'react'
import './projects.css'
import elar from '../../assets/elar.png'
import {BsCodeSlash} from 'react-icons/bs'
export default function Projects() {

  const projectData=[
    {
      image:elar,
      title:"ELAR",
      description:"E-learning using AR is an augmented reality based software which can be used by students to view the 3D view of the entity they are learning about.",
      tools:"Unity 3D, Vuforia Engine, C#",
      github:"https://github.com/gauravlonari/ELAR",
      liveEnabled:true,
      live:"https://github.com/gauravlonari/ELAR/releases/"
    },
    {
      image:elar,
      title:"Minibis",
      description:"Minibis or Mini Business is an Android app build for small scale businesses to work on. Integrated with Firebase to store and load of Users and Products",
      tools:"Android Studio, Java, Firebase",
      github:"https://github.com/gauravlonari/NewNews",
      liveEnabled:true, 
      live:"https://github.com/gauravlonari/Minibis/releases/"
    },
    {
      image:elar,
      title:"Sahyadri Safar",
      description:"Sahyadri Safar is a trek and tour booking site which emphasis trips to various glamorous parts of Sahyadri.",
      tools:"HTML, CSS, Vanilla JS",
      github:"https://github.com/gauravlonari/SahyadriSafar",
      liveEnabled:false,
      live:"/"
    },
    {
      image:elar,
      title:"TextUtility",
      description:"Text Utility is a utility software used to manipulate your text in the way you want. Enter the text and functions are available to you.",
      tools:"ReactJS, NodeJS, Bootstrap",
      github:"https://github.com/gauravlonari/TextUtility",
      liveEnabled:true,
      live:"http://gauravlonari.github.io/TextUtility"
    },
    {
      image:elar,
      title:"NewNews",
      description:"NewNews is a new News platform made to keep you updated on current affairs from each and everything like politics, sports, events, weather, etc.",
      tools:"ReactJS, NodeJS, Bootstrap, NewsAPI",
      github:"https://github.com/gauravlonari/NewNews",
      liveEnabled:true,
      live:"http://gauravlonari.github.io/NewNews"
    },
    {
      image:elar,
      title:"Portfolio",
      description:"Portfolio of Gaurav Lonari. This Repository include source code for the website you are currently browsing.",
      tools:"React JS, CSS, NodeJS",
      github:"https://github.com/gauravlonari/gauravlonari.github.io",
      liveEnabled:true,
      live:"#"
    },
    {
      image:elar,
      title:"Investorz",
      description:"A stock market learning application displaying various investment options with valid data from API",
      tools:"Android Studio, Java",
      github:"https://github.com/gauravlonari/Stock-Edge",
      liveEnabled:false,
      live:""
    },
    {
      image:elar,
      title:"NotesKeeper",
      description:"A Database integrated Notes Management website made with PHP and Python using Django.",
      tools:"PHP, Python, Django",
      github:"https://github.com/gauravlonari/NotesKeeper",
      liveEnabled:false,
      live:""
    },
    
  ];
  
  return (
    <section id="projects">
      <h5>My Work</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        {projectData.map( (prj,i) => {
          return (
          <article className='project_item' key={i}>
          <div className="project_item_image"><img src={prj.image} alt={"project"+i} /></div>
          <h3>{prj.title}</h3>
          <small className='text-light project_item_description'>{prj.description}</small>
          <div className='text-light project_item_tools'>
          <BsCodeSlash/>
          <small>{prj.tools}</small>  
          </div>
          <div className="project_item_cta">
          <a href={prj.github} target="_blank" rel='noreferrer' className='btn btn-sm'>Source Code</a>
          <a href={prj.live} target={prj.live==="#"?"_self":"_blank"} rel='noreferrer' className={`btn btn-sm btn-primary ${prj.liveEnabled?"":"hidden"}`}>Live Demo</a>
          </div>
        </article>
        )
        })}
        
      </div>
    </section>
  )
}