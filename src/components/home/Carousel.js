import React from 'react';
import Slider from 'react-slick';
import img from "../../assats/bg.jpg" // Make sure this points to your image


// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full  ">
      <Slider {...settings}>
        <div className="w-full md:h-[550px] ">
          <img src={img} alt="Slide 1" className="w-full   " />
        </div>
        <div className="w-full md:h-[550px]">
          <img src={img} alt="Slide 2" className="w-full  " />
        </div>
        <div className="w-full md:h-[550px]">
          <img src={img} alt="Slide 3" className="w-full  " />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
