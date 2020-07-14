import React from 'react'

class Keypad extends Component { 

    handleChange = event => { 
        console.log('Entering password...') 
    }

    render(){
        return( 
            <input onKeyUp={this.handleChange} type="password" /> 
        )
    }
}

export default Keypad  
