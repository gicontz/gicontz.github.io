import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Profile from '../profile/Profile'

const Fullpage = () => (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    easingcss3 = {'cubic-bezier(0.175, 0.01, 0.70, 0.075)'}
    scrollingSpeed = {1000} /* Options here */
    sectionsColor = {['transparent', '#ffffff', '#ffffff', 'ffffff', '#ffffff']}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
          </div>
          <div className="section">
            <Profile />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;