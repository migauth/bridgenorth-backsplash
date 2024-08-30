import './Navbar.css'


const Navbar = () => {
  return (
    <div className="flex justify-between p-6 text-xl bg-gray-800/70 text-white">
      <div>
        <h1 id='logo' className='font-black text-3xl'>Bridgenorth Backsplash</h1>
      </div>
      <div className='flex  gap-6'>
        <button className='hover:text-gray-400'>About</button>
        <button className='hover:text-gray-400'>Gallery</button>
        <button className='hover:text-gray-400'>Request a Free Quote</button>
      </div>
    </div>
  );
};

export default Navbar;
