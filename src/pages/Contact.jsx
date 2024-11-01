import RequestQuote from "../components/RequestQuote"

export default function Contact(){
  return (
    <div id="contact">
          <div id="quote" className="mt-12">
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div>
                <h3 className="text-4xl md:text-6xl text-white">
                  Request a free quote
                </h3>
                <h4 className="text-lg md:text-xl text-white">
                  A proposal will be drafted, and the complete process will be
                  clearly outlined.
                </h4>
                <div className="pt-8">
                  <RequestQuote />
                </div>
              </div>
            </div>
          </div>
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
        </div>
  )
};

