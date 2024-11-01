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
          <div className="content-wrapper flex flex-col items-center justify-center pt-36 text-center">
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
          <div className="p-6 flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                Specializing in Backsplashes
              </h1>
            </div>
            <div className="lg:w-1/2">
              <p>
                Andy Gauthier is a highly experienced tiler based in
                Bridgenorth, Ontario, with nearly 40 years of expertise in the
                craft. Renowned for his meticulous attention to detail, Andy
                specializes in creating stunning backsplashes that enhance any
                kitchen. His extensive experience and commitment to quality have
                earned him a reputation as one of the area&apos;s most skilled
                tilers. If you&apos;re looking to update your home with a new
                backsplash, Andy&apos;s craftsmanship and dedication ensure
                exceptional results. Trust Andy Gauthier for unparalleled tile
                work that combines artistry with durability.
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
          <div className="p-6 flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                Testimonials
              </h1>
            </div>
            <div className="lg:w-1/2">
              <p>
                &quot;We hired Andy to tile our backsplash, and we couldn&apos;t
                be happier with the results. The tile layout we requested was
                unique, and the uneven artisan tiles could have posed a real
                challenge, but Andy handled it like a true professional.
                Everything is perfectly centered, and the ideas he suggested
                were spot-on—we&apos;re so glad we took his advice. I highly
                recommend Andy!&quot; — Nancy N.
              </p>
              <div className="border border-black h-64"></div>
            </div>
          </div>
          <div className="p-6 border border-black flex flex-col w-full lg:flex-row justify-between">
            <p className="w-1/2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus doloremque quo odio, vero ipsum ipsa, sunt corrupti
              consectetur laborum ut consequatur a quisquam quae dolorem,
              dolorum voluptas voluptatem voluptates. Aliquid, praesentium.
              Quisquam odio eaque iusto ad, nesciunt sint voluptatum error nisi
              ipsam nobis laborum, vitae illum? Natus, itaque! Est reiciendis,
              architecto quae quos nulla corrupti vitae quam necessitatibus quas
              quod? Ratione tenetur voluptates deleniti asperiores eligendi,
              veniam repudiandae iure quam, cumque neque, nisi quia porro. Ad
              voluptate, magni fugiat dolorum ipsa adipisci ipsum. Quia iusto
              voluptatem inventore repellat minima iure, molestias minus!
              Numquam quibusdam delectus error nemo culpa non consequuntur.
            </p>
            <div className="border border-black h-64 w-1/2"></div>
          </div>
          <br />
          <div className="p-6 border border-black flex flex-col w-full lg:flex-row justify-between">

          <div className="border border-black h-64 w-1/2"></div>

          <p className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            id? Enim autem quibusdam amet eligendi necessitatibus, nam culpa ex
            suscipit fuga maxime velit itaque nisi a odit. Molestias tempora
            quasi accusamus. Perferendis saepe inventore possimus numquam omnis
            distinctio odio expedita recusandae minima id. Sunt et recusandae
            quidem ab nemo culpa velit. Aliquam, maiores repellendus nihil
            itaque odio ad ullam cum assumenda dicta in ab natus repellat maxime
            libero dignissimos totam? Quia dolorum velit laudantium voluptates
            iste quibusdam ipsum eos, ad earum eius quidem quod. Ad saepe minus
            non sit at autem facilis vero architecto totam nam, esse expedita
            molestias accusamus?
          </p>
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
                <a href="mailto:bridgenorthbacksplash@outlook.com?subject=Request%20for%20Estimate">
                  bridgenorthbacksplash@outlook.com
                </a>
              </h6>
              <p className="text-lg md:text-xl hover:text-gray-400">
                <a href="tel:+17057606699" className="text-lg md:text-xl">
                  (705) 760-6699
                </a>
              </p>
            </div>
            <p className="text-lg md:text-2xl py-4">
              For more recent photos, please visit our Instagram page
            </p>
            <a
              href="https://www.instagram.com/bridgenorth_backsplash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-6xl hover:text-gray-400"></i>
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
