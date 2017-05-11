import React, {Component} from 'react';

class AdminEvent extends Component {

  constructor(props) {
    super();

    this.state = {
      isFormEventTitle: false,
      eventTitleValue: "22 May, Thu. 20:00 - Tech event title",
      inputCanBlur: false,
      isFormSmallDescription: false,
      smallDescriptionValue: "This is a one line description",
      isFormDescription: false,
      descriptionValue: "Freegan retro flexitarian, bushwick crucifix sriracha polaroid four loko banh mi banjo. 3 wolf moon street art waistcoat, forage vexillologist pork belly art party etsy VHS yuccie typewriter viral air plant pitchfork. Hammock vaporware live-edge, af crucifix shoreditch umami godard four dollar toast man bun +1 polaroid. Farm-to-table kogi gentrify poke, thundercats.",
      isFormSchedule: false,
      tags: ["React", "Yo!", "JesusLovesYou!"],
      isFormTag: false,
      tagValue: ""
    }

    this.getEventTitle = this.getEventTitle.bind(this);
    this.toggleIsForm = this.toggleIsForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.canBlur = this.canBlur.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.getTagContent = this.getTagContent.bind(this);
    this.tagToInput = this.tagToInput.bind(this);
    this.getDescription = this.getDescription.bind(this);
 }

 toggleIsForm(item) {
   switch (item) {
     case "eventTitle":
       this.setState({ isFormEventTitle: !this.state.isFormEventTitle });
       break;    
     case "smallDescription":
       this.setState({ isFormSmallDescription: !this.state.isFormSmallDescription });
       break;
     case "tag":
       this.setState({ isFormTag: !this.state.isFormTag });
       break;
     case "description":
       this.setState({ isFormDescription: !this.state.isFormDescription });   
       break;
   }
 }

 handleChange(e) {
   if (e.target.id === "eventTitle") { this.setState({ eventTitleValue: e.target.value}) }
   if (e.target.id === "smallDescription") { this.setState({ smallDescriptionValue: e.target.value}) }
   if (e.target.id === "tag") { this.setState({ tagValue: e.target.value}) }
   if (e.target.id === "description") { this.setState({ descriptionValue: e.target.value}) }
 }

 handleBlur(item) {
   if (item === "tag") {
     let tagArray = this.state.tags;
     tagArray.push(this.state.tagValue);
     this.setState({ tags: tagArray });
     this.setState({ tagValue: "" })
   }
   this.toggleIsForm(item);
   this.setState({ inputCanBlur: true });
 }

 canBlur(item) {
   this.setState({ inputCanBlur: true });
 }

 getEventTitle() {
   if (this.state.isFormEventTitle === false) {
    return (
      <h2 onClick={ () => { this.toggleIsForm("eventTitle") } }>{ this.state.eventTitleValue }</h2>
    )
   } else {
     return (
       <form>
         <input 
           className="event-title"
           id="eventTitle"
           type="text" 
           onFocus={ () => { this.canBlur("eventTitle") } } 
           onBlur={ () => { this.handleBlur("eventTitle") } } 
           onChange={ this.handleChange } 
           value={ this.state.eventTitleValue } 
         />
       </form>
     )
   }
 }

 getTagContent() {
   if (this.state.isFormTag === true) {
     return (
       <div className="chip" style={{ width: 25 + this.state.tagValue.length*8 + "px", "minWidth": "70px" }}>
         <input 
           type="text" 
           value={ this.state.tagValue }
           className="tag"
           id="tag"
           type="text" 
           placeholder="SWAG"
           style={{ width: 5 + this.state.tagValue.length*8 + "px", "minWidth": "45px" }}
           onFocus={ () => { this.canBlur("tag") } } 
           onBlur={ () => { this.handleBlur("tag") } } 
           onChange={ this.handleChange } /> 
       </div>
     )
   } else {
     return (
       <div onClick={ this.tagToInput } className="chip">Add<i className="add material-icons">add</i></div>
     )
   }
 }

 tagToInput() {
   this.setState({ isFormTag: !this.state.isFormTag })
 }

 getDescription() {
   if (this.state.isFormDescription === false) {
     return (
         <p onClick={ () => { this.toggleIsForm("description") } }>{ this.state.descriptionValue }</p>
     )
   } else {
     return (
       <form className="description-form">
         <textarea 
           className="description"
           id="description"
           type="text" 
           onFocus={ () => { this.canBlur("description") } } 
           onBlur={ () => { this.handleBlur("description") } } 
           onChange={ this.handleChange } 
           value={ this.state.descriptionValue } 
         />
       </form>
     )
   }
 }

 getSmallDescription() {
   if (this.state.isFormSmallDescription === false) {
     return (
       <span onClick={ () => { this.toggleIsForm("smallDescription") } }>{ this.state.smallDescriptionValue }</span>
     )
   } else {
     return (
       <form className="small-description-form">
         <input 
           className="small-description"
           id="smallDescription"
           type="text" 
           onFocus={ () => { this.canBlur("smallDescription") } } 
           onBlur={ () => { this.handleBlur("smallDescription") } } 
           onChange={ this.handleChange } 
           value={ this.state.smallDescriptionValue } 
         />
       </form>
     )
   }
 }

 render() {
   return (
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header">
            <div className="icon-container">
              <a><i className="material-icons">keyboard_arrow_down</i></a>
            </div>
            <div className="event-info-container">
              <div className="title-container">
                { this.getEventTitle() }
                <i className="close material-icons edit" onClick={ () => { this.toggleIsForm("eventTitle") } }>edit</i>
              </div>
              <div className="small-description-container">
                { this.getSmallDescription() }
                <i className="close material-icons edit" onClick={ () => { this.toggleIsForm("eventTitle") } }>edit</i>
              </div>
                <div className="tag-container">
                  {
                    this.state.tags.map((item, index) => {
                      return (
                        <div className="chip" key={ index }>{ item }<i className="close material-icons">close</i></div>
                      )
                    })
                  }
                  {
                    this.getTagContent() 
                  }
                </div>
              </div>
            </div>
            <div className="collapsible-body">
              <div className="content-left">
                { this.getDescription() }
                <ul>
                  <li>
                    <span>20:00 - 21:00 - Some presentation</span>
                    <span>Some description</span>
                  </li>
                  <li>
                    <span>21:00 - 22:00 - Other presentation</span>
                    <span>Some description</span>
                  </li>
                </ul>
              </div>
              <div className="content-right">
                <div className="map-container">
                  <img className="map-img" src="assets/maps.png" />
                  <span>Rentemestervej 67, 2400 Copenhagen NV</span>
                </div>
                <span className="sponsors-label">Sponsors: </span>
                <div className="logos-container">
                  <img src="/assets/google.png" alt=""/>
                  <img src="/assets/tesla.png" alt=""/>
                  <img src="/assets/apple.png" alt=""/>
                </div>
              </div>
            </div>
          </li>
        </ul>
   );
 }
}
export default AdminEvent;