import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  return (
    <>
      <main>
        <nav>
          <Navbar />
        </nav>

        <section id="home">
          <Home />
        </section>

        <section id="about" className="my-12">
          <About />
        </section>

        <section id="gallery" className="flex justify-center">
          <div className="w-full max-w-full md:max-w-4xl">
            <Gallery />
          </div>
        </section>

        <section id="testimonials" className="my-12">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <footer className="bg-gray-400 text-white text-center py-4 mt-0">
          <small>© {new Date().getFullYear()} Bridgenorth Backsplash</small>
        </footer>
      </main>
    </>
  );
}

export default App;
