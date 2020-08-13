import React, {Component} from 'react';
import Project from '../components/Project';
import project1 from '../imgs/project1.png';
import project2 from '../imgs/project2.jpg';
import project3 from '../imgs/project3.jpg';
// import '../App.css';

class Projects extends Component {
 render() {
        return (
            <div>
                <Project heading="My Projects" title="Outlandish Cayman" image={<img src={project1} alt="outlandish-project"/>} subtitle="GatsbyJS + Bootstrap"/>
                <Project title= "Hero Game" subtitle="JavaScript"  image={<img src={project2} alt="hero-game" />}/>  
                <Project title= "Web Developer News" subtitle="HTML5 + CSS3" image={<img src={project3} alt="news-site" />}/>         
            </div>
        )
 }
}
export default Projects;