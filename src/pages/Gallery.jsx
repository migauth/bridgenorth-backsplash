import { useState, useEffect } from "react";
import { loadImages } from "../utils/loadImages";
import { Carousel } from "@material-tailwind/react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesObject = await loadImages();
      setImages(Object.values(imagesObject));
    };

    fetchImages();
  }, []);

  return (
    <div id="gallery" className="py-4">
      <div className="p-8 flex justify-center items-center md:justify-start mx-8">
        <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-black">
          Gallery
        </h1>
      </div>
      <div className="mx-4 lg:mx-16">

        <Carousel
          loop
          autoplay
          autoplayDelay={5000} // 5-second delay
          className="rounded-xl h-[80vh]"
          >
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-cover object-center"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
