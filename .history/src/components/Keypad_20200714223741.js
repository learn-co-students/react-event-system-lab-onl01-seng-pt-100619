// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

    Keypad = () => {
        handleInput = () => console.log('Please enter your password')

    }
    render (){
        return (
            <input type="password" />
        )
    }

}
export default Keypad;
