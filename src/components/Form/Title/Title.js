import React from 'react';
import './Title.scss';

export default function HeaderTitle(props) {
    return (
        <div className="row">
            <div className="col">
                <h1 className="blue-title">{props.title}</h1>
            </div>
        </div>
    );
}