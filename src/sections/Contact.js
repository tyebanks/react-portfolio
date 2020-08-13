import React from 'react';
// import Header from '../components/Header.js';

import '../App.css';
const subtitle1 = "Email";
const subtitle2 = "LinkedIn";
const subtitle3 = "Twitter";

function Contact() {
    const title = "Give me a Shout.";
  return (
      
    <div className="hero is-dark is-bold Contact-Container">
        <Head/>
        <h2 className="title is-2">{title}</h2>
        <h3 className="title is-4">{subtitle1}</h3>
        <h3 className="title is-4">{subtitle2}</h3>
        <h3 className="title is-4">{subtitle3}</h3>
    </div>
  );
}

export default Contact;