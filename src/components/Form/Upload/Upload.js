import React, { Fragment } from 'react';
import './Upload.scss';

export default function Upload({ title }) {
    return (
        <Fragment>
            <div className="row">
                <div className="col">
                    <p className="title-upload">{title}</p>
                    <div className="image-upload">
                        <label htmlFor="file-input">
                            <img src="./assets/placeholder-img.svg" />
                        </label><br />
                        <input id="file-input" type="file" style={{ display: "none" }} />
                        <p><span>Image Requirements: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a quam condimentum, mattis erat eu, lobortis elit.</p>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}