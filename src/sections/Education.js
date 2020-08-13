import React, {Component} from 'react';
import List from '../components/List';
import Uon from '../imgs/uon-logo.jpg';
import Ucci from '../imgs/ucci-logo.jpg';


class Education extends Component {
 render() {
 let heading =  "Education";
        return (
            <div className="hero is-light is-bold Education-Container">
               <div className="columns is-centered mt-6 py-5">
               <h1 className="has-text-centered title is-1">{heading}</h1></div>
              <div className="columns is-centered">              
                <List img={Uon} alt="uon logo" title="BSc Business Computing (Web Design)" text1="University of Northampton" text2="Waterside Campus" text3="Northampton, U.K."/>
                <List img={Ucci} alt="ucci logo" title="Associate Degree in Computer Science" text1="University of the Cayman Islands" text2="Olympic Way, George Town" text3="Grand Cayman, C.I."/>
              </div>        
            </div>
        )
 }
}
export default Education;