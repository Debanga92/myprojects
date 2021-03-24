import React from 'react';
import Carousel from 'react-elastic-carousel';
import rocky from './assets/images/rocky.jpg';

function CarouselNew(){
    
  const breakpoints = [
    {width: 1, itemsToShow: 1},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 3, itemsToScroll: 3},
    {width: 1366, itemsToShow: 3, itemsToScroll: 3}
  ];
    return(
        <>
        <div className="carousel-container">
            <Carousel breakPoints={breakpoints}>
              <img src={rocky} className="slider-img" alt=""/>
              <img src={rocky} className="slider-img" alt=""/>
              <img src={rocky} className="slider-img" alt=""/>
              <img src={rocky} className="slider-img" alt=""/>
              <img src={rocky} className="slider-img" alt=""/>
              <img src={rocky} className="slider-img" alt=""/>
            </Carousel>
            </div>
        </>
    );
}
export default CarouselNew;