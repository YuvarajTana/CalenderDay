import React, { Component } from 'react';
import Appointment from './Appointment';

import './CalenderDay.css';  

class CalenderDay extends Component{
	constructor(props){
		super();
	}
	render(){
		const { appointments } = this.props;
		return(
			<div className='parentSection'>
				{ 
					appointments.map(apt => <Appointment key={apt.id} data={apt}/>)
				}
			</div>
		);
	}
}
export default CalenderDay;

