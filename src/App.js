import React, {Component} from 'react';
import Events from './Events';
import About from './About';
import Partners from './Partners';
import Navbar from './Navbar';
import Login from './Login';
import PreLoader from './PreLoader';
import AdminEvents from './AdminEvents';
import AdminPartners from './AdminPartners';
import Footer from './Footer';
import Accounts from './Accounts';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      pageContent: "home",
      admin: false,
      titles: [
        "22 May, Thu. 20:00 - Tech event title",
        "23 May, Fri. 16:00 - React conference",
        "10 June, Mon. 20:00 - Best event ever",
        "23 June, Wed. 14:00 - Startups in Copenhagen",
        "13 July, Wed. 17:00 - Future of VR"
      ],
      smallDescriptions: [
        "This is a one line description",
        "This is a one line description",
        "This is a one line description",
        "This is a one line description",
        "This is a one line description"
      ],
      descriptions: [
        "Freegan retro flexitarian, bushwick crucifix sriracha polaroid four loko banh mi banjo. 3 wolf moon street art waistcoat, forage vexillologist pork belly art party etsy VHS yuccie typewriter viral air plant pitchfork. Hammock vaporware live-edge, af crucifix shoreditch umami godard four dollar toast man bun +1 polaroid. Farm-to-table kogi gentrify poke, thundercats.",
        "Freegan retro flexitarian, bushwick crucifix sriracha polaroid four loko banh mi banjo. 3 wolf moon street art waistcoat, forage vexillologist pork belly art party etsy VHS yuccie typewriter viral air plant pitchfork. Hammock vaporware live-edge, af crucifix shoreditch umami godard four dollar toast man bun +1 polaroid. Farm-to-table kogi gentrify poke, thundercats.",
        "Freegan retro flexitarian, bushwick crucifix sriracha polaroid four loko banh mi banjo. 3 wolf moon street art waistcoat, forage vexillologist pork belly art party etsy VHS yuccie typewriter viral air plant pitchfork. Hammock vaporware live-edge, af crucifix shoreditch umami godard four dollar toast man bun +1 polaroid. Farm-to-table kogi gentrify poke, thundercats.",
        "Freegan retro flexitarian, bushwick crucifix sriracha polaroid four loko banh mi banjo. 3 wolf moon street art waistcoat, forage vexillologist pork belly art party etsy VHS yuccie typewriter viral air plant pitchfork. Hammock vaporware live-edge, af crucifix shoreditch umami godard four dollar toast man bun +1 polaroid. Farm-to-table kogi gentrify poke, thundercats.",
        "Freegan retro flexitarian, bushwick crucifix sriracha polaroid four loko banh mi banjo. 3 wolf moon street art waistcoat, forage vexillologist pork belly art party etsy VHS yuccie typewriter viral air plant pitchfork. Hammock vaporware live-edge, af crucifix shoreditch umami godard four dollar toast man bun +1 polaroid. Farm-to-table kogi gentrify poke, thundercats."
      ],
      tags: [
        ["React", "Workshop", "CSS", "Asp .NOT!"],
        ["React", "Front-end", "Web Development"],
        ["Super", "Pro", "Best eva!"],
        ["Business", "Startup", "Denmark", "Copenhagen"],
        ["VR", "AR", "Virtual Reality", "Design"]
      ],
    }

    this.getContent = this.getContent.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.getAdminLabel = this.getAdminLabel.bind(this);
    this.loginLoading = this.loginLoading.bind(this);
    this.adminSwither = this.adminSwither.bind(this);
   }

  handleNavClick(item) {
    this.setState({ pageContent: item });
  }

  getContent() {
    console.log('getcontent');
    switch (this.state.pageContent) {
      case "home":
        return (
          <Events
            titles={ this.state.titles }
            smallDescriptions={ this.state.smallDescriptions }
            descriptions={ this.state.descriptions }
            tags={ this.state.tags }
          />
        );
      case "about":
        return <About />
      case "partners":
        return <Partners />
      case "login":
        return <Login loginLoading={ this.loginLoading }/>
      case "loginLoading":
        return <PreLoader />
      case "adminEvents":
        return (
          <AdminEvents 
            titles={ this.state.titles }
            smallDescriptions={ this.state.smallDescriptions }
            descriptions={ this.state.descriptions }
            tags={ this.state.tags }
          />
        )
      case "adminPartners":
        return <AdminPartners />
      case "accounts":
        return <Accounts />
    }
  }

  loginLoading() {
    console.log('loginloading');
    this.setState({ pageContent: "loginLoading" });

    setTimeout(() => {
      this.setState({ pageContent: "adminEvents", admin: true });
    }, 8500);
  }

  adminSwither () {
    if (this.state.admin === false) {
       this.setState({ pageContent: "login" });
    } else if (this.state.admin === true) {
       this.setState({ admin: false, pageContent: "home" });
    }
  }

  getAdminLabel() {
    console.log('getAdminlabel');
    if (this.state.admin === false) {
      return "admin login";
    } else {
      return "logout";
    }
  }

  render() {
    return (
      <div>
        <Navbar handleNavClick={ this.handleNavClick } isAdmin={ this.state.admin } />
        <main>
        { this.getContent() }
        </main>
        <Footer adminSwither={ this.adminSwither} getAdminLabel={this.getAdminLabel}/>
      </div>
    );
  }
}
export default App;
