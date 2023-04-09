import React from "react";
import "./Header.css";
import Content from "../content/Content";

const Header = () => {
  return (
    <header>
     <div className="header-title" >
     <div data-aos='fade-right'>
        <div className="d-flex justify-content-center flex-column">
          <h3>Your Dream App</h3>
          <h1>Lorem ipsum <span>Lorem</span></h1>
          <a href="/" className="button">Ask for Quote</a>
        </div>
      </div>
     </div>
      <Content />
    </header>
  );
};

export default Header;
