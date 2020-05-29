import React from 'react';
import './Textarea.scss';

export default function Textarea({ textareaId, name, text, rows, cols, placeholder, maxLength, isRequired = true }) {
    return (
        <div className="input-block">
            <textarea id={textareaId} name={name} rows={rows} cols={cols}
                placeholder={placeholder} maxLength={maxLength} required={isRequired} className="full-textarea">
            </textarea>
            <label htmlFor={name}>{text}</label>
        </div>

    )
}