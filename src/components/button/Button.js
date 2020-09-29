import React from "react";


function Button(props) {
    return (
        <button onClick={props.clickHandler}>Next quote!</button>
    )
};

export default Button;