import RequestQuote from "../components/RequestQuote";
import logo from '../assets/images/home-page/logoedit.png';

export default function Home(handleRequestClick) {
  return (
      <div className="content-wrapper flex flex-col items-center justify-center pt-60 text-center md:flex-row  lg:flex-col sm:pt-36">
        <img src={logo} alt="logo" className="mb-4 w-1/2 sm:w-1/5"/>
        <div>
          <div className="md:bg-blue-gray-400 lg:bg-transparent">
          <h1 className="text-2xl sm:text-2xl md:text-4xl  lg:text-5xl text-white ">
            Your local backsplash expert
          </h1>
          <h2 className="sm:text-xl md:text-2xl md:font-boldlg:text-3xl text-white mt-4">
            Since 1985
          </h2>

          </div>
          <div className="pt-8">
            <RequestQuote handleRequestClick={handleRequestClick} />
          </div>
        </div>
      </div>
  );
}
