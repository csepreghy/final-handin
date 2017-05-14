import React, {Component} from 'react';

class Footer extends Component {

  constructor(props) {
    super();

 }

 render() {
   return (
     <footer className="page-footer" id="footer">
       <div className="footer-copyright">
        <div className="container content">
          © 2017 Copyright Text
          <a className="waves-effect waves-light btn-flat admin-button" onClick={ this.props.adminSwither }>{ this.props.getAdminLabel() }</a>
        </div>
      </div>
    </footer>
   );
 }
}
export default Footer;