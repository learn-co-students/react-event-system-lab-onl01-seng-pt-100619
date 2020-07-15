import React from 'react';

class EyesOnMe extends React.Component {
    EyesOnMe = () => {
        console.log("HEYYY")
    }
    render (){
        return (
            <div>   
                <EyesOnMe />
            </div>
        )
    }

}
export default EyesOnMe;