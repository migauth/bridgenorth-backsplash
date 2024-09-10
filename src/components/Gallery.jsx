import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { loadImages } from "../utils/loadImages";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesObject = await loadImages();
      setImages(Object.values(imagesObject));
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-4xl mx-auto"> {/* Container settings */}
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="w-full h-96 flex justify-center items-center"> {/* Slide container */}
            <img src={url} alt={`slide-${index}`} className="w-full h-full object-cover rounded-lg" /> {/* Image styling */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
