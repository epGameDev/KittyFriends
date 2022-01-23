import React from "react";
import "../containers/app.css";

const Scroll = (props) => {
    return (
        <div className="scroll">
            {props.children}
        </div>

    )
}

export default Scroll;