import React from 'react';
import './css/featureCard.css';
import person from './person1.jpg';

function FeatureCard(props) {
  var featurePicStyle = {
    backgroundImage: 'url(' + person + ')'
  };
  return (
    <div className="featuredCard flex">
      <div className="featurePic" style={featurePicStyle}> </div>
      <div className="bio">
        <div className="role text-upper text-letter-space text-small text-weight-light"> {props.role} </div>
        <div className="name"> <h2 className="text-weight-bold">{props.name}</h2> </div>
        <div className="degree text-small text-upper text-weight-light"> {props.degree} </div>
        <div className="quote"> {props.quote} </div>
      </div>
    </div>
  );
}

export default FeatureCard;
