import React from 'react';

const Card = (props) => {
    return (
        <div>
           <div class="column mx-5 mb-5 card_width">
              <div className="card project_image">
                  <div className="card-content">
                      <div className="media">
                          <div className="media-content">
                               <h2 className="card_title">{props.title}</h2>
                          </div>                        
                      </div>
                      <div className="card-image">
                          <figure className="image is-4by3">{props.image}</figure>
                      </div>
                    </div>
                                        
                    <div className="card-footer">
                         <span className="card-footer-item"><h3 className="title is-6 has-text-primary-dark">{props.subtitle1}</h3></span> 
                         <span className="card-footer-item"><h3 className="title is-6">{props.subtitle2}</h3></span> 
                    </div>       
              </div>
            </div>    
        </div>
    )
}
export default Card;