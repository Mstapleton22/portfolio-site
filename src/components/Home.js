import React, { Component } from 'react';
import Effects from '../components/Effects.js';
import About from '../components/About.1.js'
// import '../App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    // className="App"
    return (
      <div >
        <Effects />
        <About />
      </div>
    );
  }
}

export default App;
