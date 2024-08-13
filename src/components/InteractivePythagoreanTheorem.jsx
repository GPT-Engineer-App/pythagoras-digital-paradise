import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";

const InteractivePythagoreanTheorem = () => {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [c, setC] = useState(5);

  useEffect(() => {
    setC(Math.sqrt(a * a + b * b));
  }, [a, b]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Interactive Pythagorean Theorem</h3>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Side a: {a.toFixed(2)}</label>
          <Slider
            value={[a]}
            onValueChange={(value) => setA(value[0])}
            max={10}
            step={0.1}
          />
        </div>
        <div className="w-full md:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Side b: {b.toFixed(2)}</label>
          <Slider
            value={[b]}
            onValueChange={(value) => setB(value[0])}
            max={10}
            step={0.1}
          />
        </div>
        <div className="w-full md:w-1/3">
          <p className="text-lg font-semibold">
            c = √(a² + b²) = {c.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <svg width="300" height="300" viewBox="0 0 100 100">
          <polygon points="0,100 0,50 50,100" fill="#4F46E5" />
          <polygon points="0,50 50,0 50,100" fill="#818CF8" />
          <text x="10" y="80" fill="white">{a.toFixed(1)}</text>
          <text x="30" y="45" fill="white">{b.toFixed(1)}</text>
          <text x="55" y="55" fill="#4F46E5" transform="rotate(45 55,55)">{c.toFixed(1)}</text>
        </svg>
      </div>
    </div>
  );
};

export default InteractivePythagoreanTheorem;