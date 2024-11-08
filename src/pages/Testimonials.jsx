export default function Testimonials() {
  return (
    <div id="testimonials" className="py-12">
      <div className="p-6 flex flex-col justify-between">
        <div className="flex justify-center items-center md:justify-start">
          <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-black">
            Testimonials
          </h1>
        </div>
        <div id="test">
          <div className="text-2xl p-4 border-4 border-yellow-800 border-double rounded">
            <p>
              &quot;We hired Andy to tile our backsplash, and we couldn&apos;t
              be happier with the results. The tile layout we requested was
              unique, and the uneven artisan tiles could have posed a real
              challenge, but Andy handled it like a true professional.
              Everything is perfectly centered, and the ideas he suggested were
              spot-on—we&apos;re so glad we took his advice. I highly recommend
              Andy!&quot; — Nancy N.
            </p>
            {/* <div className="border border-black h-64"></div> */}
          </div>
          <br />
          <div className="text-2xl p-4 border-4 border-yellow-800 border-double rounded">
            <p className="text-2xl">
              &quot;Andy did an excellent job with our new backsplash. He
              arrived on time, cleaned up afterward, and handled the challenging
              installation with complete professionalism. I highly recommend
              Andy for any backsplash project.&quot; — Bonnie F
            </p>
            {/* <div className="border border-black h-64"></div> */}
          </div>
          <br />
          <div className="text-2xl p-4 border-4 border-yellow-800 border-double rounded">
            <p className="sm: text-2xl">
              &quot;I had a new kitchen backsplash installed and was thrilled
              with the results. Andy Gauthier handled the project with
              professionalism, keeping me informed about each step and the
              timeline. He took care to cover everything to prevent accidents
              and left the space spotless. I would gladly hire Andy for any
              future tile work.&quot; — Brenda K.
            </p>
            {/* <div className="border border-black h-64"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
