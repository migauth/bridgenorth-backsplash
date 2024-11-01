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

        <section id="home" className="min-h-screen pt-20">
          <Home />
        </section>

        <section id="about" className="min-h-screen pt-20">
          <About />
        </section>

        <section id="gallery" className="flex justify-center items-center h-screen w-full">
        <div className="w-full max-w-full border border-black">
            <Gallery />
          </div>
        </section>

        <section id="testimonials" className="min-h-screen pt-20">
          <Testimonials />
        </section>

        <section id="contact" className="min-h-screen py-4">
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
