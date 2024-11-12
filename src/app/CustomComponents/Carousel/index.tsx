import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container gap-3 w-full">
      <Slider {...settings}>
        <div className="p-2">
          <img src="/images/G&B1.jpg" alt="something" className="w-100 h-100" />
        </div>
        <div className="p-2">
          <img src="/images/G&B1.jpg" alt="something" className="w-100 h-100" />
        </div>
        <div className="p-2">
          <img src="/images/G&B1.jpg" alt="something" className="w-100 h-100" />
        </div>
        <div className="p-2">
          <img src="/images/G&B1.jpg" alt="something" className="w-100 h-100" />
        </div>
        <div className="p-2">
          <img src="/images/G&B1.jpg" alt="something" className="w-100 h-100" />
        </div>
        <div className="p-2">
          <img src="/images/G&B1.jpg" alt="something" className="w-100 h-100" />
        </div>
        <div className="p-2">
          <img src="/images/G&B1.jpg" alt="something" className="w-100 h-100" />
        </div>
        <div className="p-2">
          <img src="/images/G&B1.jpg" alt="something" className="w-100 h-100" />
        </div>
      </Slider>
    </div>
  );
}
