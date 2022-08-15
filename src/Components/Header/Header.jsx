import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">Vote for</span>
          <span className="line color"> Change</span>
          {/* <span className="line">
          </span> */}
            <span className="color line"></span> 
        </h1>
        <div className="buttons">
          <a href="#projects">my agenda</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
