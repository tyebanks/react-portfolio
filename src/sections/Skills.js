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
            <div id="skills" className="title is-size-3-mobile is-size-1-tablet">
               <p className="is-size-3-mobile is-size-1-tablet">{heading}</p>
            </div>       
            <div className="column is-four-fifths-mobile"> 
               <p className="custom-subheading  is-size-5-mobile">{subheading}</p>
               <div className="level-item py-4">           
                   <List text1="HTML5" text2="CSS3" text3="JavaScript" text4="PHP" text5="ReactJS" text6="Gatsby" text7="WordPress" text8="Joomla"/>
                   <List text1="Java/Eclipse" text2="Atom" text3="VS Code" text4="GitHub" text5="Figma" text6="inVision" text7="Discord" text8="Slack"/>
               </div> 
            </div>   
        </div>
      </div>
    </div>
  );
    }
}

export default Skills;