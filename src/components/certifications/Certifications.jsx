import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { CERTIFICATION_DATA as certificationData } from "../../constants/data";
import "./certifications.css";

export default function Certifications() {

  return (
    <section id="certifications">
      <h5>Proof of expertise</h5>
      <h2>Certifications</h2>

      <div className="container certifications_container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {certificationData.map((value, i) => {
            return (
              <SwiperSlide key={i + value.title}>
                <article className="certificate">
                  <img src={value.logo} alt="certificateImage" />
                  <div className="certificate_data">
                    <h3 className="certificate_title">{value.title}</h3>
                    <h4 className="text-light certificate_by">{value.by}</h4>
                    <small className="text-light certificate_description">
                      {value.description}
                    </small>
                    <a
                      href={value.url}
                      className={`btn btn-primary btn-sm ${value.url ? "" : "hidden"
                        }`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show Credential
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
