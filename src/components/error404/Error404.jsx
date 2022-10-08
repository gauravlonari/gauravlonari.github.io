import React from 'react'
import './error404.scss'
export default function Error404() {
  return (
    <div className='error_bg-purple'>
        <div className="error_stars">
            <div className="error_central-body">
                <img alt="altText"  className="error_image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px"/>
                <a href="http://salehriaz.com/404Page/404.html" className="error_btn-go-home" target="_blank" rel="noreferrer">GO BACK HOME</a>
            </div>
            <div className="error_objects">
                <img alt="altText"  className="error_object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div className="error_earth-moon">
                    <img alt="altText"  className="error_object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                    <img alt="altText"  className="error_object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                </div>
                <div className="error_box_astronaut">
                    <img alt="altText"  className="error_object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                </div>
            </div>
            <div className="error_glowing_stars">
                <div className="error_star"></div>
                <div className="error_star"></div>
                <div className="error_star"></div>
                <div className="error_star"></div>
                <div className="error_star"></div>
            </div>
        </div>
    </div>
  )
}
