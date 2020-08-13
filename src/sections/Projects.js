import React, {Component} from 'react';
import Project from '../components/Project';
import project1 from '../imgs/project1.jpg';
import project2 from '../imgs/project2.jpg';
import project3 from '../imgs/project3.jpg';
// import '../App.css';

class Projects extends Component {
 render() {
 let heading =  "My Projects";
        return (
            <div className="hero is-light is-bold Projects-Container">
               <div><h1 className="has-text-centered title is-1 mt-6 mb-6">{heading}</h1></div>
              <div className="columns">
                <Project title="Web Design: 2" subtitle1="GatsbyJS + Bootstrap" subtitle2="Outlandish.ky" image={<img src={project1} alt="outlandish-project"/>}/>
                <Project title= "Web Development: 2" subtitle1="JavaScript" subtitle2="Hero Game" image={<img src={project2} alt="hero-game" />}/>  
                <Project title= "Web Development: 1" subtitle1="HTML5 + CSS3" subtitle2="Web Dev News Site" image={<img src={project3} alt="news-site" />}/> 
                  
              </div>        
            </div>
        )
 }
}
export default Projects;