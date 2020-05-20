import React from 'react';
import './SideContent.scss';

export default function SideContent(props) {
    return (
        <div className="col-md-4">
            <p className="side-content-title">{props.title}</p>
            <p className="side-content-text">{props.content}</p>
        </div>
    );
}