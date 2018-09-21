import React, { Component } from 'react';
import './app.css';
import CalenderDay from './CalenderDay';

export default class App extends Component {
  
  state = { appointments: [] };

  componentDidMount() {
    fetch('/api/getAppointments')
      .then(res => res.json())
      .then(data => this.setState({ appointments: data }));
  }

  render() {
    const { appointments } = this.state;

    console.log('appointments', appointments);

    return (
      <div>
        <CalenderDay appointments= {appointments} />
      </div>
    );
  }
}

