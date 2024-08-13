import React from 'react';
import { motion } from 'framer-motion';

const GoldenRatioSpiral = () => {
  const goldenRatio = 1.618033988749895;
  const spiralPoints = [];
  let x = 0;
  let y = 0;
  let size = 1;

  for (let i = 0; i < 13; i++) {
    spiralPoints.push({ x, y, size });
    if (i % 4 === 0) x += size;
    else if (i % 4 === 1) y += size;
    else if (i % 4 === 2) x -= size;
    else y -= size;
    size *= goldenRatio;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Golden Ratio Spiral</h3>
      <div className="relative w-[300px] h-[300px]">
        <svg width="300" height="300" viewBox="-10 -10 320 320">
          {spiralPoints.map((point, index) => (
            <rect
              key={index}
              x={point.x}
              y={point.y}
              width={point.size}
              height={point.size}
              fill="none"
              stroke="#4F46E5"
              strokeWidth="0.5"
            />
          ))}
          <motion.path
            d="M1,1 Q1,1 1,1"
            stroke="#F59E0B"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, ease: "easeInOut" }}
          />
        </svg>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        The golden ratio (φ) is approximately 1.618 and is often found in nature and art.
        This spiral demonstrates how rectangles following the golden ratio create a
        logarithmic spiral pattern.
      </p>
    </div>
  );
};

export default GoldenRatioSpiral;