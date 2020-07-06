// Code EyesOnMe Component Here
import React, { Component } from "react"

export default class EyesOnMe extends Component {
    
    constructor() {

    }

    render() {
        <button onFocus = {() => {console.log("Good!")}} onBlur = {() => {console.log('Hey! Eyes on me!')}}></button>
    }

}