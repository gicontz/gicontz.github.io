import React from 'react';
import {useSpring, animated, interpolate} from 'react-spring'
import { Transition } from 'react-spring/renderprops'
import './Profile.css';

function Profile() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });

      const items = [1,2,3];
  return (
    <div>
        <Transition
        items={items} keys={item => item.key}
        from={{ transform: 'translate3d(0,-40px,0)' }}
        enter={{ transform: 'translate3d(0,0px,0)' }}
        leave={{ transform: 'translate3d(0,-40px,0)' }}>
        {item => props => <div style={props}>{item.text}</div>}
        </Transition>

        <h2>PROFILE</h2>
    </div>
  );
}

export default Profile;
