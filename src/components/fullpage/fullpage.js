import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Profile from '../profile/Profile'

const Fullpage = () => (
    <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */
    sectionsColor = {['transparent', '#f2f2f2', '#f2f2f2', 'f2f2f2', '#f2f2f2']}
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