import React from 'react';
import { Fragment } from 'react';
import './SideContent.scss';

export default function SideContent(props) {
    return (
        <Fragment>
            <p className="side-content-title">{props.title}</p>
            <p className="side-content-text">{props.content}</p>
        </Fragment>

    );
}