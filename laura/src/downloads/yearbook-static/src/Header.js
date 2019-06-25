import React from 'react';
import './css/header.css';
import logo from './logo_white.png';

function Header() {
  return (
    <div className="header">
      <div className="innerHeader">
        <div className="branded">
          <div className="logo"> 
            <img src={logo} /> 
          </div>
        </div>
        <div className="classInfo flex jus-center align-center direction-col">
          <h4 className="text-white"> CLASS OF </h4>
          <h1 className="ex-lrg-text text-highlight"> 2019 </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
