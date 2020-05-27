import React, { Fragment } from 'react';
import './SocialMediaTitle.scss';

export default function SocialMediaTitle({ icon, alt = "Icon", title }) {
    return (
        <Fragment>
            <div className="social-media-wrapper">
                <img src={icon} alt={alt} />
                <p className="social-media">{title}<span> (optional)</span></p>
            </div>
        </Fragment>               
    )
}