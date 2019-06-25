import React from 'react';
import './css/featureCard.css';
import person from './person1.jpg';

function FeatureCard() {
  var featurePicStyle = {
    backgroundImage: 'url(' + person + ')'
  };
  return (
    <div className="featuredCard flex">
      <div className="featurePic" style={featurePicStyle}> </div>
      <div className="bio">
        <div className="role text-upper text-letter-space text-small text-weight-light"> valedictorian </div>
        <div className="name"> <h2 className="text-weight-bold">John Smith</h2> </div>
        <div className="degree text-small text-upper text-weight-light"> Comp Sci </div>
        <div className="quote"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae lacinia erat. Nullam et augue eget libero euismod fringilla. Pellentesque in odio lacus. Maecenas placerat eros ac massa porttitor tincidunt.  </div>
      </div>
    </div>
  );
}

export default FeatureCard;
