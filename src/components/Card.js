import React from 'react';

const Card = (props) => {
    return (
        // <div className="card-box">
            <div class="column card mb-2">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={props.image} alt={props.alt}/>
                    </figure>
                </div>
                <div class="card-content">
                    <p class="is-size-4-desktop has-text-weight-bold">{props.title}</p>
                    <p class="is-size-5-desktop">{props.subtitle2}</p>
                    <p class="is-size-5-desktop">{props.subtitle1}</p>
                </div>
            </div>
        
    )
}
export default Card;


