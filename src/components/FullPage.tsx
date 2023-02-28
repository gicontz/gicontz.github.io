import React, { FunctionComponent }  from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Profile from '@layouts/Profile';
import Obsession from '@layouts/Obsession';
import Banner from '@layouts/Banner';
import Contact from '@layouts/Contacts';

const Fullpage: FunctionComponent = () => {
  const [activeSection, setActiveSection] = React.useState(0);
  
  return (
  <ReactFullpage
      licenseKey={process.env.REACT_APP_LICENSE_KEY}
      credits={{ enabled: false }}
      scrollingSpeed={500}
      easingcss3='cubic-bezier(0.950, 0.050, 0.795, 0.035)'
      sectionsColor={['transparent', '#ffffff', '#ffffff', 'ffffff', '#ffffff']}
      onLeave={(origin, destination, direction) => {
        setActiveSection(destination.index);
      }} 
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
              <div className="section" id="banner">
                <Banner />
              </div>
              <div className="section" id="profile">
                <Profile isActive={activeSection === 1} />
              </div>
              <div className="section" id="hobby" >
                <Obsession isActive={activeSection === 2} />
              </div>
              <div className="section" id="contact">
                <Contact />
              </div>
          </ReactFullpage.Wrapper>
        );
      }}
  />
)
    };

export default Fullpage;