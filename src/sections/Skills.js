import React, {Component} from 'react';
import List from '../components/List';
//import config from '../config.js';

class Skills extends Component {
 render() {
 let heading =  "TECHNICAL SKILLS";
 const subheading = "Web Programming & Other Tools:";
    return (
        // // Skills-Container   <-- old classname
    <div id="skills" className="section hero is-light"> 
      <div className="container">
        <div className= "has-text-left">
            <div className="custom-heading column is-centered has-text-centered">
               <div className="mt-6 pt-3 is-size-3-mobile is-size-1-tablet">{heading}</div>
            </div>       
            <div className="column is-vcentered has-text-left"> 
               <div className="column is-centered custom-subheading is-size-5-mobile is-size-3-tablet mb-3 is-tablet">{subheading}</div>
               <div id="skills-list" className="columns is-multiline is-mobile column is-centered-tablet ">  
                  <div className="pr-2">         
                     <List text1="HTML5" text2="CSS3" text3="JavaScript" text4="PHP" text5="ReactJS" text6="Gatsby" text7="WordPress" text8="Joomla"/>
                  </div> 
                  <div className="pl-2">
                     <List text1="Java/Eclipse" text2="Atom" text3="VS Code" text4="GitHub" text5="Figma" text6="inVision" text7="Discord" text8="Slack"/>
                  </div>
               </div>
            </div>   
        </div>
      </div>
    </div>
  );
    }
}

export default Skills;