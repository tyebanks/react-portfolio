import React from 'react';

const List = (props) => {
    return (
        <div>
           <div class="column mx-5 mb-5 card">
                 <header className="card-header mb-3">
                       <h2 className="card-header-title">{props.title}</h2>
                 </header>     
                 <div className="card-image">
                      <figure className="image is-128x128">{props.image}</figure>
                 </div>                   
                 <div className="card-content">
                      <p className="">{props.text1}</p>
                      <p className="">{props.text2}</p>
                      <p className="">{props.text3}</p>
                </div>             
            </div>    
        </div>
    )
}
export default List;