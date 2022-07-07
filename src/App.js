import React from 'react';
import Typewriter from "typewriter-effect";

import logo from './Photo.jpeg';
import githublogo from './GitHub-Logo.wine.png';
import './App.css';

function App() {
  return (
      <div className = "App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      <Typewriter
      onInit={(typewriter)=>{
        typewriter
        .typeString("Welcome")
        .pauseFor(10)
        .deleteAll()
        .typeString("to My Portfolio!")
        .pauseFor(10)
        .deleteAll()
        .typeString("I am Roefatin")
        .pauseFor(10)
        .deleteAll()
        .typeString("from Malaysia")
        .pauseFor(10)
        .deleteAll()
        .typeString("Nice to meet you!")
        .start();
      }}
      /> 
      </p>
      <a
          className="App-link"
          href="https://github.com/roewan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githublogo} className="githubApp-logo" alt="logo" />
        </a>
      </header>
      </div>
  );
}

export default App;
