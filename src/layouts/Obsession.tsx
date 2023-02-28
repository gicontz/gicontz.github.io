import { HalfContainer } from '@components/Containers';
import React, { FunctionComponent, useState } from 'react';
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
    height: 100vh;
    background-image: url(${require('@assets/images/dev.jpg')});
    background-size: cover;
    @media screen and (max-width: 800px) {
        height: 50vh;
    }
`;

const RightContainer = styled(HalfContainer)`
    box-sizing: border-box;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 800px) {
        height: 50vh;
        width: 95%;
    }
`;

const Obsession: FunctionComponent<Props> = ({ isActive }) => {
    const [state, setState] = useState({ index: 0, prevX: 0 });

    const hobbies = ['React', 'ReactNative', 'CSS', 
    'SASS', 'Performance Tuning', 
    'Adobe Premier', 'Angular', 'Shell Scripts', 
    'Game Development', 'SQL', 'C#.Net', 'Windows Presentation Foundation',
    'Javascript', 'Internet of Things'];

    const __mouseMove = (e: any) => {
        if(state.prevX > (e.screenX + 20) || state.prevX < (e.screenX - 20)){
            setState({ index: Math.floor(Math.random() * Math.floor(hobbies.length)), prevX: e.screenX });
        }
    }

    return (
        <Container className={`animate__animated ${isActive ? 
            'animate__fadeInUp' : 'animate__fadeOutDown'}`} onMouseMove={__mouseMove} >
            <LeftContainer />
            <RightContainer>
                <h2>Now, I'm working with <br /><strong>{hobbies[state.index]}</strong>.</h2>
                <div className="info-section">
                <p>I don't know if I have sickness... </p>
                <p>To be obsessed in mobile development and everything in digital world</p>
                <p>But if this is an illness, I don't wanna be cured.</p>
                </div>
            </RightContainer>
        </Container>
    );
}

export default Obsession;
