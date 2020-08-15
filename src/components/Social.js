import React, { Component } from 'react';
// import '../landing.css';

class Social extends Component {
  render() {   
      return (
          <div className="ft">
              <a href="https://www.linkedin.com/in/ty-ebanks/"><i className="fab fa-linkedin fa-3x icons hvr-wobble-skew "></i></a>
              <a href="https://github.com/tyebanks/tyebanks.github.io"><i className="fab fa-github fa-3x icons hvr-wobble-skew "></i></a>
              <a href="https://twitter.com/ty_ebanks"><i className="fab fa-twitter fa-3x icons hvr-wobble-skew "></i></a>
            {/* class="icons hvr-wobble-skew  */}
          </div>
  );
}
}
export default Social;
