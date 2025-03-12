import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#222831] text-black py-8 px-4 text-center">
      {/* Logo & Name in One Line */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4"
      >
        <img
          src="/src/assets/Logo.jpeg"
          alt="Foundation Logo"
          className="w-24 h-24 rounded-full"
        />
        <h2 className="text-xl font-semibold text-yellow-500 text-center md:text-left">
          Awam-un-Nass Khidmat Foundation
        </h2>
      </motion.div>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-8 md:mt-12">
        <div className="flex items-center gap-2">
          <MapPin className="text-[#22C55E]" size={18} />
          <span className="text-[#B9B28A]">Punjab, Pakistan</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="text-[#22C55E]" size={18} />
          <span className="text-[#B9B28A]">+92-3075579911</span>
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
