import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import WelfareCarousel from './components/WelfareCarousel';
import WelfareStats from './components/WelfareStats';
import WhoWeAre from './components/WhoWeAre';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <WelfareCarousel />
      <WelfareStats />
      {/* Rest of your content */}
    </div>
  );
}

export default App;
