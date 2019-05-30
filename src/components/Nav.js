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
      <div className="Nav About iconRow">
        <img className="bamboo" src={process.env.PUBLIC_URL + '/bamboo.png'} alt="bamboo" />
        <a href="mailTo:mike.stapleton2@gmail.com"><i class="fas fa-at icon"></i></a>
        <img className="bamboo" src={process.env.PUBLIC_URL + '/bamboo.png'} alt="bamboo" />


        <a href="https://github.com/Mstapleton22" target="_blank"><i class="fab fa-github icon"></i></a>
        <img className="bamboo" src={process.env.PUBLIC_URL + '/bamboo.png'} alt="bamboo" />

        <a href="https://www.linkedin.com/in/mgstapleton/" target="_blank"><i class="fab fa-linkedin-in icon"></i></a>
        <img className="bamboo" src={process.env.PUBLIC_URL + '/bamboo.png'} alt="bamboo" />

        <a href="https://www.instagram.com/george.michael.travels/" target="_blank"><i class="fab fa-instagram icon"></i></a>

        <Link key="button" key="loader" to="/">
          Home
        </Link>
        <Link to="/About">
          About
        </Link>
        <a className="" href="https://drive.google.com/file/d/0By_oA_Z0oxCGd09fdEJ3Vk5MaUtEcGpEUUVHSjFIUkxwUVNJ/view?usp=sharing" target="_blank">
          Resume
        </a>
        <Link to="/Projects">
          Projects
        </Link>
      </div>
    );
  }
}

export default Nav;
