import { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      afterChange: function(index : number) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <>
          <div className="slider-pics">
        <Slider {...settings}>
          <div className="slider-image" >
            <h3>
              <img src="images/screenshot-20231009-at-3341.png"/>
            </h3>
            <p id="flavors">Salted Caramel</p>
            <br/>
          </div>
          <div className="slider-image">
            <h3>
              <img src="images/screenshot-20231009-at-3411.png"/>
            </h3>
            <p id="flavors">Heath Bar mud Slide</p>
            <br/>
          </div>
          <div className="slider-image" >
            <h3>
              <img src="images/screenshot-20231009-at-3361.png"/>
            </h3>
            <p id="flavors">Egg Yolk Chilli Flake</p>
            <br/>
          </div>
          <div className="slider-image" >
            <h3>
              <img src="images/screenshot-20231009-at-3381.png"/>
            </h3>
            <p id="flavors">Coconut Cold Brew</p>
            <br/>
          </div>
          <div className="slider-image" >
            <h3>
              <img src="images/screenshot-20231009-at-4371.png"/>
            </h3>
            <p id="flavors">Mango Peach Tea</p>
            <br/>
          </div>
          <div className="slider-image" >
            <h3>
              <img src="images/screenshot-20231009-at-3431.png"/>
            </h3>
              <p id="flavors">Vietnamese Coffee</p>
            <br/>
          </div>
        </Slider>
          </div>
      </>
    );
  }
}