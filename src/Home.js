import React, {Component} from 'react';
import Events from './Events';

class Home extends Component {

  constructor(props) {
    super();

 }

 render() {
   return (
     <div className="ultimate-container">
         <Events />
     </div>
   );
 }
}
export default Home;