import React, { Component } from 'react';
import NavBar from './NavBar.js';
import MainImage from './MainImage.js';
import About from './About.js'
import Button from './Button.js'
import Social from './Social';


class TopPage extends Component {
    render() {   
      return (
        <div className="Top-header">
           <NavBar/>
           <MainImage/>
           <About/>
           <Button/>
           <Social/>
        </div>
      );
    }
}
export default TopPage;
 