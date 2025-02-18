import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const WelfareStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0); // Key to force CountUp reset
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          setKey((prev) => prev + 1); // Increment key to reset CountUp
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto font-[Poppins]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {/* Active Donors */}
          <div className="flex flex-col items-center justify-center p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-3">
              Active Donors
            </h3>
            <div className="flex items-center justify-center">
              {isVisible && (
                <CountUp
                  key={`donors-${key}`}
                  end={300}
                  duration={5}
                  className="text-3xl sm:text-4xl font-bold"
                />
              )}
              <span className="text-3xl sm:text-4xl font-bold text-yellow-400 ml-1">
                +
              </span>
            </div>
          </div>

          {/* Amount Donated */}
          <div className="flex flex-col items-center justify-center p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-3">
              Amount Donated
            </h3>
            <div className="flex items-center justify-center">
              {isVisible && (
                <CountUp
                  key={`amount-${key}`}
                  end={1500000}
                  duration={5}
                  className="text-3xl sm:text-4xl font-bold"
                />
              )}
              <span className="text-3xl sm:text-4xl font-bold text-yellow-400 ml-1">
                +
              </span>
            </div>
          </div>

          {/* Ration Families */}
          <div className="flex flex-col items-center justify-center p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-3">
              Ration Families
            </h3>
            <div className="flex items-center justify-center">
              {isVisible && (
                <CountUp
                  key={`families-${key}`}
                  end={20}
                  duration={5}
                  className="text-3xl sm:text-4xl font-bold"
                />
              )}
              <span className="text-3xl sm:text-4xl font-bold text-yellow-400 ml-1">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelfareStats;
