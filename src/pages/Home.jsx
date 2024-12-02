import RequestQuote from "../components/RequestQuote";
import logo from '../assets/images/home-page/logoedit.png';

export default function Home(handleRequestClick) {
  return (
    <div id="home" className=" border border-black">
      <div className="content-wrapper flex flex-col items-center justify-center pt-60 text-center md:flex-row lg:flex-col sm:pt-36">
        <img src={logo} alt="logo" className="mb-4 w-1/2 sm:w-1/5"/>
        <div>

          <h1 className="sm:text-2xl md:text-2xl lg:text-5xl text-white ">
            Your local backsplash expert
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mt-4">
            Since 1985
          </h2>
          <div className="pt-8">
            <RequestQuote handleRequestClick={handleRequestClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
