import React from 'react';
import './SocialMedia.scss';

export default function SocialMedia({ icon, alt, title, type = "text", name, placeholder, text, customClass = "full-input"}) {
    return (
        <div className="input-block">
            <div className="social-title-media-wrapper">
                <img src={icon} alt={alt} />
                <p className="social-media">{title}<span> (optional)</span></p>
            </div>
            <input type={type} name={name} placeholder={placeholder} className={customClass} />
            <label htmlFor={name}>{text}</label>
        </div>
    )
}