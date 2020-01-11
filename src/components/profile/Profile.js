import React from 'react';
import {useSpring} from 'react-spring'
import { Transition } from 'react-spring/renderprops'
import './Profile.css';

function Profile() {

  return (
    <div>
        <h2>Hello There!<br /> I'm <strong>Gimel</strong>.</h2>
        <div className="info-section">
        <p>
          Application Development runs in my veins.<br/>
          Die-hard fan of Google Technology. Yes, a Web Developer<br/>
          But if you don't ask, I love Performance Arts <br/>
          </p>
        </div>
    </div>
  );
}

export default Profile;
