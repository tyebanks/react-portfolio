import React, {Component} from 'react';
import 'bulma/css/bulma.css'

class Button extends Component {
    render() {
        return(
            <div className="level has-text-weight-bold">
            <div className="buttons are-medium level-item cvButton mt-5 pb-6">
                <a href="index.html" class="button is-primary is-rounded" >Download CV</a>
            </div>
            </div>
        );
    }
}
export default Button;