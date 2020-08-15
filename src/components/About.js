import React, { Component } from 'react';

class About extends Component {
  render() {   
      return (
           <div className="container mt-1 pb-2 columns about-Container has-text-left-mobile has-text-left-tablet">
              <div className="column is-two-thirds about-Text">
                  <h1 className="is-size-2-touch is-size-1-desktop">OH, HELLO THERE.</h1>
                  <p className="has-text-black is-size-5-mobile is-size-4-tablet">I’m Ty! I love designing websites. I currently spend
                  my days honing my skills as a Junior Web Developer, while listening to Coldplay on Spotify.
                  <p>Testing</p>
                  </p>
              </div>
           </div>
      );
    }
}
export default About;
