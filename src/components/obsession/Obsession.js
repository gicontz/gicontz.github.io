import React, { useCallback } from 'react';
import { useSpring } from 'react-spring'
import ScrollAnimation from 'react-animate-on-scroll';
import { Transition } from 'react-spring/renderprops'
import './Obsession.css';

class Obsession extends React.Component {
    constructor(props){
        super(props);
        this.state = { index: 0, prevX: 0 };
    }

    hobbies = ['React', 'ReactNative', 'CSS', 'SASS', 'Performance Tuning', 'Adobe Premier', 'Angular', 'Shell Scripts', 'Game Development']

    __mouseMove(e){
        if(this.state.prevX > (e.screenX + 20) || this.state.prevX < (e.screenX - 20)){
            this.setState( { prevX: e.screenX });
            this.setState({ index: Math.floor(Math.random() * Math.floor(this.hobbies.length - 1)) } );
        }
    }

    render() {
        const { index } = this.state
    return (
        <ScrollAnimation animateIn="fadeIn" >
            <div onMouseMove={this.__mouseMove.bind(this)} className="hobby">
                <h2>Now, I'm working with <br /><strong>{this.hobbies[this.state.index]}</strong>.</h2>
                <div className="info-section">
                <p>I don't know if I have sickness... </p>
                <p>To be obsessed in mobile development and everything in digital world</p>
                <p>But if this is an illness, I don't wanna be cured.</p>
                </div>
            </div>
        </ScrollAnimation>
    );
    }
}
export default Obsession;
