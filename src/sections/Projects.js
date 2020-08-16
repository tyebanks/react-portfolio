import React, {Component} from 'react';
import Card from '../components/Card';
import project1 from '../imgs/project1.jpg';
import project2 from '../imgs/project2.jpg';
import project3 from '../imgs/project3.jpg';


class Projects extends Component {
 render() {
 let heading =  "MY PROJECTS";
      return (
          <div id="projects" className="section hero is-light pt-0 Projects-Container">
             <div className="container">
                 <div className= "has-text-left">
                      <div className="custom-heading column is-centered has-text-centered">
                            <div className="pt-6 pb-4 is-size-3-mobile is-size-1-tablet">{heading}</div>
                      </div>
                 </div>
              </div>
            <div className="columns is-9 is-multiline-tablet is-centered px-6">
              <div className="column is-one-third-tablet">              
                <Card title="Web Design:" subtitle1="Outlandish" subtitle2="GatsbyJS" image={project1} alt="outlandish-project"/>
              </div>
              <div className="column is-one-third-tablet">
                <Card title= "Web Dev:" subtitle1="Hero Game" subtitle2="JavaScript" image={project2} alt="hero-game"/>  
              </div>
              <div className="column is-one-third-tablet">
                <Card title= "Web Dev:" subtitle1="Web News Site" subtitle2="HTML5 + CSS3" image={project3} alt="news-site"/>  
              </div>
              </div>  
              </div>
        )
 }
}
export default Projects;