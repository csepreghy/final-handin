import React, {Component} from 'react';

class AdminPartners extends Component {

  constructor(props) {
    super();

    this.state = {
      logos: [
        "/assets/apple.png",
        "/assets/google.png",
        "/assets/tesla.png",
        "/assets/intel.png",
        "/assets/amazon.png",
        "/assets/nvidia.png",
        "/assets/react.svg",
        "/assets/asp-not.png",
        "/assets/nodejs.svg",
        "/assets/ecmascript.svg",
      ],
      saveModalDisplay: "none",
      modalTitle: "Your changes have been saved!",
      modalText: "Congratulations for saving your changes! Good job! Be proud!"
    }

    this.addPartner = this.addPartner.bind(this);
    this.changesSaved = this.changesSaved.bind(this);
    this.deletePartner = this.deletePartner.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeModalText = this.changeModalText.bind(this);
 }

 addPartner() {
   let partnerArray = this.state.logos;
   partnerArray.push("/assets/react.svg");
   this.setState({ logos: partnerArray });
 }

 deletePartner(e) {
   console.log(e.target)
 }

 changesSaved() {
   this.setState({ saveModalDisplay: "block" });
 }

 changeModalText() {
   console.log("change");
   this.setState({ modalTitle: "Nope!",  modalText: "You have to say you are honored!" })
 }

 closeModal() {
   this.setState({ saveModalDisplay: "none", modalTitle: "Your changes have been saved!", modalText: "Congratulations for saving your changes! Good job! Be proud!" });
 }

 render() {
   return (
     <section id="admin-partners" className="content">
       <div id="save-modal" style={{ "display": this.state.saveModalDisplay }}>
         <div onClick={ this.changeModalText } className="modal-background"></div>
         <div className="modal">
           <div className="modal-content">
             <h4>{ this.state.modalTitle }</h4>
             <p>{ this.state.modalText }</p>
           </div>
           <div className="modal-footer">
             <a onClick={ this.closeModal } className="modal-action modal-close waves-effect waves-light btn-flat">I am deeply honored</a>
           </div>
         </div>
       </div>
       <div className="card">
         <div className="card-title"><h2>Partners</h2></div>
         <div className="card-content">
           <p>You probably haven't heard of them tote bag knausgaard hoodie hell of. Vinyl tbh woke, hexagon mumblecore coloring book migas listicle. Tousled migas subway tile asymmetrical fap, pinterest green juice offal selfies master cleanse fam +1 cronut. Chicharrones sriracha tousled thundercats succulents drinking vinegar, hella gentrify ennui street art cornhole tilde. Kale chips enamel pin swag PBR&B, drinking vinegar green juice vexillologist lyft YOLO hella bicycle rights glossier squid echo park flannel. Echo park put a bird on it ugh deep v, lumbersexual DIY flannel microdosing tacos roof party woke jianbing you probably haven't heard of them salvia cronut. Kinfolk af pok pok .</p>
           <div className="divider"></div>
           <h5>Our Partners:</h5>
           <div className="logos-container">
             <ul>
               <li><button onClick={ this.addPartner } className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">add</i></button></li>
               {
                 this.state.logos.map((item, index) => {
                   return (
                     <li onClick={ this.deletePartner } key={ index }><img src={ item } /></li>
                   )
                 })
               }
             </ul>
           </div>
           <button onClick={ this.changesSaved } className="waves-effect waves-light btn admin-button">Save</button>
         </div>
       </div>
     </section>
   );
 }
}
export default AdminPartners;