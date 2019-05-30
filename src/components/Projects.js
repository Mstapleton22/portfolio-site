import React, { Component } from 'react';


class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: [
        {
          image: "./treeline.jpg",
          name: "Galvanize Eats",
          description: "Restaurant website that calculates your order price",
          tech: "HTML, CSS, vanilla JavaScript",
          github: "https://github.com/Mstapleton22/galvanize-eats"
        },
        {
          image: "./treeline.jpg",
          name: "Rocket Software HackaTHON",
          description: "Lightweight parking app that allows the user to park without pulling out a credit card",
          tech: "React.js, MDBootstrap, CSS3",
          github: "https://github.com/jculver1/Rocket-Build"
        },
        {
          image: "./treeline.jpg",
          name: "sPark",
          description: "Lightweight parking app that allows the user to park without pulling out a credit card",
          tech: "React.js, Twilio, Ngrok, Express.js, Knex.js, CSS3",
          github: "https://github.com/Truvisory/parking-app-ui"
        },
        {
          image: "./treeline.jpg",
          name: "Famers Markit",
          description: "Social app that allows the user to connect with local farmers markets, small businesses and products",
          tech: "Vue, CSS3, ProCreate, Knex.js, Express.js, PostgresSQL",
          github: "https://github.com/Mstapleton22/farmers-markit-frontend/tree/michael"
        },
        {
          image: "./treeline.jpg",
          name: "Pixal Art Maker",
          description: "Pixal art space to create images using pixals",
          tech: "HTML, CSS3, JavaScript",
          github: "https://github.com/Mstapleton22/pixel-art-maker"
        },
        {
          image: "./treeline.jpg",
          name: "Inbox",
          description: "Email inbox that allows user to read, write, delete and favorite emails",
          tech: "React.js, Bootstrap, JavaScript",
          github: "https://github.com/Mstapleton22/react-inbox"
        },
        {
          image: "./treeline.jpg",
          name: "Steven Universe Characters",
          description: "Character card generator for the multiverse of the cartoon Steven Universe",
          tech: "React.js, Bootstrap, JavaScript",
          github: "https://github.com/Mstapleton22/stevenuniverse-react"
        },
        {
          image: "./treeline.jpg",
          name: "Shopping Cart",
          description: "A shopping cart that allows user to add items to their cart and calculate the total of their items",
          tech: "React.js, Bootstrap, JavaScript",
          github: "https://github.com/Mstapleton22/shoppingCartReact"
        },
        {
          image: "./treeline.jpg",
          name: "PassPortal",
          description: "A place to blog about your previous trips around the world",
          tech: "Vue, CSS3, JavaScript",
          github: "https://github.com/Mstapleton22/passport-frontend"
        },
        {
          image: "./treeline.jpg",
          name: "FlashCards app",
          description: "A study tool for the methods of Javascript",
          tech: "React.js, Bootstrap, JavaScript",
          github: "https://github.com/Mstapleton22/javaScript-flashcards"
        }
      ],
      counter: 0,
    }
  }

  nextSlide() {
    if (this.state.counter < this.state.projects.length - 1) {
      this.setState({
        counter: this.state.counter + 1
      })
    } else {
      this.setState({
        counter: 0
      })
    }
    console.log(this.state.projects[this.state.counter])
  }

  backSlide() {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      })
    } else {
      this.setState({
        counter: this.state.projects.length - 1
      })
    }
    console.log(this.state.projects[this.state.counter])
  }

  render() {
    return (
      <div className="projects">
        <div class='header row'>
          <div class='col-lg-6 col-md-12 col-sm-12'>
            <img className="projectImg" src={this.state.projects[this.state.counter].image} alt="project photo" />
          </div>
          {/* </div> */}
          {/* <div class='body row'> */}
          {/* <div class="col-6"></div> */}
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div>{this.state.projects[this.state.counter].name}</div>
            <div>{this.state.projects[this.state.counter].description}</div>
            <h5 class=''>The Tech:</h5>
            {/* <div class=''> */}
            <div>{this.state.projects[this.state.counter].tech}</div>
            {/* </div> */}
            <a href={this.state.projects[this.state.counter].github} target="_blank">Checkout the code on GitHub!</a>
            <div class="">
              <div className="fa fa-arrow-left fa-2x arrowLeft" onClick={() => this.backSlide()}></div>
              <div className="fa fa-arrow-right fa-2x arrowRight" onClick={() => this.nextSlide()}></div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Projects;
