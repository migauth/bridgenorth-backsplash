import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between p-6 text-xl bg-gray-800/70 text-white">
      <div className="w-full md:w-auto text-center md:text-left">
        <h1 id="logo" className="font-black text-3xl">
          Bridgenorth Backsplash
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
