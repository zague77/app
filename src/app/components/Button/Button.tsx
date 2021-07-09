//import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

//possibilité de faire call buttonprops : mais instancie objet
// plutot interface : on dédfinit pas de fonction, juste de svaleurs en javascript

/***
 * interface ButtonProps
 */
interface ButtonProps {
    text : string,
    clickEvt :  Function,
    backColor?: string,
    style?: {}

}

const Button = (props: ButtonProps) => {
    return (
        <button className="mon-button"
            //en css le dernier qui a parlé qui a raison
            style={{ ...props.style, backgroundColor: props.backColor }}
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
