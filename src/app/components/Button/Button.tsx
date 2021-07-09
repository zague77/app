//import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

const Button = (props: { text: string, backColor?: string, clickEvt: Function , style?:{}}) => {
    return (
        <button className="mon-button"
        //en css le dernier qui a parlé qui a raison
            style={{...props.style, backgroundColor: props.backColor }}
            onClick={(evt) => {
                console.log(evt);
                props.clickEvt(props.text);
            }} >{props.text}</button>
    );
};

//
Button.propTypes = {
    text: PropTypes.string.isRequired,
    backColor: PropTypes.string,
    clickEvt: PropTypes.func.isRequired
};
//
Button.defaultProps = {
    backColor: 'green',
    clickEvt: (text: string) => {
        console.log('button clicked -->' + text);
    }
};

export default Button;
