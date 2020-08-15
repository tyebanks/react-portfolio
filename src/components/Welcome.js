import React, { Component } from 'react';

import '../landing.css';

class Welcome extends Component {
  render() {   
      return (
           <main>        
                  <h1 className="greeting">OH, <br className= "line-break"></br>HELLO THERE.</h1>
                  <p className="aboutme">I’m Ty! I love designing websites. I currently spend my days honing my skills as a Junior Web Developer, while listening to Coldplay on Spotify.</p>
           </main>
      );
    }
}
export default Welcome;
