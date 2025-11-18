import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Destinations from "./sections/Destinations";
import BookTrip from "./sections/BookTrip";
import Testimonials from "./sections/Testimonials";
import Logos from "./sections/Logos";
import Newsletter from "./sections/Newsletter";
import Footer from "./sections/Footer";

function App() {
  return (
    // NUCLEAR FIX: Inline styles to force the cutoff
    <>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Logos />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
