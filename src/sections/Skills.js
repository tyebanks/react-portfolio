import React, {Component} from 'react';
import List from '../components/List';
//import config from '../config.js';

class Skills extends Component {
 render() {
 let heading =  "Technical Skills";
    return (
        <div className="hero is-light is-bold Skills-Container">
            <div className="columns is-centered mt-6 py-5">
                <h1 className="has-text-centered title is-1">{heading}</h1>
            </div>                  
            <header className="is-mobile" >     
            <div className="level-item has-text-centered">
                <List title="Web Programming & Other Tools" text1="" text2="" text3="" text4="" text5="" text6=""/>
            </div>

            <div className="level-item has-text-centered">
                <List text1="" text2="" text3="" text4="" text5="" text6=""/>
            </div>

            <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Following</p>
                  <p className="title">123</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
               <div>
                 <p className="heading">Followers</p>
                 <p className="title">456K</p>
               </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Likes</p>
                <p className="title">789</p>
              </div>
            </div>
            </header>
    </div>
  );
    }
}

export default Skills;