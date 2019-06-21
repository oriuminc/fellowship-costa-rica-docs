import React from 'react';
import './css/card.css';
import person from './person2.jpg';
function Card() {
  var featurePicStyle = {
    backgroundImage: 'url(' + person + ')'
  };
  return (
    <div className="card">
      <div className="profilePic" style={featurePicStyle}> </div>
      <div className="cardBio">
        <div className="name"> <h2 className="text-weight-bold">John Smith</h2> </div>
        <div className="degree text-small text-upper text-weight-light"> Comp Sci </div>
        <div className="quote"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae lacinia erat. Nullam et augue eget libero euismod fringilla. Pellentesque in odio lacus. </div>
      </div>
    </div>
  );
}

export default Card;
