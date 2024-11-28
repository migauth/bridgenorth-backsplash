import RequestQuote from "../components/RequestQuote";

export default function Home(handleRequestClick) {
  return (
    <div id="home">
      <div className="content-wrapper flex flex-col items-center justify-center pt-6 text-center">
        <img src="../public/logo.jpg" alt="logo" className="w-96"/>
        <div>

          <h1 className="text-4xl md:text-6xl text-white font-black">
            Your local backsplash expert
          </h1>
          <h2 className="text-2xl md:text-3xl text-white font-black mt-4">
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
