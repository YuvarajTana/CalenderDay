import React from 'react';
export default function Appointment(props){
	const { data } = props;
	return (
		<div>
			<p>AppointmentId : { data.id }</p>
			<p>Start Time : { data.start }</p>
			<p>End Time : { data.end } </p>
		</div>
	);
}