import React, {Component} from 'react';
import List from '../components/List';
//import config from '../config.js';

class Skills extends Component {
 render() {
 let heading =  "Technical Skills";
    return (
        <div className="hero is-light is-bold Skills-Container">
        <div className= "has-text-centered-touch">
            <div className="columns is-centered mt-6 py-5">
                <h1 id="skills" className="has-text-centered title is-1">{heading}</h1>
            </div>                  
            <header className="level is-touch">     
               <div className="has-text-centered"><List title="Web Programming, Design & Collaborative Tools"/></div>
                  <div className="level-item has-text-centered">
           
                     <List text1="HTML5" text2="CSS3" text3="JavaScript" text4="PHP" text5="ReactJS" text6="GatsbyJS"/>
                     <List text1="Java/Eclipse" text2="WordPress" text3="Joomla" text4="GitHub" text5="Atom" text6="VS Code"/>
                     <List text1="Adobe Illustrator" text2="Adobe PhotoShop" text3="Figma" text4="inVision" text5="Discord" text6="Slack"/>
            </div>
            </header>
        </div>
    </div>
  );
    }
}

export default Skills;