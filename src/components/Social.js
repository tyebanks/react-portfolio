import React from 'react';
import config from '../config.js';

export default function Social() {
    return (
        <div>{config.socialLinks.map(social => {const {icon, url } = social;
               return (
                        <a  href={url} key={url} className={`fa-2x has-text-white px-2`}>
                        <i className={`fab ${icon}`}></i></a>
               );})
            }
        </div>
    );
}
