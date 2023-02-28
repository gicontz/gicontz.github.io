import React, { FunctionComponent } from 'react';
import { __screenHeight } from '@utilities/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";
// import './HeroBanner.css';
import Fullpage from "@components/FullPage";

const SideMenu = styled.div`
  background-color: #dec7de;
  background-image: url('../assets/images/blu-stripes.png');
  background-blend-mode: overlay;
  background-repeat: repeat;
  padding-left: 35px;
`;

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

const HeroBanner: FunctionComponent = () => {
  return (
      <header className="App-header" style={bannerHeight}>
        <div className="row">
          <div className="main-content col-md-7">
          <Fullpage />
            <div className="social-icons">
              <ul>
                <li><a href="https://fb.com/gicontz" target='_blank'><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/></a></li>
                <li><a href="https://twitter.com/gimickan" target='_blank'><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/></a></li>
                <li><a href="https://github.com/gicontz" target='_blank'><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a></li>
                <li><a href="https://instagram.com/gimickan" target='_blank'><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></a></li>              
              </ul>
            </div>
          </div>
          <SideMenu style={bannerHeight}>
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
                  <p color="#565656">
                     third alphabet character <br/>
                      in Hebrew and the first <br/>
                      name of a game changer
                  </p>
                </dl>
              </div>
          </SideMenu>
        </div>
      </header>
  );
};

export default HeroBanner;
