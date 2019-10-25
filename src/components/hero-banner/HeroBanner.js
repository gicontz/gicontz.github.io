import React from 'react';
import { __screenHeight } from '../../models/Dimensions'
import './HeroBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import Fullpage from "../fullpage/fullpage"
import Text from "../Text";

/***** COMPONENTS  *****/
import Profile from '../profile/Profile'

const items = [{
    key: '1',
    text: '1'
},
{
    key: '2',
    text: '2'
},
{
    key: '3',
    text: '3'
}];

const bannerHeight = {
  height: __screenHeight()
};

const sections = [
  {  id: 'profile',
     url: "profile-sect" }, 
  { id: 'experience',
    url: "exp-sect" }, 
  { id: 'works',
    url: "work-sect" },
  { id: 'stacks',
    url: "stacks-sect" },
  { id: 'contact',
    url: "contact-sect" }
];

const __menus = sections.map((section) =>
  <li key={section.id}>
    <a href={'#' + section.url}>{section.id.toUpperCase()}</a>
  </li>
);

const HeroBanner = props => {
  var theme = props.apptheme;

  return (
      <header className="App-header" style={bannerHeight}>
        <div className="row">
          <div className="main-content col-md-7">
          <Fullpage />
            <div className="social-icons">
              <ul>
                <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></a></li>              
              </ul>
            </div>
          </div>
          <div className="side-menu col-md-5" style={bannerHeight}>
            <div className="menu-nav text-left">
                <a href="#" className="mobile-menu">
                  <FontAwesomeIcon icon="bars" size="sm" className="menu-bar-icon" /><span>MENU</span>
                </a>

                <ul className="menu-list sm-scr">
                  { __menus }
                </ul>
            </div>
              <div className="def-section">
                <dl className="name-def">
                  <rt>/jim-el/</rt>
                  <dt><h1>gimel</h1></dt>
                  <Text fontSize={[1,2]} color="#565656">third alphabet character <br/>
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
