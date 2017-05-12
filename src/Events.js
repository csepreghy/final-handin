import React, { Component } from 'react';
import Event from './Event';

class Events extends Component {

  constructor(props) {
    super();

    this.initMap = this.initMap.bind(this);
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
       <section id="events" className="content events">
         { 
           this.props.titles.map((item, index) => {
             return (
               <Event 
                 title={ this.props.titles[index] }
                 smallDescription={ this.props.smallDescriptions[index] }
                 description={ this.props.descriptions[index] }
                 tags={ this.props.tags[index] }
                 key={ index }
               />  
             ) 
           })
         }
       </section>
    );
  }
}

export default Events;