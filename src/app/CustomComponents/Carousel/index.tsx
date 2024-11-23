import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export interface CarouselProps {
  slideData: string[];
}

export default function Carousel({ slideData }: CarouselProps) {
  const settings = {
    dots: false,
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
        {slideData.map((img, ind) => {
          return (
            <div className="p-2" key={ind + 1}>
              {/* <img src={img} alt={img} className="w-100 h-100" /> */}
              <Image
                src={img}
                alt={`Slide ${ind + 1}`}
                width={500} // Adjust width based on your requirements
                height={300} // Adjust height based on your requirements
                layout="intrinsic" // Optional, adjusts the image size proportionally
                priority
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

{
  /* <div className="p-2">
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
</div> */
}
