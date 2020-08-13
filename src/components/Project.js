import React from 'react';

const Project = (props) => {
    return (
        <div>
            <h1 className="title is-1">{props.heading}</h1> 
            <div className="card">
                 <div className="card-content">                
                   <h2 className="subtitle is-4">{props.title}</h2>
                   <h3 className="subtitle is-5">{props.subtitle}</h3>
                   <p>{props.description}</p>
                   </div>
            </div>
        </div>
    )
}
export default Project;