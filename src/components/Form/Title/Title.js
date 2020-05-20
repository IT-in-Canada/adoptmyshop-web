import React from 'react';
import './Title.scss';

export default function Title(props) {
    return (
        <div className="row">
            <div className="col">
                <h1 className="page-title">{props.title}</h1>
            </div>
        </div>
    );
}