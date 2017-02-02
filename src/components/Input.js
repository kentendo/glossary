import React, { PropTypes } from 'react';

const Input = (props) => {
    return (<span style={{
        padding: "5px",
        float: 'right'
    }}>
        {props.label} <input style={{verticalAlign:'bottom', height: '30px', fontSize: '18px'}} onChange={props.onChange} />
    </span>);
}

Input.PropTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;