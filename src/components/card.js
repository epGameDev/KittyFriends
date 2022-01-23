import React from "react";
import "../containers/app.css";

const Card = ({name, email, id = 0}) => {

    return (

        <div className="cat-card" draggable="false">
            <div>
                <img src={`https://robohash.org/${name}?200x200&&set=set4`} alt="of a red smiling robot" draggable="false"/>
            </div>
            <div draggable="false">
                <h3> {name} </h3>
                <p>{email}</p>
            </div>
        </div>


    );
}

export default Card;