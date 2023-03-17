import React, { useEffect,useState } from 'react'
import About from './components/about/About'
import Education from './components/education/Education'
import Skillset from './components/skillset/Skillset'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Positions from './components/positions/Positions'
import Projects from './components/projects/Projects'
import Certifications from './components/certifications/Certifications'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Theme from './components/themes/Theme'
import Experience from './components/experience/Experience'

const Global = () => {
  const [activeNav, setActiveNav] = useState('#');
  
  useEffect(()=>{
    var observer = new IntersectionObserver(observerCallback);
    function observerCallback(entries) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
              setActiveNav("#"+(entry.target.tagName==="header"?'': entry.target.tagName==="footer" ? "contact" : entry.target.id));
            }
          });
    };
    
    document.querySelectorAll("section").forEach((i) => {
        if (i) {
          observer.observe(i);
        }
    });
    observer.observe(document.querySelector("header"));
    observer.observe(document.querySelector("footer"));
    window.addEventListener("scroll",()=>{
      if(window.scrollY===0) setActiveNav("#"); 
      if(window.scrollY < window.innerheight){
        document.querySelector(".darkmode_container").classList.add("hidden");
      }
      else{
        document.querySelector(".darkmode_container").classList.remove("hidden");
      }
    });
  },[])
  return (
    <>
            <Header/>
            <Theme/>
            <Nav nav={{activeNav:activeNav,setActiveNav:setActiveNav}}/>
            <About/>
            <Education/>
            <Skillset/>
            <Experience/>
            <Positions/>
            <Projects/>
            <Certifications/>
            {/* <Testimonials/> */}
            <Contact/>
            <Footer/>
          </>
  )
}

export default Global