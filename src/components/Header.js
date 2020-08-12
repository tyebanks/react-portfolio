import React, { Component } from 'react';
import NavBar from './NavBar.js';
import MainImage from '../components/MainImage.js';
import About from '../components/About.js'
import Button from '../components/Button.js'
import Social from '../components/Social';


class Header extends Component {
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
export default Header;
 