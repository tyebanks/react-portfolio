import React, {Component} from 'react';
import 'bulma/css/bulma.css'

class Button extends Component {
    render() {
        return(
              <button id="button" className="button is-medium is-black is-rounded btn" type="button" onClick={(e) => {
              e.preventDefault(); window.location.href='https://tyebanks.github.io/cv.pdf';
              }}>Download CV</button> 
        );
    }
}
export default Button;