import React from 'react';
import './Textarea.scss';

export default function Textarea({textareaId, rows, cols, placeholder, maxLength}) {
    return (
        <textarea id={textareaId} rows={rows} cols={cols}
            placeholder={placeholder} maxLength={maxLength} className="full-textarea">
        </textarea>
    )
}