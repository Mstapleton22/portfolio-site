import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar.js';
// import Slider from '../components/Slider.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PhotoSlide from './Photography.js';

class About extends Component {
  constructor() {
    super()
    this.state = {
      isHidden: false,
      aboutMe: false,
      code: false,
      design: false,
      photography: false,
    }

  }
  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }
  toggleAboutMe = () => {
    this.setState({
      aboutMe: !this.state.aboutMe,
    })
  }
  toggleCode = () => {
    this.setState({
      code: !this.state.code,
    })
  }
  toggleDesign = () => {
    this.setState({
      design: !this.state.design,
    })
  }
  togglePhotography = () => {
    this.setState({
      photography: !this.state.photography,
    })
  }


  render() {
    return (
      <div className="About">

        {/* <div className="NavAbout"></div> */}
        <div className="row self justify-content-center">
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
        </div>
        <div className="row pt-5">
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
        </div>
        <div className="row photoContainer">
          <div className="text-center col-lg-12 col-md-3 col-sm-12 col-xs-12 ">
            <h1 className="text-center black-text col-lg-12 col-md-3 col-sm-12 col-xs-12 ">
              photography
              </h1>
            <div className=" text-center col-lg-12 col-md-3 col-sm-12 col-xs-12 ">
              {/* <Slider /> */}
              <PhotoSlide />
            </div>
          </div>
        </div>
        <div className="text-center col-lg-12 col-md-3 col-sm-12 col-xs-12">
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
        </div>
        <div className="row">
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
        </div >
      </div >
    );
  }
}

export default About;
