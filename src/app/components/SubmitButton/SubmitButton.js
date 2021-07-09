

import React from 'react'
import PropTypes from 'prop-types'

// rfcp
// 


const SubmitButton = (props) => {
    return (
        <button type="submit" className="sbutton" style={{
            backgroundColor: props.backColor,
            border: 'none',
            color: 'white',
            fontSize: '32pt',
            fontWeight: '900',
            padding: '5px 10px',
            boxshadow: '10px 10px 25px grey',
            margin: '10px 20px'
        }}>
            {props.children}
        </button>
    );
};



SubmitButton.propTypes = {
    children: PropTypes.node.isRequired,
    backColor: PropTypes.string.isRequired

}


SubmitButton.defaultProps = { backColor: 'green' }


export default SubmitButton; 