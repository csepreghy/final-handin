import React, {Component} from 'react';

class Partners extends Component {

  constructor(props) {
    super();

 }

 render() {
   return (
     <section id="partners" className="content">
       <div className="card">
         <div className="card-title"><h2>Partners</h2></div>
         <div className="card-content">
           <p>You probably haven't heard of them tote bag knausgaard hoodie hell of. Vinyl tbh woke, hexagon mumblecore coloring book migas listicle. Tousled migas subway tile asymmetrical fap, pinterest green juice offal selfies master cleanse fam +1 cronut. Chicharrones sriracha tousled thundercats succulents drinking vinegar, hella gentrify ennui street art cornhole tilde. Kale chips enamel pin swag PBR&B, drinking vinegar green juice vexillologist lyft YOLO hella bicycle rights glossier squid echo park flannel. Echo park put a bird on it ugh deep v, lumbersexual DIY flannel microdosing tacos roof party woke jianbing you probably haven't heard of them salvia cronut. Kinfolk af pok pok .</p>
           <button className="waves-effect waves-light btn">Partner up!</button>
           <div className="divider"></div>
           <h5>Our Partners:</h5>
           <div className="logos-container">
             <ul>
               <a className=""><li><img src="/assets/apple.png" /></li></a>
               <a className=""><li><img src="/assets/google.png" /></li></a>
               <a className=""><li><img src="/assets/tesla.png" /></li></a>
               <a className=""><li><img src="/assets/intel.png" /></li></a>
               <a className=""><li><img src="/assets/amazon.png" /></li></a>
               <a className=""><li><img src="/assets/nvidia.png" /></li></a>
               <a className=""><li><img src="/assets/apple.png" /></li></a>
               <a className=""><li><img src="/assets/google.png" /></li></a>
               <a className=""><li><img src="/assets/tesla.png" /></li></a>
               <a className=""><li><img src="/assets/intel.png" /></li></a>
               <a className=""><li><img src="/assets/amazon.png" /></li></a>
               <a className=""><li><img src="/assets/nvidia.png" /></li></a>
               <a className=""><li><img src="/assets/apple.png" /></li></a>
               <a className=""><li><img src="/assets/google.png" /></li></a>
             </ul>
           </div>
         </div>
       </div>
     </section>
   );
 }
}
export default Partners;