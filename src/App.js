import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
// import About from './components/About';
// import Resume from './components/Resume';
import Projects from './components/Projects';
import Nav from './components/Nav';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isHidden: false,
    }
  }

  toggleHidden = () => {
    this.setState()({
      isHidden: !this.state.isHidden,
    })
  }
  render() {
    return (
      <div className="App">
        <Router>
          <article className="App">
            <Nav />
            <Route path="/" exact component={Home} />
            {/* <Route path="/about" exact component={About}
              toggleHidden={this.toggleHidden}
              isHidden={this.state.isHidden}
            /> */}
            {/* <Route path="/resume" exact component={Resume} /> */}
            <Route path="/projects" exact component={Projects} />
          </article>
        </Router>
      </div>
    );
  }
}

export default App;
