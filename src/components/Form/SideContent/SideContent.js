import React from 'react';
import { Fragment } from 'react';
import './SideContent.scss';

export default function SideContent({title, content}) {
    return (
        <Fragment>
            <p className="side-content-title">{title}</p>
            <p className="side-content-text">{content}</p>
        </Fragment>

    );
}