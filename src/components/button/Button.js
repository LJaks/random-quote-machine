import React from "react";
import "./button.css"


function Button(props) {
    return (
        <div>
        <button 
            style={props.backgroundColor}
            id="new-quote"
            onClick={props.clickHandler}
            >
            {props.buttonDisplayName}
            </button>
        </div>
        
    )
};

export default Button;