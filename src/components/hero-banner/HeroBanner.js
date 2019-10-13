import React from 'react';
import {__screenHeight} from '../../models/Dimensions'
import './HeroBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import Text from "../Text";

const bannerHeight = {
  height: __screenHeight()
};

const HeroBanner = props => {
  var theme = props.apptheme;

  return (
      <header className="App-header" style={bannerHeight}>
        <div className="row">
          <div className="social-icons col-md-3">
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></a></li>              
            </ul>
          </div>
          <div className="side-menu col-md-5 offset-md-4" style={bannerHeight}>
            <div className="menu-nav text-left">
                <a href="#">
                  <FontAwesomeIcon icon="bars" size="sm" className="menu-bar-icon" /><span>MENU</span>
                </a>
            </div>
              <div className="def-section">
                <dl className="name-def">
                  <rt>/jim-el/</rt>
                  <dt><h1>gimel</h1></dt>
                  <Text fontSize={[13,20]} color="blue">third alphabet character <br/>
                      in Hebrew and the first <br/>
                      name of a game changer</Text>
                </dl>
              </div>
          </div>
        </div>
      </header>
  );
}
export default HeroBanner;
