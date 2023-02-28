import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
    flex-direction: column;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    background-blend-mode: overlay;
    background-color: #ebe2d6;
`;

const BgOverlay = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-image: url(${require('@assets/images/blu-stripes.png')});
    background-blend-mode: overlay;
`;

const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
        width: 32%;
        padding: 20px;
        box-sizing: border-box;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        > div {
            width: 100%;
        }
    }
`;

const TextField = styled.input`
    height: 50px;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    @media screen and (max-width: 800px) {
        height: 35px;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 250px;
`;

const FormGroup = styled.div`
    display: flex;
    width: 30%;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    > span {
        width: 114px;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 0;
    }
    @media screen and (min-width: 801px) {
        min-width: 500px;
    }
`;

const MessageArea = styled.div`
    display: flex;
    width: 30%;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-bottom: 20px;
    > input {
        width: 100px;
        margin-top: 20px;
        height: 50px;
        cursor: pointer;
    }
    > div {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        > span {
            width: 114px;
        }
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 0;
    }
    @media screen and (min-width: 801px) {
        min-width: 500px;
    }
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 800px) {
        height: 50%;
    }
`;

const SocialIcons = styled.div`
    margin-top: auto;
    > ul {
        padding-left: 0;
        display: flex;
        list-style: none;
        > li {
            margin-left: 20px;
            > a {
                color: #050608;
            }
        }
    }
`;

const Contact: FunctionComponent = () => {
  return (
    <Container>
        <BgOverlay>
            <HeadingContainer className="heading">
                <div>
                    <h4>Let&rsquo;s make things happen.</h4>
                    <a href="mailto:gimelcontz@gmail.com" style={{ 'color': '#9f9f9f' }} >gimelcontz@gmail.com</a>
                </div>
            </HeadingContainer>
            <Form action="https://formspree.io/mknjgdaj" method="POST">
                <FormGroup>
                    <span className='label'>NAME</span>
                    <TextField type="text" name="name"/>
                </FormGroup>
                <FormGroup>
                    <span className='label'>EMAIL</span>
                    <TextField type="email" name="_replyto"/>
                </FormGroup>
                <MessageArea>
                    <div>
                        <span className='label'>MESSAGE</span>
                        <TextArea  name="message" id="message" />
                    </div>
                    <input type="submit" value="Send" className='submit' />
                </MessageArea>
            </Form>
            <SocialIcons>
                <ul>
                    <li><a href="https://fb.com/gicontz" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/></a></li>
                    <li><a href="https://twitter.com/gimickan" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/></a></li>
                    <li><a href="https://github.com/gicontz" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a></li>
                    <li><a href="https://instagram.com/gimickan" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></a></li>              
                </ul>
            </SocialIcons>
        </BgOverlay>
    </Container>
  );
};

export default Contact;
