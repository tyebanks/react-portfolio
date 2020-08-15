import React from 'react';
import config from '../config.js';
//import Social from '../components/Social.js';
import '../App.css';

function Contact() {
  return ( 
    <div className="Contact-Container columns is-vcentered">
      <div className="column pt-6">
      {config.contacts.map(contact => {const {heading, text, url,mail, } = contact;
         return (
            <div className="columns is-mobile is-centered">
               <div className="column py-3">
                 <div id="contact" className="has-text-centered-touch has-text-centered-desktop">
                   <h2 className="is-size-1" style={{color: "#B19EFF"}}>{heading}</h2>
                   <h3 className="is-size-3">{text}</h3>
                   <a className="has-text-primary" href={mail+url}>{url}</a>
                 </div>
               </div>
             </div>
            );})
        }
      </div>
    </div>
  );
}

export default Contact;