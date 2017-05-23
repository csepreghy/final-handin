import React, {Component} from 'react';

class About extends Component {

  constructor(props) {
    super();

 }

 render() {
   return (
    <section id="about" className="content">
      <div className="card">
        <div className="card-title"><h2>About us</h2></div>
          <div className="card-content">
            <iframe src="https://www.youtube.com/embed/G3QnWI4p9r8" frameborder="0" allowfullscreen></iframe>
            <p>You probably haven't heard of them tote bag knausgaard hoodie hell of. Vinyl tbh woke, hexagon mumblecore coloring book migas listicle. Tousled migas subway tile asymmetrical fap, pinterest green juice offal selfies master cleanse fam +1 cronut. Chicharrones sriracha tousled thundercats succulents drinking vinegar, hella gentrify ennui street art cornhole tilde. Kale chips enamel pin swag PBR&B, drinking vinegar green juice vexillologist lyft YOLO hella bicycle rights glossier squid echo park flannel. Echo park put a bird on it ugh deep v, lumbersexual DIY flannel microdosing tacos roof party woke jianbing you probably haven't heard of them salvia cronut. Kinfolk af pok pok .</p>
        </div>
      </div>
    </section>
   );
 }
}
export default About;