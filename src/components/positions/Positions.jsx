import React from "react";
import "./positions.css";
import { AiTwotoneCalendar } from 'react-icons/ai'
import { POSITION_OF_RESPONSIBILITY_DATA as positionData } from "../../constants/data";

export default function Positions() {

	return (
		<section id="positions">
			<h5>Leadership Roles</h5>
			<h2>Positions of Responsibility</h2>
			<div className="container positions_container">
				{
					positionData.map((value, i) => {
						if (i % 2 === 0) {
							return (
								<div className="position" key={i + value.organization}>
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
						else {
							return (
								<div className="position" key={i + value.organization}>
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