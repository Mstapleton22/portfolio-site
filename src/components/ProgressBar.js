import React from "react";
import { MDBProgress } from 'mdbreact';

const ProgressBar = () => {
  return (
    <>
      <MDBProgress value={80} className="my-4" height="30px" color="warning">
        <div className="progressText">React.js</div>
      </MDBProgress>
      <MDBProgress value={80} striped className="my-4" height="30px" color="warning">
        <div className="progressText">Vue.js</div>
      </MDBProgress>
      <MDBProgress value={100} className="my-4" height="30px" color="warning">
        <div className="progressText"> HTML5</div>
      </MDBProgress>
      <MDBProgress value={84} striped className="my-4" height="30px" color="warning">
        <div className="progressText">CSS3</div>
      </MDBProgress>
      <MDBProgress value={80} className="my-4" height="30px" color="warning">
        <div className="progressText">JavaScript</div>
      </MDBProgress>
      <MDBProgress value={55} striped className="my-4" height="30px" color="warning">
        <div className="progressText">Node.js</div>
      </MDBProgress>
      <MDBProgress value={70} className="my-4" height="30px" color="warning">
        <div className="progressText">Express.js</div>
      </MDBProgress>
      <MDBProgress value={68} striped className="my-4" height="30px" color="warning">
        <div className="progressText">Knex / Postgressql</div>
      </MDBProgress>
    </>
  );
}

export default ProgressBar;