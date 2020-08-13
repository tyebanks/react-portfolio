import React, {Component} from 'react';
import List from '../components/List';
import Uon from '../imgs/uon-logo.png';
import Ucci from '../imgs/ucci-logo.png';


class Education extends Component {
 render() {
 let heading =  "Education";
        return (
            <div className="hero is-light is-bold Education-Container">
               <div className="columns is-centered mt-6 py-5">
               <h1 className="has-text-centered title is-1">{heading}</h1></div>
              <div className="columns is-centered">              
                <List img={Uon} alt="uon logo" title="BSc Business Computing (Web Design)" text1="2018 - Present" text2="University of Northampton" text3="Waterside Campus" text4="Northampton, United Kingdom"/>
                <List img={Ucci} alt="ucci logo" title="Associate Degree in Computer Science" text1="2015 - 2017" text2="University College of C.I." text3="Olympic Way" text4="Grand Cayman, Cayman Islands"/>
              </div>        
            </div>
        )
 }
}
export default Education;