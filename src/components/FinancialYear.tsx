import React, { useState } from 'react';

const FinancialYearReport = () => {
  const reports = {
    '2023': {
      cover: '/src/assets/Reports/fiscalyear2023.png',
      pdf: '/src/assets/Reports/FinancialYear 2023.pdf',
    },
    '2024': {
      cover: '/src/assets/Reports/fiscalyear2024.png',
      pdf: '/src/assets/Reports/FinancialYear 2024.pdf',
    },
  };

  // State for selected year and view mode
  const [selectedYear, setSelectedYear] = useState<'2023' | '2024'>('2023');

  return (
    <div className="container mx-auto my-10 p-5">
      <h2 className="text-4xl text-[#22C55E] font-bold text-center mb-5">
        Financial Year Report
      </h2>

      {/* Year Selection Buttons */}
      <div className="flex justify-center gap-4 mb-5">
        {Object.keys(reports).map((year) => (
          <button
            key={year}
            className={`px-6 py-2 rounded-full text-white font-semibold transition ${
              selectedYear === year ? 'bg-blue-600' : 'bg-gray-500'
            }`}
            onClick={() => {
              setSelectedYear(year as '2023' | '2024');
            }}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Display Cover Image */}
      <div className="flex justify-center">
        <div className="text-center">
          <img
            src={reports[selectedYear].cover}
            alt={`Cover ${selectedYear}`}
            className="w-full max-w-md rounded-lg shadow-lg cursor-pointer transition-transform"
            onClick={() => window.open(reports[selectedYear].pdf, '_blank')}
          />
          <p className="mt-3 text-gray-600">
            Click the cover to view the full report
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialYearReport;
