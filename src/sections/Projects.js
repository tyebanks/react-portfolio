import React, {Component} from 'react';
import Project from '../components/Project';
import project1 from '../imgs/project1.jpg';
import project2 from '../imgs/project2.jpg';
import project3 from '../imgs/project3.jpg';


class Projects extends Component {
 render() {
 let heading =  "My Projects";
        return (
            <div className="hero is-light is-bold Projects-Container">
               <div className="columns is-centered mt-6 py-5">
               <h1 className="has-text-centered title is-1">{heading}</h1></div>
              <div className="columns is-centered">              
                <Project title="Web Design: 2" subtitle1="Outlandish" subtitle2="GatsbyJS" image={<img src={project1} alt="outlandish-project"/>}/>
                <Project title= "Web Development: 2" subtitle1="Hero Game" subtitle2="JavaScript" image={<img src={project2} alt="hero-game" />}/>  
                <Project title= "Web Development: 1" subtitle1="Web News Site" subtitle2="HTML5 + CSS3" image={<img src={project3} alt="news-site" />}/>  
              </div>        
            </div>
        )
 }
}
export default Projects;