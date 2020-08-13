import React from 'react';

const Project = (props) => {
    return (
        <div>
            <h1 className="title is-1">{props.heading}</h1> 
            <div class="task-container columns is-multiline">
                 <div class="column is-one-quarter">
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                     <h2 className="title is-4">{props.title}</h2>
                              </div>                          
                            </div>
                            <div className="card-image">
                                <figure className="card-image">{props.image}</figure>
                            </div>
                        
                                        
                            <div className="card-footer">
                              {/* <span><p className="card-footer-item">{props.description}</p></span> */}
                              <h3 className="card-footer-item subtitle is-5">{props.subtitle}</h3>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}
export default Project;