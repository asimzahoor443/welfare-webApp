import FinancialYearReport from './components/FinancialYear';
import Footer from './components/Footer';
import FoundationGallery from './components/FoundationGallery';
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
      <FoundationGallery />
      <FinancialYearReport />
      <Footer />
    </div>
  );
}

export default App;
