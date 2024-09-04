import "./App.css";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import RequestQuote from "./components/RequestQuote";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const handleRequestClick = () => {
    window.location.href =
      "mailto:bridgenorthbacksplash@outlook.com?subject=Request%20for%20Estimate";
  };

  return (
    <>
      <main>
        <section id="sec1">
          <nav>
            <Navbar handleRequestClick={handleRequestClick} />
          </nav>
          <div className="flex flex-col items-center justify-center pt-36 text-center">
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
        </section>

        <section id="about" className="my-12">
          <div className="p-6 flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-black">
                Specializing in Backsplashes
              </h1>
            </div>
            <div className="md:w-1/2">
              <p>
                Andy Gauthier is a highly experienced tiler based in
                Bridgenorth, Ontario, with nearly 40 years of expertise in the
                craft. Renowned for his meticulous attention to detail, Andy
                specializes in creating stunning backsplashes that enhance any
                kitchen. His extensive experience and commitment to quality have
                earned him a reputation as one of the area&apos;s most skilled
                tilers. Whether you&apos;re looking to update your home with a
                new backsplash or need expert advice on tile selection,
                Andy&apos;s craftsmanship and dedication ensure exceptional
                results. Trust Andy Gauthier for unparalleled tile work that
                combines artistry with durability.
              </p>
            </div>
          </div>
        </section>

        <section id="gallery" className="flex justify-center">
          <div className="w-full max-w-full md:max-w-4xl">
            <Gallery />
          </div>
        </section>

        <section id="testimonials" className="my-12">
          <div className="p-6 flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-black">Testimonials</h1>
            </div>
            <div className="md:w-1/2">
              <p>
                &quot;We hired Andy to tile our backsplash, and we couldn&apos;t
                be happier with the results. The tile layout we requested was
                unique, and the uneven artisan tiles could have posed a real
                challenge, but Andy handled it like a true professional.
                Everything is perfectly centered, and the ideas he suggested
                were spot-on—we&apos;re so glad we took his advice. I highly
                recommend Andy!&quot; — Nancy N.
              </p>
            </div>
          </div>
        </section>

        <section id="estimate" className="mt-12">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div>
              <h3 className="text-4xl md:text-6xl text-white">
                Request a free estimate
              </h3>
              <h4 className="text-lg md:text-xl text-white">
                A proposal will be drafted, and the complete process will be
                clearly outlined.
              </h4>
              <div className="pt-8">
                <RequestQuote handleRequestClick={handleRequestClick} />
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div>
              <h5 className="text-2xl md:text-4xl">Bridgenorth Backsplash</h5>
              <h6 className="text-lg md:text-xl hover:text-gray-400">
                <a href="mailto:bridgenorthbacksplash@outlook.com?subject=Request%20for%20Estimate">bridgenorthbacksplash@outlook.com</a> 
              </h6>
              <p className="text-lg md:text-xl hover:text-gray-400">
                <a href="tel:+17057606699" className="text-lg md:text-xl">
                  (705) 760-6699
                </a>
              </p>
            </div>
            <a
              href="https://www.instagram.com/bridgenorth_backsplash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-4xl hover:text-gray-400"></i>
            </a>
          </div>
        </section>

        <footer className="bg-gray-400 text-white text-center py-4 mt-0">
          <small>© {new Date().getFullYear()} Bridgenorth Backsplash</small>
        </footer>
      </main>
    </>
  );
}

export default App;
