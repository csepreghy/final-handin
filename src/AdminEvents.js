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
      firstFetch: true,
      modalDisplay: 'none'
    }

    this.addEvent = this.addEvent.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

    this.setState({ modalDisplay: 'block' })

    let newTitles = this.props.titles;
    newTitles.push(this.props.titles[0])

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

  closeModal() {
   this.setState({ modalDisplay: 'none' });
 }

  render() {
    return (
       <section id="admin-events" className="content events">
         <div id="save-modal" style={{ "display": this.state.modalDisplay }}>
           <div onClick={ this.changeModalText } className="modal-background"></div>
             <div className="modal">
               <div className="modal-content">
                 <h4>You added an event</h4>
                 <p>The new event is on the bottom. You can edit it by clicking into</p>
               </div>
               <div className="modal-footer">
                 <a onClick={ this.closeModal } className="modal-action modal-close waves-effect waves-light btn-flat">Ok</a>
               </div>
             </div>
           </div>
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