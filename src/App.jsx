import React, { useEffect,useState } from 'react'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {

  const [activeNav, setActiveNav] = useState('#');
  
  useEffect(()=>{
    var observer = new IntersectionObserver(observerCallback);
    function observerCallback(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
              setActiveNav("#"+(entry.target.tagName==="header"?"":entry.target.id));
            }
        });
    };

    document.querySelectorAll("section").forEach((i) => {
        if (i) {
            observer.observe(i);
        }
    });
    observer.observe(document.querySelector("header"));
    window.addEventListener("scroll",()=>{if(window.scrollY===0) setActiveNav("#");});
  },[])
  return (
    <>
    <Header/>
    <Nav nav={{activeNav:activeNav,setActiveNav:setActiveNav}}/>
    <About/>
    <Education/>
    <Experience/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>    
  )
}

export default App