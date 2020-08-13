import React from 'react';

const Project = (props) => {
    return (
        <div>
            <h1 className="title is-1">{props.heading}</h1> 
            <h2 className="title is-4">{props.title}</h2>
            <h3 className="title is-5">{props.subtitle}</h3>
        </div>
    )
}
export default Project;