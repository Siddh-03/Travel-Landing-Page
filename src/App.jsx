import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Destinations from "./sections/Destinations";
import BookTrip from "./sections/BookTrip";
import Testimonials from "./sections/Testimonials";
import Logos from './sections/Logos';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';
function App() {
  return (
    <div className="min-h-screen font-poppins bg-white relative">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Logos />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
