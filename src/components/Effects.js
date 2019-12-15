import React, { Component } from 'react';
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";

class Effects extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (

      <MDBRow className="row ">
        <MDBCol className="">
          <MDBView >
            <div className="parallax parallaxText">
              <div className="col-6">
                <h1>Michael George Stapleton</h1>
                <div className="iconRow pr-5">
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

    )
  }
}

export default Effects;