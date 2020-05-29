import React from 'react';
import './Consentiment.scss';

export default function Consentiment() {
    return (
            <p className="consentiment-text">By checking here, I consent that the personal data provided will be used and processed by 
                <a
                    href="https://www.comit.org/"
                    target="_blank"
                    rel="noopener noreferrer"> 
                    &nbsp;IT in Canada
                </a> and 
                <a
                    href="https://westcoastfoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"> 
                    &nbsp;West Coast Foundation.
                </a>
            </p>
    )
}