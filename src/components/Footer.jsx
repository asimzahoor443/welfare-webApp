import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 text-center">
      {/* Logo & Name in One Line */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <img
          src="/src/assets/Logo.jpeg"
          alt="Foundation Logo"
          className="w-24 h-24 rounded-full"
        />
        <h2 className="text-xl font-semibold text-yellow-500">
          Awam-un-Nass Khidmat Foundation
        </h2>
      </div>

      {/* Contact Information */}
      <div className="flex justify-center gap-6 text-gray-400 mt-12">
        <div className="flex items-center gap-2">
          <MapPin className="text-[#22C55E]" size={18} />{' '}
          <span className="text-white">Punjab, Pakistan</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="text-[#22C55E]" size={18} />{' '}
          <span className="text-white">+923075579911</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="text-[#22C55E]" size={18} />{' '}
          <span className="text-white">your-email@example.com</span>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 text-gray-500">
        © akfoundationpk - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
