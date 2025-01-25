import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/banners/b-1.png";
import banner2 from "../assets/banners/b-2.png";
import banner3 from "../assets/banners/b-3.png";

const Banner = () => {
  useEffect(() => {
    console.log("Slider mounted!");
  }, []);

  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (

    <Slider {...settings}>
      <div><img src={banner1} alt="banner1"/></div>
      <div><img src={banner2} alt="banner2" /></div>
      <div ><img src={banner3} alt="banner3" /></div>
    </Slider>
  );
};

export default Banner;
