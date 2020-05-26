import React from 'react';
import './Label.scss';

export default function Label({htmlFor, text}){
    return(
        <label htmlFor={htmlFor}>{text}</label>
    )
}