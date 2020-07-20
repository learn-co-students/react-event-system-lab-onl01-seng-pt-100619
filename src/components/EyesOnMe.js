import React, { Component } from 'react';

export default class Keypad extends Component {

    handleFocusEvent = () => {
        console.log("Good!")
    }

    handleBlurEvent = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <button onFocus={this.handleFocusEvent} onBlur={this.handleBlurEvent}></button>
        )
    };
}
