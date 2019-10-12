import ReactDom from 'react-dom';
import React from 'react';
import './HeroBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import fluid from "fluid-system";

const Text = styled("p")(
  fluid({
    cssProperty: "fontSize",
    scale: "fontSizes"
  })
);

function HeroBanner() {
  return (
      <header className="App-header">
        <div className="row">
          <div className="social-icons col-md-3">
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></a></li>              
            </ul>
          </div>
          <div className="side-menu col-md-4 offset-md-5">
          <div className="menu-nav text-left">
            <FontAwesomeIcon icon="bars" size="sm" className="menu-bar-icon" /><span>MENU</span>
          </div>
          <dl className="name-def">
            <rt>/jim-el/</rt>
            <dt><h1>gimel</h1></dt>
            <dd>third alphabet character <br/>
                in Hebrew and the first <br/>
                name of a game changer</dd>
          </dl>
          </div>
        </div>
      </header>
  );
}

export default HeroBanner;
