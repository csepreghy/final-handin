import React, { Component } from 'react';
import Event from './Event';

class Events extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
       <section id="events" className="content events container row">
        <div className="col m12 s12">
          {  
            this.props.titles.map((item, index) => {
                return (
                  <Event 
                    title={ this.props.titles[index] }
                    smallDescription={ this.props.smallDescriptions[index] }
                    description={ this.props.descriptions[index] }
                    tags={ this.props.tags[index] }
                    key={ index }
                  />  
               ) 
             })
           }
         </div>
       </section>
    );
  }
}

export default Events;