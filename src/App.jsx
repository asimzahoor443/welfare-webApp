import FinancialYearReport from './components/FinancialYear';
import Footer from './components/Footer';
import FoundationGallery from './components/FoundationGallery';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import WelfareCarousel from './components/WelfareCarousel';
import WelfareStats from './components/WelfareStats';
import WhoWeAre from './components/WhoWeAre';

const foundationImages = [
  {
    src: '/src/assets/FoundationalGallery/5Families.jpeg',
    alt: '2023 Health Camp',
    description: 'Free medical checkups for 500+ villagers',
    orientation: 'landscape',
  },
  {
    src: '/src/assets/FoundationalGallery/QuranPak.jpeg',
    alt: '2022 School Construction',
    description: 'Built 10 classrooms in rural area',
    orientation: 'portrait',
  },
  {
    src: '/src/assets/FoundationalGallery/Impact.png',
    alt: '2022 School Construction',
    description: 'Built 10 classrooms in rural area',
    orientation: 'portrait',
  },
  // Add more images...
];

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
