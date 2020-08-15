import React, {Component} from 'react';
import List from '../components/List';
//import config from '../config.js';

class Skills extends Component {
 render() {
 let heading =  "TECHNICAL SKILLS";
 const subheading = "Web Programming & Other Tools:";
    return (
        // // Skills-Container   <-- old classname
        <div className="section hero is-light"> 
        <div className="container">
        <div className= "columns has-text-left-touch">
            <div id="skills" className="has-text-centered-mobile title is-size-3-mobile is-size-1-tablet">
                {heading}
            </div>       
            <div className="custom-subheading is-size-5-mobile column is-four-fifths-mobile"> 
                 {subheading}
            </div>   
            <div className="level-item is-mobile">              
                  <div className="">           
                     <List text1="HTML5" text2="CSS3" text3="JavaScript" text4="PHP" text5="ReactJS" text6="GatsbyJS"/>
                     <List text1="Java/Eclipse" text2="WordPress" text3="Joomla" text4="GitHub" text5="Atom" text6="VS Code"/>
                     {/* <List text1="Adobe Illustrator" text2="Adobe PhotoShop" text3="Figma" text4="inVision" text5="Discord" text6="Slack"/> */}
            </div>
            </div>
        </div>
        </div>
    </div>
  );
    }
}

export default Skills;