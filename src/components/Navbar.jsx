import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`navbar fixed z-10 w-full flex flex-wrap items-center justify-between p-6 text-xl text-white ${
        isScrolled ? "scrolled" : "at-top"
      }`}
    >
      <div className="w-full md:w-auto text-center md:text-left">
        <h1 id="logo" className="font-black text-3xl">
          <a href="" onClick={() => scrollToSection("home")}>
          Bridgenorth Backsplash</a> 
        </h1>
      </div>
      <div className="flex gap-6 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
        <button
          className="hover:text-gray-400"
          onClick={() => {
            scrollToSection("about");
          }}
        >
          About
        </button>
        <button
          className="hover:text-gray-400"
          onClick={() => {
            scrollToSection("gallery");
          }}
        >
          Gallery
        </button>
        <button
          className="hover:text-gray-400"
          onClick={() => {
            scrollToSection("contact");
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
