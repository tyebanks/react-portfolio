import React, { Component } from 'react';

import MainImage from '../components/MainImage.js';
import Welcome from '../components/Welcome.js'
import Button from '../components/Button.js'
import Social from '../components/Social';
import '../landing.css';

class Hero extends Component {
    render() {   
      return (
        <div id="index" className="landing-container">
           <MainImage/>
           <Welcome/>
           <Button/>
           <Social/>
        </div>
      );
    }
}
export default Hero;
 