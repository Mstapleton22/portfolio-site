import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'


class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: [
        {
          image: "./AELC.png",
          name: "Rocket Software HackaTHON",
          description: "Fully Responsive web app constructed with school faculty, staff and parents in mind. With the help of this website, the staff will spend 50% less time on the phone and 50% more time focused on students.",
          tech: "AWS (SES, IAM & s3), React.js, Knex.js, Express.js, PostgrSQL, Heroku, MDBootstrap, CSS3",
          github: "https://intense-badlands-80434.herokuapp.com/"
        },
        {
          image: "./sParkstack.png",
          name: "sPark",
          description: "Lightweight parking app that allows the user to park without pulling out a credit card",
          tech: "React.js, Twilio, Ngrok, Express.js, Knex.js, CSS3",
          github: "https://github.com/Truvisory/parking-app-ui"
        },
        {
          image: "./farmersmarkitsphone.png",
          name: "Famers Markit",
          description: "Social app that allows the user to connect with local farmers markets, small businesses and products",
          tech: "Vue, CSS3, ProCreate, Knex.js, Express.js, PostgresSQL",
          github: "https://github.com/Mstapleton22/farmers-markit-frontend/tree/michael"
        },
        {
          image: "/galvenizeEats.png",
          name: "Galvanize Eats",
          description: "Restaurant website that calculates your order price",
          tech: "HTML5, CSS3, vanilla JavaScript, DOM manipulation",
          github: "https://github.com/Mstapleton22/galvanize-eats"
        },
        {
          image: "./reactInbox.png",
          name: "Inbox",
          description: "Email inbox that allows user to read, write, delete and favorite emails",
          tech: "React.js, Bootstrap, JavaScript, Knex.js, Express.js, PostgresSQL",
          github: "https://github.com/Mstapleton22/react-inbox"
        },
        {
          image: "./stevenstars.png",
          name: "Steven Universe Characters",
          description: "Character card generator for the multiverse of the cartoon Steven Universe",
          tech: "React.js, Bootstrap, JavaScript",
          github: "https://github.com/Mstapleton22/stevenuniverse-react"
        },
        {
          image: "./shoppingCart.png",
          name: "Shopping Cart",
          description: "A shopping cart that allows user to add items to their cart and calculate the total of their items",
          tech: "React.js, Bootstrap, JavaScript",
          github: "https://github.com/Mstapleton22/shoppingCartReact"
        },
        {
          image: "./pixelArt.png",
          name: "Pixal Art Maker",
          description: "Pixel art space to create images using pixels",
          tech: "HTML, CSS3, JavaScript",
          github: "https://github.com/Mstapleton22/pixel-art-maker"
        },
        {
          image: "./mockupAgedandinfused.png",
          name: "Aged & Infused",
          description: "An app that allows users to customize infusion kits based off of the company Aged & Infused's ingredient list",
          tech: "Vue, VueX, JavaScript, HTML5, CSS3, ProCreate, Illustrator",
          github: "https://www.youtube.com/watch?time_continue=1&v=2n2z1Vu2ndc"
        },
        {
          image: "./treeline.jpg",
          name: "FlashCards app",
          description: "A study tool for the methods of Javascript",
          tech: "React.js, Bootstrap, JavaScript",
          github: "https://github.com/Mstapleton22/javaScript-flashcards"
        }
      ],
    }
  }

  render() {
    return (
      <div className="projects">
        <div>
          {
            this.state.projects.map(item =>
              <div className="projectCard">
                <Fade left Cascade>
                  <img className="projectImg" src={`${item.image}`} />
                </Fade>
                <Zoom>
                  <h1>{item.name}</h1>
                  <h3>{item.description}</h3>
                  <h5>{item.tech}</h5>
                  <a href={`${item.github}`}>Link to the good stuff</a>
                </Zoom>
              </div>
            )
          }
        </div>
      </div>

    );
  }
}

export default Projects;
