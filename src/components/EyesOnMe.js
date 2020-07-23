import React from 'react'

class EyesOnMe extends React.Component {  

    focusing = event => { 
        console.log('Good!') 
    }

    blurring = event => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return(
            <button onFocus={this.focusing} onBlur={this.blurring}>button</button>
        )
    }
}

export default EyesOnMe 

