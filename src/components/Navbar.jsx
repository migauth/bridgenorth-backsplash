import './Navbar.css'


const Navbar = ({ handleRequestClick }) => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior: "smooth"})
      }
  }


  return (
    <div className="flex justify-between p-6 text-xl bg-gray-800/70 text-white">
      <div>
        <h1 id='logo' className='font-black text-3xl'>Bridgenorth Backsplash</h1>
      </div>
      <div className='flex  gap-6'>
        <button className='hover:text-gray-400' onClick={() => {scrollToSection("about")}}>About</button>
        <button className='hover:text-gray-400' onClick={() => {scrollToSection("gallery")}}>Gallery</button>
        <button className='hover:text-gray-400' onClick={() => {scrollToSection("contact")}}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
