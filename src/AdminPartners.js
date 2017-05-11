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
        "/assets/google.png",
        "/assets/apple.png",
        "/assets/tesla.png",
      ]
    }

    this.addPartner = this.addPartner.bind(this);
 }

 addPartner() {
   let partnerArray = this.state.logos;
   partnerArray.push("/assets/tesla.png");
   this.setState({ logos: partnerArray });
 }

 render() {
   return (
     <section id="admin-partners" className="content">
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
                     <li key={ index }><img src={ item } /></li>
                   )
                 })
               }
             </ul>
           </div>
         </div>
         <button className="waves-effect waves-light btn admin-button">Save</button>
       </div>
     </section>
   );
 }
}
export default AdminPartners;