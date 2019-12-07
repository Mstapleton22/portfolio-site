import React, { Component } from 'react';
import Slide from '../components/Slide.js'
import LeftArrow from '../components/LeftArrow.js'
import RightArrow from '../components/RightArrow.js'

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === this.state.images[0] + 1) {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex + 1
            }));
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + (500)
        }));
    }

    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex + 1
            }));
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(500)
        }));
    }

    render() {
        return (
            <div className="slider row">
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s',
                    }}>

                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} className="image" />
                        ))
                    }
                </div>
                {/* <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                /> */}
            </div>
        );
    }
}