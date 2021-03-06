import React, { Component } from 'react';
import logo from '../imgs/logo.png';
import '../index.css';

class NavBar extends Component {
  render() {   
      return (
        // navbar is-hidden-tablet className="navbar  is-fixed-top  level " role="navigation" aria-label="main navigation"
        <nav className="navbar  is-fixed-top  level">
          
             <a href="#index">Home</a>
             <a href="#skills">Skills</a>
             <a href="#projects">Projects</a>
             <a href="#education">Education</a>
             <a href="#contact">Contact</a>
          
                    <div className="level-item">
                        <p className="image is-64x64"><img src={logo} className="" alt="logo"/> </p>
                    </div>
                    
         </nav>

    /* classname for spinnning logo App-logo/
        /* // <nav class="navbar has-shadow mb-6" role="navigation" aria-label="main navigation">
        //    <div className="columns">
        //    <div className="column is-one-quarter"></div>
        //        <div className="column is-half"><img src={logo} className="App-logo" alt="logo" /></div>
        //        <div className="column is-one-quarter"><i className="fas fa-angle-down" aria-hidden="true"></i></div> 
        //        <div className="column is-half"><i className="fas fa-angle-down" aria-hidden="true"></i></div> 
        //    </div>
        // </nav> */
      );
    }
}
export default NavBar;

