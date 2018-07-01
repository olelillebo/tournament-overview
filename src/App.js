import React, { Component } from 'react';


import './App.css';
import './weather-icons.css'

import EventList from './events/event-list';

class App extends Component {
  render(){
    return (
      <EventList />
    )
  }
}

export default App;
