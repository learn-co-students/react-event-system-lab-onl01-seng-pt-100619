import React from 'react';

class EyesOnMe extends React.Component {
        onFocus = () => console.log("keypad component")
        onBlur = () => console.log("Enter Password")
        
    
    render (){
        return (
            <button onFocus={this.onFocus} onBlur={this.onBlur}>
               EYS ON ME  

            </button>
        )
    }
}
export default EyesOnMe;