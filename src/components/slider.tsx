import React from 'react'
import '../styles/slider.css'

function Slider() {
    return (
        <div id="slider">
            <div id="button-section">
                <div id="button-section__top-btn">
                    <button id="button-section__ingredients" className="slider-button"> Ingredients </button>
                    <button id="button-section__allergens" className="slider-button"> Allergens </button>
                </div>
      
                <div id="button-section__bottom-btn">
                    <button id="button-section__More" className="slider-button"> More Flavors</button> 
                </div>
            </div>
            {/* slider photos div */}

        </div>

        
    );
  }
  
  export default Slider;