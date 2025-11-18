import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from './sections/Services';
import Destinations from './sections/Destinations';
import BookTrip from './sections/BookTrip'; 
function App() {
  return (
    <div className="min-h-screen font-poppins bg-white relative">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
    </div>
  );
}

export default App;
