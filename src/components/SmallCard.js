import React from 'react';

const SmallCard = (props) => {
    return (
        <div>
           <div class="card column mx-6 mb-5 ">
                 <header className="px-5 pt-5">
                       <h2 className="title is-6">{props.title}</h2>
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
export default SmallCard;