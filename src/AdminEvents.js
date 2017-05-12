import React, { Component } from 'react';
import AdminEvent from './AdminEvent';

class AdminEvents extends Component {

  constructor(props) {
    super();

    this.state = {
      titles: [],
      smallDescriptions: [],
      descriptions: [],
      tags: [],
      firstFetch: true
    }

    this.addEvent = this.addEvent.bind(this);
  }

  componentWillMount() {
    this.setState({ 
      titles: this.props.titles,
      smallDescriptions: this.props.smallDescriptions,
      descriptions: this.props.descriptions,
      tags: this.props.tags
    })
  };

  addEvent() {
    let newTitles = this.props.titles;
    newTitles.push(this.props.titles[0])
    console.log('newTitles: ', newTitles);
    let newSmallDescriptions = this.props.smallDescriptions
    newSmallDescriptions.push(this.props.smallDescriptions[0]);
    let newDescriptions = this.props.descriptions;
    newDescriptions.push(this.props.descriptions[0]);
    let newTags = this.props.tags;
    newTags.push(this.props.tags[0]);

    this.setState({
      titles: newTitles,
      smallDescription: newSmallDescriptions,
      description: newDescriptions,
      tags: newTags
    });
  }

  render() {
    console.log('this.state: ', this.state);
    console.log('this.props.titles: ', this.props.titles);
    return (
       <section id="admin-events" className="content events">
         <div className="fixed-action-btn">
          <button onClick={ this.addEvent } className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">add</i></button>
         </div>
         { 
           this.state.titles.map((item, index) => {
             return (
               <AdminEvent 
                 title={ this.state.titles[index] }
                 smallDescription={ this.state.smallDescriptions[index] }
                 description={ this.state.descriptions[index] }
                 tags={ this.state.tags[index] }
                 key={ index }
               />  
             ) 
           })
         }
       </section>
    );
  }
}

export default AdminEvents;