import React from 'react';
import './Title.scss';

export default function Title({title}) {
    return (
        <div className="row">
            <div className="col">
                <h1 className="page-title">{title}</h1>
            </div>
        </div>
    );
}