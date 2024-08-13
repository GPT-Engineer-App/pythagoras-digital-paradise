import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Pythagora's World</h1>
        <p className="text-xl mb-8">Discover the beauty of mathematics and philosophy</p>
        <Button variant="secondary" size="lg">
          Explore Theorems
        </Button>
      </div>
    </div>
  );
};

export default Hero;