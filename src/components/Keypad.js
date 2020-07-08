// Code Keypad Component Here

import React, { Component } from 'react';

class Keypad extends Component {
   handleKeypad = () => {
      console.log('Entering password...')
   }

   render() {
      return(
         <input type='password' onKeyUp={this.handleKeypad} />
      )
   }
}

export default Keypad;
