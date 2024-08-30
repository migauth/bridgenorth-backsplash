// import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import RequestQuote from "./components/RequestQuote";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section id="sec1">
          <nav>
            <Navbar />
          </nav>
          <div className="flex justify-center pt-36">
            <div>
              <h1 className="text-6xl text-white font-black">
                Your local backsplash expert
              </h1>
              <h2 className="text-3xl text-white font-black">Since 1985</h2>
              <div className="pt-8">
                <RequestQuote />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="p-6 flex justify-between border border-red-400">
            <div className="flex w-1/2">
              <h1 className="text-6xl font-black">
                Specializing in Backsplashes
              </h1>
            </div>
            <div className="w-1/2">
              <p>Andy Gauthier is a highly experienced tiler based in Bridgenorth, Ontario, with nearly 40 years of expertise in the craft. Renowned for his meticulous attention to detail, Andy specializes in creating stunning backsplashes that enhance any kitchen. His extensive experience and commitment to quality have earned him a reputation as one of the area&apos;s most skilled tilers. Whether you&apos;re looking to update your home with a new backsplash or need expert advice on tile selection, Andy&apos;s craftsmanship and dedication ensure exceptional results. Trust Andy Gauthier for unparalleled tile work that combines artistry with durability.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
