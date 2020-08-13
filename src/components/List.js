import React from 'react';

const List = (props) => {
    return (
        <div>
           <div class="column mx-5 mb-5 card">
                 <header className="card-header mb-3">
                       <h2 className="card-header-title">{props.title}</h2>
                 </header> 
                 {/* <div className={props.classes}></div>                    */}
                 <div className="card-content">
                    <div className="media">
                        <div className="media-left">   
                            <figure className="image is-96x96"><img src={props.img} alt={props.alt}/></figure>
                        </div> 
                        <div className="media-content ">
                            <p className="">{props.text1}</p>
                            <p className="">{props.text2}</p>
                            <p className="">{props.text3}</p>
                            <p className="">{props.text4}</p>
                        </div>
                    </div>
                 </div>             
            </div>    
        </div>
    )
}
export default List;