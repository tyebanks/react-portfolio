import React, { Component } from 'react';
import myImg from '../imgs/portfolioImg.jpg';
import '../landing.css';

class MainImage extends Component {
    render() {   
      return (
        <div className="img">
            <img src={myImg} className="myImg" alt="Ty Ebanks" />
        </div>
      );
    }
}
export default MainImage;
