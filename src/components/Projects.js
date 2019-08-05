import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'


class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: [
        {
          id: "rocket",
          word: "rocketText",
          image: "./aelcDuo.png",
          name: "Rocket Software HackaTHON winner",
          description: "Fully Responsive web app constructed with school faculty, staff and parents in mind. With the help of this website, the staff will spend 50% less time on the phone and 50% more time focused on students.",
          tech: "AWS (SES, IAM & s3), React.js, Knex.js, Express.js, PostgrSQL, Heroku, MDBootstrap, CSS3",
          github: "https://intense-badlands-80434.herokuapp.com/"
        },
        {
          id: "aged",
          word: "agedText",
          image: "./mockupAgedandinfused.png",
          name: "Aged & Infused",
          description: "An app that allows users to customize infusion kits based off of the company Aged & Infused's ingredient list",
          tech: "Vue, VueX, JavaScript, HTML5, CSS3, ProCreate, Illustrator",
          github: "https://www.youtube.com/watch?time_continue=1&v=2n2z1Vu2ndc"
        },
        {
          id: "spark",
          word: "sparkText",
          image: "./sParkstack.png",
          name: "sPark",
          description: "Lightweight parking app that allows the user to park without pulling out a credit card",
          tech: "React.js, Twilio, Ngrok, Express.js, Knex.js, CSS3",
          github: "https://github.com/Truvisory/parking-app-ui"
        },
        {
          id: "farmers",
          word: "farmersText",
          image: "./farmersmarkitsphone.png",
          name: "Famers Markit",
          description: "Social app that allows the user to connect with local farmers markets, small businesses and products",
          tech: "Vue, CSS3, ProCreate, Knex.js, Express.js, PostgresSQL",
          github: "https://github.com/Mstapleton22/farmers-markit-frontend/tree/michael"
        },
        {
          id: "eats",
          word: "eatsText",
          image: "/galvanizeEatsTable.jpg",
          name: "Galvanize Eats",
          description: "Restaurant website that calculates your order price",
          tech: "HTML5, CSS3, vanilla JavaScript, DOM manipulation",
          github: "https://github.com/Mstapleton22/galvanize-eats"
        },
        {
          id: "inbox",
          word: "inboxText",
          image: "./inboxTablet.jpg",
          name: "Inbox",
          description: "Email inbox that allows user to read, write, delete and favorite emails",
          tech: "React.js, Bootstrap, JavaScript, Knex.js, Express.js, PostgresSQL",
          github: "https://github.com/Mstapleton22/react-inbox"
        },
        {
          id: "steven",
          word: "stevenText",
          image: "./stevenLaptop1.png",
          name: "Steven Universe Characters",
          description: "Character card generator for the multiverse of the cartoon Steven Universe",
          tech: "React.js, Bootstrap, JavaScript",
          github: "https://github.com/Mstapleton22/stevenuniverse-react"
        },
        {
          id: "cart",
          word: "cartText",
          image: "./shoppingCartTablet.jpg",
          name: "Shopping Cart",
          description: "A shopping cart that allows user to add items to their cart and calculate the total of their items",
          tech: "React.js, Bootstrap, JavaScript",
          github: "https://github.com/Mstapleton22/shoppingCartReact"
        },
        {
          id: "pixal",
          word: "pixalText",
          image: "./pixalArtTablet1.png",
          name: "Pixal Art Maker",
          description: "Pixel art space to create images using pixels",
          tech: "HTML, CSS3, JavaScript",
          github: "https://github.com/Mstapleton22/pixel-art-maker"
        },
      ],
      icons: [
        {
          image: "./icons/apple.png",
          name: "Apple"
        },
        {
          image: "./icons/bananapeppers.png",
          name: "Banana Peppers"
        },

        {
          image: "./icons/blueberries.png",
          name: "Blueberries",
        },

        {
          image: "./icons/cherry.png",
          name: "Cheery"
        },

        {
          image: "./icons/chilipepper.png",
          name: "Chili Peppers"
        },
        {
          image: "./icons/cinammon.png",
          name: "Cinammon"
        },
        {
          image: "./icons/clove.png",
          name: "Clove"
        },
        {
          image: "./icons/coffee.png",
          name: "Coffee"
        },
        {
          image: "./icons/grapefruit.png",
          name: "Grapefruit"
        },
        {
          image: "./icons/hibiscus.png",
          name: "Hibiscus"
        },
        {
          image: "./icons/jalapeno.png",
          name: "Jalapeno"
        },
        {
          image: "./icons/lavendar.png",
          name: "Lavendar"
        },
        {
          image: "./icons/lemon.png",
          name: "Lemon"
        },
        {
          image: "./icons/lime.png",
          name: "Lime"
        },
        {
          image: "./icons/orange.png",
          name: "Orange"
        },
        {
          image: "./icons/pickles.png",
          name: "Pickles"
        },
        {
          image: "./icons/pineapple.png",
          name: "Pineapple"
        },
        {
          image: "./icons/rosemary.png",
          name: "Rosemary"
        },
        {
          image: "./icons/strawberry.png",
          name: "Stawberry"
        },
        {
          image: "./icons/sundriedtomato.png",
          name: "Sundried Tomatoes"
        },
        {
          image: "./icons/vanilla.png",
          name: "Vanilla"
        },
        {
          image: "./icons/whiskey.png",
          name: "Whiskey"
        },
        {
          image: "./icons/bottle.png",
          name: "Infusion Bottle"
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="projects container-fluid">
          <div>
            {
              this.state.projects.map(item =>
                < div className="projectCard" >
                  <div className="row">

                    <div className="col-lg-7">
                      <Fade left Cascade >
                        <div id={item.id}></div>
                        <img className="projectImg" src={`${item.image}`} />
                      </Fade>
                    </div>
                    <div className="col-lg-4">
                      <Zoom >
                        <div id={item.word}></div>
                        <h1 className="projectText">{item.name}</h1>
                        <h4 className="projectText">{item.description}</h4>
                        <h5 className="projectText">{item.tech}</h5>
                        <a className="projectText" href={`${item.github}`}>Link to the good stuff</a>
                      </Zoom>
                    </div>
                  </div>
                </div>

              )
            }
          </div>
        </div>
        <div className="iconsRow container">
          <div className="row">
            {this.state.icons.map(item =>
              <div className="col-lg-2">
                <div >
                  <img className="icons" src={item.image} />
                  <p>{item.name}</p>
                </div>

              </div>

            )
            }
            <div className="col-lg-10">
              <div >
                <p>blah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Projects;
