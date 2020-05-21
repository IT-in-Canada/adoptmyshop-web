import React from 'react';
import './Textarea.scss';

export default function Textarea(props) {
    return (
        <textarea id={props.textareaId} rows={props.rows} cols={props.cols}
            placeholder={props.placeholder} maxLength={300} className="full-textarea">
        </textarea>
    )
}