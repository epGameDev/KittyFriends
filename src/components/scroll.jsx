import PropTypes from "prop-types";

import "../containers/app.css";

const Scroll = (props) => {
    return (
        <div className="scroll">
            {props.children}
        </div>

    )
}

export default Scroll;

Scroll.propTypes = {
    children: PropTypes.any
}