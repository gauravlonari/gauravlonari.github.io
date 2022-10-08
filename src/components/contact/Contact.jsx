import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formData=useRef();

  const handleDirectEmail=event=>{
    event.preventDefault(); 
    
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID , formData.current, process.env.REACT_APP_PUBLIC_API_KEY)
      .then((result) => {
          // window.alert("Error while sending message.");
          console.log(result.text);
          window.alert("Message has been sent.");
          formData.current.reset();
      }, (error) => {
          window.alert("Error while sending message.");
          console.log(error.text);
      });
  }
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <FaLinkedinIn className='contact_option_icon'/>
            {/* <h4>Linkedin</h4> */}
            <h4>gauravlonari</h4>
            <a target="_blank" rel='noreferrer' href="https://linkedin.com/in/gauravlonari">Send a Message</a>
          </article>
          <article className="contact_option">
            <HiOutlineMail className='contact_option_icon'/>
            {/* <h4>Email</h4> */}
            <h4>gauravlonariofficial@gmail.com</h4>
            <a target="_blank" rel='noreferrer' href="mailto:gauravlonariofficial@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option_icon'/>
            {/* <h4>Whatsapp</h4> */}
            <h4>+91 9370729899</h4>
            <a target="_blank" rel='noreferrer' href="https://api.whatsapp.com/send?phone=919370729899">Send a Message</a>
          </article>
        </div>
        <form action="" autoComplete='off' ref={formData}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <a className='btn btn-primary' href='#contact' onClick={handleDirectEmail}>Send Message</a>
        </form>
      </div>
    </section>
  )
}
