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
      <main className="flex flex-col min-h-screen">
        <nav>
          <Navbar />
        </nav>

        <section id="home" className="flex-grow min-h-screen">
          <Home />
        </section>

        <section id="about" className="flex-grow min-h-screen">
          <About />
        </section>

        <section id="gallery" className="flex-grow ">
          <Gallery />
        </section>

        <section id="testimonials" className="flex-grow min-h-screen">
          <Testimonials />
        </section>

        <section id="contact" className="flex-grow min-h-screen">
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