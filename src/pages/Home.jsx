import RequestQuote from "../components/RequestQuote";
import logo from '../assets/images/home-page/logoedit.png';

export default function Home(handleRequestClick) {
  return (
      <div className="home-wrapper flex flex-col items-center justify-center pt-60 text-center sm:pt-36 md:mx-8 lg:flex-col ">
        <img src={logo} alt="logo" className="mb-4 w-1/2 sm:w-1/5"/>
        <div>
          <div>
          <h1 className="text-2xl bg-gradient-to-l from-transparent py-2 via-blue-gray-800 to-transparent sm:text-2xl md:text-4xl lg:text-5xl text-white ">
            Your local backsplash expert
          </h1>
          <h2 id="since" className="sm:text-xl md:text-via-blue-gray-800g:text-3xl text-white mt-4">
            Since 1985
          </h2>

          </div>
          <div id="req-quote" className="pt-4">
            <RequestQuote handleRequestClick={handleRequestClick} />
          </div>
        </div>
      </div>
  );
}
