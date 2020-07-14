import React, { useContext } from 'react'
import { TC } from "./App"



export default function FC(){
    const darkTheme = useContext(TC)
    const themeStyles = {
        backgroundColor:darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin:"2rem"
    }
    return (
        <div style={themeStyles}>Function Theme</div>
    )
}
