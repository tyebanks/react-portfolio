import React from 'react';
import config from '../config.js';

export default function ContactInfo() {
    return(
        <div>
        {config.contacts.map(contact => {const {heading, text, url,mail, } = contact;
            return (
                <div>
                    <h2 className="is-size-1" style={{color: "#B19EFF"}}>{heading}</h2>
                    <h3 className="is-size-3">{text}</h3>
                    <a className="has-text-primary" href={mail+url}>{url}</a>
                </div>
            );})
        }
      
        </div>
    );
}