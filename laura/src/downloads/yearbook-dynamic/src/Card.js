import React from 'react';
import './css/card.css';
import person from './person2.jpg';
function Card(props) {
  var featurePicStyle = {
    backgroundImage: 'url(' + person + ')'
  };
  return (
    <div className="card">
      <div className="profilePic" style={featurePicStyle}> </div>
      <div className="cardBio">
        <div className="name"> <h2 className="text-weight-bold">{props.name}</h2> </div>
        <div className="degree text-small text-upper text-weight-light"> {props.degree} </div>
        <div className="quote"> {props.quote} </div>
      </div>
    </div>
  );
}

export default Card;
