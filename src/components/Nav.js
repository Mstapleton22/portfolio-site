import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Nav extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="Nav">
        <Link key="button" key="loader" to="/">
          Home
        </Link>
        <Link to="/About">
          About
        </Link>
        <Link to="/Projects">
          Projects
        </Link>
        <a className="" href="https://drive.google.com/file/d/0By_oA_Z0oxCGd09fdEJ3Vk5MaUtEcGpEUUVHSjFIUkxwUVNJ/view?usp=sharing" target="_blank">
          Resume
        </a>
      </div>
    );
  }
}

export default Nav;
