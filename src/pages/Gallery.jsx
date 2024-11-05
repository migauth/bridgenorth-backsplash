import { useState, useEffect } from "react";
import { loadImages } from "../utils/loadImages";
import "./Gallery.css";

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
    <div className="p-6">
      <div className="flex justify-center items-center md:justify-start">
        <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-black">
          Gallery
        </h1>
      </div>

      <div className="w-full min-h-screen p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
        {" "}
        {/* Responsive grid */}
        {images.map((url, index) => (
          <div
            key={index}
            className="relative w-full h-full overflow-hidden rounded-lg"
          >
            {" "}
            {/* Container for each image */}
            <img
              src={url}
              alt={`image-${index}`}
              className="w-full h-full object-cover"
            />{" "}
            {/* Image styling */}
          </div>
        ))}
      </div>
    </div>
  );
}
