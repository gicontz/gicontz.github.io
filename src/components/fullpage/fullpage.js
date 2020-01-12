import React  from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Profile from '../profile/Profile'
import Obsession from '../obsession/Obsession'
import Contact from '../contact/Contact'

const Fullpage = () => (
    <ReactFullpage
    //fullpage options
    licenseKey = {'g1wk&AR^c1'}
    easingcss3 = {'cubic-bezier(0.875, 0.01, 0.70, 0.075)'}
    scrollingSpeed = {1000} /* Options here */
    sectionsColor = {['transparent', '#ffffff', '#ffffff', 'ffffff', '#ffffff']}
    anchor = {['banner', 'profile', 'hobby']}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id="banner">
          </div>
          <ReactFullpage.Wrapper>
            <div className="section" id="profile">
              <Profile />
            </div>
            <div className="section" id="hobby">
              <Obsession />
            </div>
            <div className="section" id="contact">
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;