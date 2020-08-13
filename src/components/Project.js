import React from 'react';

const Project = (props) => {
    return (
        <div>
           
            
                 <div class="column">
                    <div className="card project_image">
                        <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                     <h2 className="title is-4">{props.title}</h2>
                                     <h3 className="title is-6">{props.subtitle1}</h3>
                              </div>                          
                            </div>
                            <div className="card-image">
                                <figure className="image is-4by3">{props.image}</figure>
                            </div>
                        
                                        
                            <div className="card-footer">
                              {/* <span><p className="card-footer-item">{props.description}</p></span> */}
                              <h3 className="card-footer-item subtitle is-5">{props.subtitle2}</h3>
                            </div>
                        </div>
                    </div>
                 </div>
            
        </div>
    )
}
export default Project;