import React from "react";
import "./positions.css";
import { AiTwotoneCalendar } from 'react-icons/ai'

export default function Positions() {

	const positionData = [
		{
			organization: "I2IC & Training And Placement Cell VIIT",
			role: "Vice President",
			date: "Sep 2022 - Present"
		},
		{
			organization: "Cascode",
			role: "Co-Founder",
			date: "Aug 2022 - Present"
		},
		{
			organization: "Profession Assistance Officer",
			role: "Rotaract Club Of VIIT",
			date: "July 2022 - Present"
		},
		{
			organization: "National Service Scheme(NSS), VIIT",
			role: "Unnat Bharat Abhiyaan Joint Head",
			date: "Aug 2022 - Present"
		},
		{
			organization: "Technofest 2k20",
			role: "Event Coordinator at Flash 2.0",
			date: "Jan 2020 - Mar 2020"
		},
	]

	return (
		<section id="positions">
			<h5>Leadership Roles</h5>
			<h2>Positions of Responsibility</h2>
			<div className="container positions_container">

				{
					positionData.map((value, i) => {
						if(i%2===0){
							return(
								<div className="position" key={i+value.organization}>
								<div className="position_data align-right">
									<h3 className='position_title'>{value.organization}</h3>
									<h4 className="text-light">{value.role}</h4>
									{/* <small className="text-light">Pune</small> */}
									<small className="text-light position_date"><AiTwotoneCalendar />{value.date}</small>
								</div>
								<div>
									<span className="position_circle"></span>
									<span className="position_line"></span>
								</div>
								<div></div>
							</div>
							)
						}
						else{
							return(
								<div className="position" key={i+value.organization}>
								<div></div>
								<div>
									<span className="position_circle"></span>
									<span className="position_line"></span>
								</div>
								<div className="position_data align-left">
									<h3 className='position_title'>{value.organization}</h3>
									<h4 className="text-light">{value.role}</h4>
									{/* <small className="text-light">Pune</small> */}
									<small className="text-light position_date"><AiTwotoneCalendar />{value.date}</small>
								</div>
							</div>
							)
						}
					})
				}

			</div>
		</section>
	);
}