import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "@/img/images";
import './style.css'
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const SliderComponents = ({setColors}) => {

  useEffect(() => {
    images.forEach(image => {
      let color = image.substring(9); 
      const dotIndex = color.indexOf('.');
      if (dotIndex !== -1) {
        color = color.substring(0, dotIndex);
      }
      setColors(color); 
    });
  },[images]);

  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${images[i]}`} />
        </a>
      );
    },
    dots: true,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponents;
