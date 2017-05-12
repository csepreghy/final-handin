import React, {Component} from 'react';

class Event extends Component {

  constructor(props) {
    super();
    
  }

  componentDidMount() {
    this.initMap();
  }

  initMap() {
    console.log('Initmap');
    let uluru = {lat: 55.708353, lng: 12.522530 };
    if (typeof(google) !== "undefined") {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom:11,
        center: uluru,
        mapTypeControl: false,
        styles: [
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f7f1df"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#d0e3b4"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbd3da"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bde6ab"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe15f"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#efd151"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "black"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#cfb2db"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#a2daf2"
                    }
                ]
            }
        ]
      });
      let marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    } else {
      console.log('timeout');
      setTimeout(this.initMap, 50);
    }
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
                <div id="map"></div>
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
export default Event;