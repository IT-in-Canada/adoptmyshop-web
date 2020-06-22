import React from 'react';
import './SearchItem.scss';

export default function SearchItem({href, imgPath, alt, text }) {
    return (
        <div className="col-6 col-md-4 col-lg-3 search-item">
            <a href={href}>
                <img
                    className="img-fluid"
                    src={imgPath}
                    alt={alt}
                />
                {text}
            </a>
        </div>
    )
}