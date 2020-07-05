// Code Keypad Component Here
import React, {Component} from 'react'

class Keypad extends Component{
    passwordMessage = () => {
        console.log("Entering password...")
    }
    render(){
        return(<input onKeyUp={this.passwordMessage} type="password" />)
    }
}

export default Keypad