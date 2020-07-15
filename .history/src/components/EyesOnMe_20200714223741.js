import React from 'react';

class EyesOnMe extends React.Component {
    EyesOnMe = () => {
        onFocus = () => console.log("keypad component")
        onBlur = () => console.log("Enter Password")
        
    }
    render (){
        return (
            <button onFocus={this.onFocus} onBlur={this.onBlur}>
                

            </button>
        )
    }
}
export default EyesOnMe;