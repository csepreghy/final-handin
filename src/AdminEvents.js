import React, { Component } from 'react';
import Event from './Event';

class AdminEvents extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
       <section id="events" className="content">
         <ul className="collapsible" data-collapsible="accordion">
           <Event />
        </ul>
      </section>
    );
  }
}

export default AdminEvents;