import React from 'react';
import './Input.scss';

export default function Input(props) {
    return (
        <input type={props.type} name={props.name} placeholder={props.placeholder} className="full-input" />
    )
}