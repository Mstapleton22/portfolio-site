import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar.js';
// import Slider from '../components/Slider.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PhotoSlide from './Photography.js';
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";
// import ScrollingWrapper from './Backtotop.js';

class About extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <article className="About">
        <section className="large">
          <MDBRow className="row ">
            <MDBCol className="">
              <MDBView >
                <div className="parallax parallaxText">
                  <div className="col-6">
                    <h1>Michael George Stapleton</h1>
                    <div className="iconRow">
                      <a href="mailTo:mike.stapleton2@gmail.com"><i className="pr-5 fas fa-at icon"></i></a>
                      <a href="https://github.com/Mstapleton22" target="_blank"><i className="pl-5 pr-5 fab fa-github icon"></i></a>
                      <a href="https://www.linkedin.com/in/mgstapleton/" target="_blank"><i className="pl-5 pr-5 fab fa-linkedin-in icon"></i></a>
                      <a href="https://www.instagram.com/george.michael.travels/" target="_blank"><i className="pl-5 pr-5 fab fa-instagram icon"></i></a>
                    </div>
                  </div>
                </div>
                <MDBMask className="d-flex align-items-end">
                  <div class="col-md-4"></div>
                  <div class="col-md-4"></div>
                  <div className="row">
                    <p className="white-text h5 mr-5 ml-5 text-monospace text-right text-wrap">
                      “There is only one way to learn. It's through action. Everything you need to know you have learned through your journey.”
        ― Paulo Coelho, The Alchemist
</p>
                  </div>
                </MDBMask>
              </MDBView>
            </MDBCol>
          </MDBRow >
        </section>
        <section className="row large">
          <div className="text-center col-lg-12 col-md-3 col-sm-12 col-xs-12">
            <h1 className="text-dark name bio col-12">Hey! I'm Michael</h1>
            <div className="bio cardDescription col-12">
              <p className="text-dark bio">Culture Consumer ● Yogi ● Imaginator</p>
            </div>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6 ">
                <p className="text-dark bio cardDescription1">I began coding in COBOL and shortly realized my passions reside in UI/UX design, user experience and layout. The ability to convey a message through digitial story telling is a crucial part of why I code. Speed and pushing the bounds of the ethernet are my focus.</p>
              </div>
              <div className="col-3"></div>
            </div>
            <div className="row">
              <div className="bio cardDescription col-12">
                <p className="text-dark bio">CREATIVE ● SKILLED ● MOTIVATED</p>
              </div>
            </div>
          </div>
        </section>
        <div className="arrow-down"></div>
        <section className="row pt-5 large">
          <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
            <div className="text-center col-lg-12 col-md-3 col-sm-12 col-xs-12">
              <h1 className="cardWord black-text">
                I code. <br></br> Here's what I know:
            </h1>
            </div>
          </div>
          <div class="lighten-3 text-center col-lg-7 col-md-3 col-sm-12 col-xs-12">
            <div className="text-center codeDescription col-lg-12 col-md-3 col-sm-12 col-xs-12">
              <ProgressBar className="progressbar" />
            </div>
          </div>
        </section>

        <section className="row photoContainer large">
          <div className="text-center col-lg-12 col-md-3 col-sm-12 col-xs-12 ">
            <h1 className="text-center black-text col-lg-12 col-md-3 col-sm-12 col-xs-12 ">
              photography
              </h1>
            <div className=" text-center col-lg-12 col-md-3 col-sm-12 col-xs-12 ">

              <PhotoSlide />
            </div>
          </div>
        </section>
        <section className="text-center col-lg-12 col-md-3 col-sm-12 col-xs-12 large">
          <h1 className="text-center black-text col-lg-12 col-md-3 col-sm-12 col-xs-12 ">Design</h1>
          <div className="row design">
            <img className="imageDesign logo" src={process.env.PUBLIC_URL + '/logoName.png'} alt="Card image"></img>
            <img className="imageDesign logo" src={process.env.PUBLIC_URL + '/bunny.png'} alt="Card image"></img>
            <img className="imageDesign logo" src={process.env.PUBLIC_URL + '/bee.png'} alt="Card image"></img>
            <img className="imageDesign logo" src={process.env.PUBLIC_URL + '/squirrel.png'} alt="Card image"></img>
            <img className="imageDesign logo" src={process.env.PUBLIC_URL + '/logoNoName.png'} alt="Card image"></img>
          </div>
          <div className="row justify-content-center">
            <Link to="/projects" >
              <button className="black-text waves-effect btn">more projects</button>
            </Link>
          </div>
        </section>
        <section className="row large">
          <div className="text-center black-text col-lg-6 col-md-3 col-sm-12 col-xs-12">
            <h1>More of a document type? <br></br> Check out the resume</h1>
          </div>
          <div className="text-center black-text col-lg-6 col-md-3 col-sm-12 col-xs-12">
            <div className="cardResume black-text text-dark col-lg-12 col-md-3 col-sm-12 col-xs-12">
              <a className="resume black-text" onClick={this.toggleHidden} href="https://drive.google.com/file/d/0By_oA_Z0oxCGd09fdEJ3Vk5MaUtEcGpEUUVHSjFIUkxwUVNJ/view?usp=sharing" target="_blank">
                Click to View
              </a>
            </div>
          </div>
        </section>
      </article>
    );
  }
}

export default About;
