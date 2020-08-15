import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar.js';
import Landing from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Landing />
    <Skills/>
    <Projects/>
    <Education/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
