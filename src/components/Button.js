import React, {Component} from 'react';
import 'bulma/css/bulma.css'

class Button extends Component {
    render() {
        return(
            <div id="button">
                 <button class="btn" type="submit" onclick="window.open('https://tyebanks.github.io/cv.pdf')">Download CV</button>
            </div>
        );
    }
}
export default Button;