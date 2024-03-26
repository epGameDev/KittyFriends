
import PropTypes from "prop-types";
import "../containers/app.css";

const Card = ({name, email}) => {

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

Card.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number
}