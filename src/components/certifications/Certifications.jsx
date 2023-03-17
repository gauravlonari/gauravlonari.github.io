import React from "react";
import './certifications.css'
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Certifications() {

  const certificationData=[
    {
      logo:"https://cdn.qwiklabs.com/KxYnffjiyPuh7QOen04Gtn09Y4B1Cb3YlWkwOYzCObc%3D",
      title:"Milestone 3 of Google Cloud Facilitator Program 2022",
      by:"Qwiklabs",
      date:"June 2022",
      description:"The GoogleCloudReady Facilitator program is an opportunity to kickstart career in cloud and get hands on practice on Google Cloud. Learn & practice concepts like computing, application development, big data & machine learning using cloud",
      url:"https://www.cloudskillsboost.google/public_profiles/5ff6691f-2911-4267-a2eb-213a77d95ffd"
    },
    {
      logo:"https://raw.githubusercontent.com/gauravlonari/static/main/javabadge5star.jfif",
      title:"5⭐ Java Badge",
      by:"HackerRank",
      date:"January 2023",
      description:"The 5 stars badge on HackerRank for Java indicates that the user has earned the maximum number of stars for their Java-related challenges on the platform. To earn this badge, a user must have completed a significant number of Java challenges and consistently earned high scores on those challenges. This badge is a testament to the user's expertise and proficiency in the Java programming language.",
      url:"https://www.hackerrank.com/gaurav_22120147"
    },
  ]
  
  // eslint-disable-next-line
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  // console.log(swiper); 
  
  return (
    <section id="certifications">
      <h5>Achievements and </h5>
      <h2>Certifications</h2>

      <div className="container certifications_container">
        <div className="swiper">
          <div className="swiper-wrapper">

            {certificationData.map((value,i)=>{
              return(
                <div className="swiper-slide" key={i+value.title}>
                  <article className="certificate">
                    <img src={value.logo} alt="certificateImage" />
                    <div className="certificate_data">
                      <h3 className="certificate_title">{value.title}</h3>
                      <h4 className="text-light certificate_by">{value.by}</h4>
                      <small className="text-light certificate_description">{value.description}</small>
                      <a href={value.url} className={`btn btn-primary btn-sm ${value.url?'':"hidden"}`} target="_blank" rel="noreferrer">Show Credential</a>
                    </div>
                  </article>
                </div>
              )
            })}
          
          </div>
          <div className="swiper-pagination"></div>
          <div className={`swiper-button-prev ${certificationData.length>1?'':'hidden'}`}></div>
          <div className={`swiper-button-next ${certificationData.length>1?'':'hidden'}`}></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </section>
  );
}
