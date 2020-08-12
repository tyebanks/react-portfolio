import React, { Component } from 'react';
import myImg from '../imgs/portfolioImg.jpg';

class MainImage extends Component {
    render() {   
      return (
        <div className="column is-full pt-5 mainImage">
          <figure className="image "><img src={myImg} className="myImg is-rounded" alt="Ty Ebanks" /></figure> 
        </div>
      );
    }
}
export default MainImage;