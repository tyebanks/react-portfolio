import React, { Component } from 'react';
import logo from '../imgs/logo.png';

class NavBar extends Component {
  render() {   
      return (

        <nav class="navbar is-hidden-tablet is-fixed-top level navbar has-shadow mb-6" role="navigation" aria-label="main navigation">
  
        <div class="level-left">
            <div class="level-item">
                <p class="subtitle is-5"><img src={logo} className="App-logo" alt="logo"/> </p>
            </div>
            <div class="level-right">
                <p class="level-item">menu</p>
           
            </div>
        </div>
    </nav>
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

