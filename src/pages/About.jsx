export default function About() {
  return (
      <div className="flex flex-col mx-8">
        <div className="p-8 flex justify-center items-center md:justify-start">
          <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-black">
            About
          </h1>
        </div>

        <div className="caveat text-xl px-8 animate-fade-up sm:text-4xl">
          Specializing in Backsplashes
        </div>

        <div className="sanch text-xl p-8 rounded sm:text-2xl">
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
  );
}
