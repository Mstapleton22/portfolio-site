import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar.js';
import Slider from '../components/Slider.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

        <div className="NavAbout"></div>
        <div className="row self">
          <div className=" no-padding no-gutters col-lg-6 col-md-3 col-sm-12 col-xs-12">
            <img className="imageAbout no-padding" src={process.env.PUBLIC_URL + '/self.jpg'} alt="Card image"></img>
          </div>
          <div className="red darken-2 text-center col-lg-6 col-md-3 col-sm-12 col-xs-12">
            {this.state.aboutMe ?
              <div className="red darken-2 text-center cardDescription col-lg-12 col-md-3 col-sm-12 col-xs-12">
                <div className="row">
                  <h1 className="name bio col-12">Hey! I'm Michael</h1>
                  <div className="bio cardDescription col-12">
                    <p className="bio">Culture Consumer ● Yogi ● Imaginator</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-6 ">
                    <p className="bio cardDescription1">I began coding in COBOL and shortly realized my passions reside in UI/UX design, user experience and layout. The ability to convey a message through digitial story telling is a crucial part of why I code. Speed and pushing the bounds of the ethernet are my focus.</p>
                  </div>
                  <div className="col-3"></div>
                </div>
                <div className="row">
                  <div className="bio cardDescription col-12">
                    <p className="bio">CREATIVE ● SKILLED ● MOTIVATED</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5"></div>
                  <button className="buttonBack waves-effect btn "
                    onClick={this.toggleAboutMe}
                  >
                    Back
                </button>
                  <div className="col-5"></div>
                </div>
              </div>
              :
              <div className="red darken-2 text-center col-lg-12 col-md-3 col-sm-12 col-xs-12">
                <div className="cardWord white-text">
                  <button className="buttonAbout white-text "
                    onClick={this.toggleAboutMe}
                  >
                    about me
                </button>
                </div>
              </div>
            }
          </div>
        </div>
        <div className="row">
          <div class="cyan darken-2 lighten-3 text-center col-lg-6 col-md-3 col-sm-12 col-xs-12">
            {this.state.code ?
              <div className="cyan darken-2 text-center codeDescription col-lg-12 col-md-3 col-sm-12 col-xs-12">
                <ProgressBar className="progressbar" />
                <button className="buttonBack waves-effect btn "
                  onClick={this.toggleCode}
                >
                  Back
                </button>
              </div> :
              <div className="cyan darken-2 text-center col-lg-12 col-md-3 col-sm-12 col-xs-12">
                <div className="cardWord white-text">
                  <button className="buttonAbout white-text"
                    onClick={this.toggleCode}
                  >
                    code
  </button>
                </div>
              </div>
            }

          </div>
          <div className="no-padding col-lg-6 col-md-3 col-sm-12 col-xs-12">
            <img className="imageAbout" src={process.env.PUBLIC_URL + '/ocean.jpg'} alt="Card image"></img>
          </div>
        </div>
        <div className="row">
          <div className="deep-orange darken-2 text-center col-lg-12 col-md-3 col-sm-12 col-xs-12 ">
            {this.state.photography ?
              <div className="deep-orange darken-2 text-center col-lg-12 col-md-3 col-sm-12 col-xs-12 ">
                <Slider />
                <button className="buttonBack waves-effect btn "
                  onClick={this.togglePhotography}
                >
                  back
        </button>
              </div>
              :
              <div className="deep-orange darken-2 text-center col-lg-12 col-md-3 col-sm-12 col-xs-12 ">
                <div className="cardPhoto white-text"></div>
                <button className="buttonAbout white-text"
                  onClick={this.togglePhotography}
                >
                  photography
            </button>
              </div>
            }
          </div>
        </div>
        <div className="row">
          <div className=" no-padding no-gutters col-lg-6 col-md-3 col-sm-12 col-xs-12">
            <img className="imageAbout logo no-padding" src={process.env.PUBLIC_URL + '/logoName.png'} alt="Card image"></img>
          </div>
          <div className="lime text-center col-lg-6 col-md-3 col-sm-12 col-xs-12">
            {this.state.design ?
              <div className="lime text-center  col-lg-12 col-md-3 col-sm-12 col-xs-12">
                <div className="row design">
                  <img className="imageDesign logo no-padding" src={process.env.PUBLIC_URL + '/bunny.png'} alt="Card image"></img>
                  <img className="imageDesign logo no-padding" src={process.env.PUBLIC_URL + '/bluebird.png'} alt="Card image"></img>
                  <img className="imageDesign logo no-padding" src={process.env.PUBLIC_URL + '/bee.png'} alt="Card image"></img>
                  <img className="imageDesign logo no-padding" src={process.env.PUBLIC_URL + '/squirrel.png'} alt="Card image"></img>
                  <img className="imageDesign logo no-padding" src={process.env.PUBLIC_URL + '/logoNoName.png'} alt="Card image"></img>
                </div>
                <div className="row">
                  <div className="col-3"></div>
                  <button className="buttonBackDesign col-3 waves-effect btn "
                    onClick={this.toggleDesign}
                  >
                    back
              </button>
                  <Link to="/projects" >
                    <button className=" waves-effect btn">more projects</button>
                  </Link>
                  <div className="col-3"></div>
                </div>
              </div> :
              <div className="lime text-center white-text col-lg-12 col-md-3 col-sm-12 col-xs-12">
                <div className="cardDesign white-text"></div>
                <button className="buttonAbout white-text"
                  onClick={this.toggleDesign}
                >
                  design
              </button>
              </div>
            }

          </div>
        </div>
        <div className="row">

          <div className="light-blue text-center col-lg-6 col-md-3 col-sm-12 col-xs-12">
            {this.state.isHidden ?
              <div className="light-blue cardResume white-text col-lg-12 col-md-3 col-sm-12 col-xs-12">
                <a className="resume" onClick={this.toggleHidden} href="https://drive.google.com/file/d/0By_oA_Z0oxCGd09fdEJ3Vk5MaUtEcGpEUUVHSjFIUkxwUVNJ/view?usp=sharing" target="_blank">
                  Click to View
                </a>
              </div> :
              <div className="light-blue cardResume white-text col-lg-12 col-md-3 col-sm-12 col-xs-12">
                <div className="cardResume white-text"></div>
                <button className="buttonAbout white-text"
                  onClick={this.toggleHidden}
                >
                  Resume
                </button>
              </div>
            }

          </div>
          <div className=" no-padding no-gutters col-lg-6 col-md-3 col-sm-12 col-xs-12">
            <img className="imageAbout no-padding" src={process.env.PUBLIC_URL + '/gamcheon.jpg'} alt="Card image"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
