import React from 'react';

class EyesOnMe extends React.Component {
        onFocus = () => console.log("keypad component")
        onBlur = () => console.log("Enter Password")
        
    
    render (){
        return (
            <button onFocus={this.onFocus} onBlur={this.onBlur}>
               Eyes on me, Please!

            </button>
        )
    }
}
export default EyesOnMe;