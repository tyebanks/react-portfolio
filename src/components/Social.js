import React from 'react';
import config from '../config.js';

export default function Social() {
  return (
     <div className="size-is-1 px-2">{config.socialLinks.map(social => {const {icon, url } = social;
        return (
             <a href={url} key={url}><i className={`fab ${icon}`}></i></a>
        );})
       }
    </div>
  );
}
