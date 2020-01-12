import React from 'react';
import {useSpring} from 'react-spring'
import ScrollAnimation from 'react-animate-on-scroll';
import { Transition } from 'react-spring/renderprops'
import './Profile.css';

function Profile() {

  return (
    <ScrollAnimation animateIn="fadeIn" style={{'overflowY': 'visible'}}>
      <div>
        <h2>Hello There!<br /> I'm <strong>Gimel</strong>.</h2>
        <div className="info-section">
        <p>Application Development runs in my veins.</p>
        <p>Die-hard fan of Google Technology. Yes, a Web Developer</p>
        <p>But if you don't ask, I love Performance Arts</p>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Profile;
