import React from 'react';
import './Label.scss';

export default function Label(props){
    return(
        <label htmlFor={props.htmlFor}>{props.text}</label>
    )
}