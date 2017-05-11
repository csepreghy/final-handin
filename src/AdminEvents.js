import React, { Component } from 'react';
import AdminEvent from './AdminEvent';

class AdminEvents extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
       <section id="admin-events" className="content">
         <AdminEvent />
         <AdminEvent />
         <AdminEvent />
         <AdminEvent />
         <AdminEvent />
       </section>
    );
  }
}

export default AdminEvents;