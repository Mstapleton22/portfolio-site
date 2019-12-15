import React, { Component } from 'react';

class PhotoSlide extends Component {
  state = {
    images: [
      "./buddhahead.jpg",
      "./deadsea.jpg",
      "./reflectlack.jpg",
      "./treeline.jpg",
      "./deadtree.jpg",
      "./amazon.jpg",
      "./islandaus.jpg",
      "./onions.jpg",
      "./mocahuman.jpg",
      "./morrocanwoman.jpg",
      "./monks.jpg",
      "./morocco.jpg",
      "./nyc.jpg",
      "./nyc1.jpg",
      "./selfwindow.jpg",
      "./berlinwall.jpg"
    ],
  }
  render() {
    return (
      <div className="gallery">
        {
          this.state.images.map((image, i) => (
            console.log(image[i], "iterated image"),
            <img className="image" src={process.env.PUBLIC_URL + image} alt="Card image"></img>
            // < div className="image" > </div>
          ))
        }
      </div>
    );
  }
}

export default PhotoSlide;