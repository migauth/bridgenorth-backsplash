import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { loadImages } from "../utils/loadImages";

// import image1 from "../assets/images/gallery/1.jpg";
// // import image2 from "../assets/images/gallery/2.jpg";
// // import image3 from "../assets/images/gallery/3.jpg";
// import image4 from "../assets/images/gallery/4.jpg";
// import image5 from "../assets/images/gallery/5.jpg";
// // import image6 from "../assets/images/gallery/6.jpg";
// // import image7 from "../assets/images/gallery/7.jpg";
// import image8 from "../assets/images/gallery/8.jpg";
// // import image9 from "../assets/images/gallery/9.jpg";
// import image10 from "../assets/images/gallery/10.jpg";
// import image11 from "../assets/images/gallery/11.jpg";
// import image12 from "../assets/images/gallery/12.jpg";


// const images = [image1, image4, image5, image8, image10, image11, image12];

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
