export default function About() {
  return (
    <div id="about" className="my-12">
      <div className="flex flex-col mx-8">
        {/* Center on small screens, left-align on medium and larger screens */}
        <div className="flex justify-center items-center md:justify-start">
          <h1 className="mb-8 font-black text-2xl md:text-5xl lg:text-6xl">
            Specializing in Backsplashes
          </h1>
        </div>

        <div className="border border-black h-36">Something here?</div>

        <div className="text-2xl p-4 border-4 border-brown-700 border-double rounded">
        <p>
            Andy Gauthier is a highly experienced tiler based in Bridgenorth,
            Ontario, with nearly 40 years of expertise in the craft. Renowned
            for his meticulous attention to detail, Andy specializes in creating
            stunning backsplashes that enhance any kitchen. His extensive
            experience and commitment to quality have earned him a reputation as
            one of the area&apos;s most skilled tilers. If you&apos;re looking
            to update your home with a new backsplash, Andy&apos;s craftsmanship
            and dedication ensure exceptional results. Trust Andy Gauthier for
            unparalleled tile work that combines artistry with durability.
          </p>
        </div>
      </div>
    </div>
  );
}
