import React from 'react';

const List = (props) => {
    return (
        <div>
           <div class="column mx-6 mb-5 ">
                 <header className="px-5 pt-5">
                       <h2 className="title is-6">{props.title}</h2>
                 </header>
                  <p className="">{props.text1}</p>
                  <p className="">{props.text2}</p>
                  <p className="">{props.text3}</p>
                  <p className="">{props.text4}</p>
                  <p className="">{props.text5}</p>
                  <p className="">{props.text6}</p>                           
            </div>    
        </div>
    )
}
export default List;