import React from "react";
import PropTypes from "prop-types"

//create your first component
export const Clock = (props) => {

	Clock.propTypes = {
		hours1st: PropTypes.number,
		hours2nd: PropTypes.number,
		minutes1st: PropTypes.number,
		minutes2nd: PropTypes.number,
		seconds1st: PropTypes.number,
		seconds2nd: PropTypes.number
	}
	
	return (
		<div className="container bg-dark d-flex py-4 justify-content-center align-items-center">
			<div className="clock-icon"><i className="fa-regular fa-clock text-light fs-1 me-1"></i></div>
			<div className="d-flex">
				<div className="hours-2nd text-light fs-1">{props.hours2nd}</div>
				<div className="hours-1st text-light fs-1">{props.hours1st}</div>
				<div className="text-light fs-1">:</div>
				<div className="minutes-2nd text-light fs-1">{props.minutes2nd}</div>
				<div className="minutes-1st text-light fs-1">{props.minutes1st}</div>
				<div className="text-light fs-1">:</div>
				<div className="seconds-2nd text-light fs-1">{props.seconds2nd}</div>
				<div className="seconds-1st text-light fs-1">{props.seconds1st}</div>
			</div>
		</div>
	)
}
