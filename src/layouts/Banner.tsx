import React from 'react';
import styled from 'styled-components';
import BannerPhoto from '@assets/images/banner.png';
import BlueStripes from '@assets/images/blu-stripes.png';
import { __screenHeight } from '@utilities/browser';

const Container = styled.div`
    width: 100%;
    height: ${__screenHeight()}px;
    display: flex;
    background-blend-mode: overlay;
    background-color: #FDFDFC;
    overflow: hidden;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

const ProfilePhoto = styled.div`
    width: 35%;
    @media screen and (min-width: 1024px) and (max-width: 1440px) {
        width: 75%;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        height: 75vh;
    }
`;

const Intro = styled.div`
    width: 65%;
    background-image: url(${BlueStripes});
    background-blend-mode: overlay;
    background-repeat: repeat;
    display: flex;
    @media screen and (max-width: 800px) {
        width: 100%;
        height: 28vh;
    }
`;

const DefSection = styled.div`
    display: inline-block;
    align-self: flex-end;
    margin-bottom: 30px;
    padding: 20px;
    box-sizing: border-box;
    h1 {
        font-family: 'Merriweather';
    }
    rt {
        font-size: 20px;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        margin-bottom: 0;
        rt {
            font-size: 20px;
            margin-bottom: -30px;
        }
        dt > h1 {
            margin: 0;
        }
        p {
            font-size: 12px;
        }
    }
`;

const Banner = () => {
    return (
        <Container>
            <ProfilePhoto>
                <img src={BannerPhoto} width="100%" height="100%" alt="Profile"/>
            </ProfilePhoto>
            <Intro>
                <DefSection>
                    <dl className="name-def">
                        <rt>/jim-el/</rt>
                        <dt><h1>gimel</h1></dt>
                        <p color="#565656">
                            third alphabet character <br/>
                            in Hebrew and the first <br/>
                            name of a game changer
                        </p>
                    </dl>
              </DefSection>
            </Intro>
        </Container>    
    )
};

export default Banner;