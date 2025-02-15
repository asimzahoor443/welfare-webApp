import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import WelfareCarousel from './components/WelfareCarousel';
import WhoWeAre from './components/WhoWeAre';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <WelfareCarousel />
      {/* Rest of your content */}
    </div>
  );
}

export default App;
