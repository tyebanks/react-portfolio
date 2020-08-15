import React from 'react';

const List = (props) => {
    return (
        <div>
           <div class="column mb-5 ">
                 {/* <p className="is-one-quarter">{props.title}</p> */}
                  <p>{props.text1}</p>
                  <p>{props.text2}</p>
                  <p>{props.text3}</p>
                  <p>{props.text4}</p>
                  <p>{props.text5}</p>
                  <p>{props.text6}</p>                           
            </div>    
        </div>
    )
}
export default List;