import React from 'react';
import './Input.scss';

export default function Input({type, name, placeholder}) {
    return (
        <input type={type} name={name} placeholder={placeholder} className="full-input" />
    )
}