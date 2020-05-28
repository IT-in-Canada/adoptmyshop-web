import React from 'react';
import './InputFull.scss';

export default function InputFull({name, text, placeholder, type = "text", isRequired = true}) {
    return (
        <div className="input-block">
            <input type={type} name={name} placeholder={placeholder} className="full-input" required={isRequired}/>
            <label htmlFor={name}>{text}</label>
        </div>
    )
}