import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 } // Trigger at 80% view
    );

    const currentRef = textRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="flex flex-col mx-8">
      <div className="p-8 flex justify-center items-center md:justify-start">
        <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-black">
          About
        </h1>
      </div>

      <div
        ref={textRef}
        className={`caveat text-2xl px-8 sm:text-3xl transition-opacity duration-500 ${
          isVisible ? "animate-fade-right opacity-100" : "opacity-0"
        }`}
      >
        Specializing in Backsplashes
      </div>

      <div className="sanch text-xl p-8 rounded sm:text-2xl">
        <p>
          Andy Gauthier is a highly experienced tiler based in Bridgenorth,
          Ontario, with nearly 40 years of expertise in the craft. Renowned for
          his meticulous attention to detail, Andy specializes in creating
          stunning backsplashes that enhance any kitchen. His extensive
          experience and commitment to quality have earned him a reputation as
          one of the area&apos;s most skilled tilers. If you&apos;re looking to
          update your home with a new backsplash, Andy&apos;s craftsmanship and
          dedication ensure exceptional results. Trust Andy Gauthier for
          unparalleled tile work that combines artistry with durability.
        </p>
      </div>
    </div>
  );
}
