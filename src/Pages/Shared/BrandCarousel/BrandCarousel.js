import React from 'react';
import { Carousel } from 'react-bootstrap';
import brand1 from "../../../assets/brand/1.jpg";
import brand2 from "../../../assets/brand/2.jpg";

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
          <p>Nulla vitae elit libero</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
            
        </div>
    );
};

export default BrandCarousel;