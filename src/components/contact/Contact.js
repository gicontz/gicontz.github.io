import React from 'react';
import { __screenHeight } from '../../models/Dimensions'
import { useSpring, animated as a, interpolate } from 'react-spring'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import Fullpage from "../fullpage/fullpage"
import FluidText from "../FluidText";

function Contact(){
  return (
    <div>
        <div className="heading">
            <h4>Let&rsquo;s make things happen.</h4>
            <a href="mailto:gimelcontz@gmail.com" style={{ 'color': '#9f9f9f' }} >gimelcontz@gmail.com</a>
        </div>
        <form action="https://formspree.io/mknjgdaj" method="POST">
            <div className="form-group">
                <span className='label'>NAME</span>
                <input type="text" name="name"/>
            </div>
            <div className="form-group email">
                <span className='label'>EMAIL</span>
                <input type="email" name="_replyto"/>
            </div>
            <div className="message-area">
                <div className="form-group">
                    <span className='label'>MESSAGE</span>
                    <textarea  name="message" id="message" ></textarea>
                </div>
                <input type="submit" value="Send" className='submit' />
            </div>
        </form>
    </div>
  );
}
export default Contact;
