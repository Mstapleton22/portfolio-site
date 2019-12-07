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
      <div className="Nav iconRow">
        <a href="mailTo:mike.stapleton2@gmail.com"><i className="fas fa-at icon"></i></a>
        <a href="https://github.com/Mstapleton22" target="_blank"><i className="fab fa-github icon"></i></a>
        <a href="https://www.linkedin.com/in/mgstapleton/" target="_blank"><i className="fab fa-linkedin-in icon"></i></a>
        <a href="https://www.instagram.com/george.michael.travels/" target="_blank"><i className="fab fa-instagram icon"></i></a>
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
