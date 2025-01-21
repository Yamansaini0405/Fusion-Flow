import React, { useEffect, useState } from 'react';

const ProgressBar = ({ label, progress, color }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    
    setWidth(0);
    setTimeout(() => {
      setWidth(progress);
    }, 100);
  }, [progress]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-base font-semibold text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-600">{progress}%</span>
      </div>
      <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-700 ease-in-out relative`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/30 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const Bar = () => {
  return (
    <div className="md:max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg w-[85%]">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">What Students say's</h2>
      
      <ProgressBar 
        label="Freelancing"
        progress={60}
        color="bg-blue-500"
      />
      
      <ProgressBar 
        label="Not Interested"
        progress={27}
        color="bg-emerald-500"
      />
      
      <ProgressBar 
        label="Lack of Talent"
        progress={10}
        color="bg-violet-500"
      />

      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            Freelancing
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
            Not Interested
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-violet-500 rounded-full mr-2"></div>
            Lack of Talent
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bar;