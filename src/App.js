import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Nav from './components/Nav';

import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      // customers: [],
      // navSearch: false,
      // isLoggedIn: false
    }

  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/projects" exact component={Projects} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
