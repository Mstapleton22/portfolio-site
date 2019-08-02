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

      <MDBRow className="row .no-gutters">
        <MDBCol className="">
          <MDBView hover zoom>
            <div className="parallax parallaxText">
              <div className="col-6">
                <h1>Michael George Stapleton</h1>
                <h4 href="mailTo:mike.stapleton2@gmail.com">mike.stapleton2@gmail.com</h4>
                <h4>630.542.7352</h4>
              </div>
            </div>
            <MDBMask className="d-flex align-items-end">
              <div class="col-md-4"></div>
              <div class="col-md-4"></div>
              <p className="white-text h5 mr-5 ml-5 text-monospace text-right text-wrap">
                “There is only one way to learn. It's through action. Everything you need to know you have learned through your journey.”
  ― Paulo Coelho, The Alchemist
</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>

    )
  }
}

export default Effects;