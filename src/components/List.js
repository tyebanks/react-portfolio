import React from 'react';

const List = (props) => {
    return (
        <div>
           <div className="column px-6">
               
                  <p>{props.text1}</p>
                  <p>{props.text2}</p>
                  <p>{props.text3}</p>
                  <p>{props.text4}</p>
                  <p>{props.text5}</p>
                  <p>{props.text6}</p> 
                  <p>{props.text7}</p>  
                  <p>{props.text8}</p>  
                  <p>{props.text9}</p>                            
            </div>    
        </div>
    )
}
export default List;