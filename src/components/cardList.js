import React from "react";
import Card from "./card";
import "../containers/app.css";


const CardList = ({cats}) => {

    
    // Return for render.
    return (
        <div className='cat-card--container'>

            {cats.map((cat, catID) => {
                // Added key so that if prop needs to be removed, React knows which one it was so there is not
                // a whole rerender.
                return (<Card 
                        key={catID} 
                        id={cats[catID].id} 
                        name={cats[catID].name} 
                        email={cats[catID].email} 
                    />)
            })};
            

        </div>
    );
}

export default CardList;