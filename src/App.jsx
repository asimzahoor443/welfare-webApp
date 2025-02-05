import FoundationWorkCarousel from './components/FoundationWorkCarousel';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import WhoWeAre from './components/WhoWeAre';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <FoundationWorkCarousel />
      {/* Rest of your content */}
    </div>
  );
}

export default App;
