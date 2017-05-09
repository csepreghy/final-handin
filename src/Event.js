import React from 'react';

const Event = ({initMap}) => (
  <li onClick={ initMap }>
    <div className="collapsible-header">
      <div className="icon-container">
        <i className="material-icons">keyboard_arrow_down</i>
    </div>
    <div className="event-info-container">
      <h2>22 May, Thu. 20:00 - Tech event title</h2>
        <span>This is a one line description</span>
        <div className="tag-container">
          <div className="chip">React<i className="close material-icons">close</i></div>
          <div className="chip">Yo!<i className="close material-icons">close</i></div>
          <div className="chip">Fuck C#!<i className="close material-icons">close</i></div>
        </div>
    </div>
  </div>
  <div className="collapsible-body">
    <div className="content-left">
      <p>Freegan retro flexitarian, bushwick crucifix sriracha polaroid four loko banh mi banjo. 3 wolf moon street art waistcoat, forage vexillologist pork belly art party etsy VHS yuccie typewriter viral air plant pitchfork. Hammock vaporware live-edge, af crucifix shoreditch umami godard four dollar toast man bun +1 polaroid. Farm-to-table kogi gentrify poke, thundercats.</p>
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
);

export default Event;