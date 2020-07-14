import React, { Component } from 'react'
import { TC } from './App'

export default class CC extends Component {
    themeStyles(dark){
        return{
            backgroundColor:dark ? "#333" : "#CCC",
            color: dark ? "#CCC" : "#333",
            padding: "2rem",
            margin:"2rem"
        }
    }

    render(){
        return (
            <TC.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
            }}
            </TC.Consumer>
        )
    }
}