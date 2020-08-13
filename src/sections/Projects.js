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
            <Project heading="My Projects"/>
            <Project title="Outlandish Cayman"/>
            <figure className="project-img"> 
                <img src={project1} alt="outlandish-project"/>
            </figure>
            <Project subtitle="GatsbyJS + Bootstrap"/>
            

            <Project title= "Hero Game"/>
            <figure className="project-img">
                <img src={project2} alt="hero-game" />
            </figure>
            <Project subtitle="JavaScript"/>
            

            <Project title= "Web Developer News"/> 
            <figure className="project-img">
                <img src={project3} alt="news-site"/>
            </figure>
            <Project subtitle="HTML5 + CSS3"/>
           
        </div>)
 }
}
export default Projects;