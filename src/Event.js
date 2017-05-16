import React, {Component} from 'react';

class Event extends Component {

  constructor(props) {
    super();
    
  }

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  render() {
    return (
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header">
            <div className="icon-container">
              <a className="keyboard_arrow_down" onClick={ this.initMap }><i className="material-icons">keyboard_arrow_down</i></a>
            </div>
            <div className="event-info-container">
              <h2>{ this.props.title }</h2>
                <span>{ this.props.smallDescription }</span>
                <div className="tag-container">
                  {
                    this.props.tags.map((item, index) => {
                      return (
                        <div key={ index } className="chip">{ item }</div>
                      )
                    })
                  }
                </div>
            </div>
          </div>
          <div className="collapsible-body">
            <div className="content-left">
              <p>{ this.props.description }</p>
              <ul>
                <li><br/></li>
                <li>
                  <span>20:00 - 21:00 - Some presentation</span><br/>
                  <span>Some description</span>
                </li>
                <li>
                  <span>21:00 - 21:15 - Break</span>
                </li>
                <li>
                  <span>21:15 - 22:00 - Other presentation</span><br/>
                  <span>Some description</span>
                </li>
                <li>
                  <span>22:00 - 23:00 - Other workshop</span><br/>
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
                <img src="assets/google.png" alt=""/>
                <img src="assets/tesla.png" alt=""/>
                <img src="assets/apple.png" alt=""/>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}
export default Event;