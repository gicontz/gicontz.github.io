import { HalfContainer } from '@components/Containers';
import { __isVisible } from '@utilities/browser';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
  isActive?: boolean;
}

const Container = styled.div`
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 800px) {
      flex-wrap: wrap;
      flex-direction: column;
  }
`;

const LeftContainer = styled(HalfContainer)`
  display: flex;
  padding-left: 20px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 800px) {
      height: 50vh;
  }
`;

const RightContainer = styled(HalfContainer)`
  height: 100vh;
  background-image: url(${require('@assets/images/dive.jpg')});
  background-position-x: -500px;
  @media screen and (max-width: 800px) {
      height: 50vh;    
      background-position-y: -275px;
      background-position-x: -760px;
  }
`;

const Profile: FunctionComponent<Props> = ({ isActive }) => {
  
  return (
      <Container className={`animate__animated ${isActive ? 
        'animate__fadeIn' : 'animate__fadeOut'}`}>
        <LeftContainer>
          <h2>Hello There!<br /> I'm <strong>Gim</strong>.</h2>
          <div className="info-section">
          <p>Application Development runs in my veins.</p>
          <p>Frontend Development is my favorite but making services making me great.</p>
          <p>But if you don't ask, I'm a Freediver</p>
          </div>
        </LeftContainer>
        <RightContainer />
      </Container>
  );
}

export default Profile;
