import React from 'react';
import ContactInfo from '../components/ContactInfo.js';
import Social from '../components/Social.js';
import '../App.css';


function Contact() {
  
  return (
      
    <div className="hero is-dark is-bold Contact-Container">
      <ContactInfo/>
      <Social/>
    </div>
  );
}

export default Contact;