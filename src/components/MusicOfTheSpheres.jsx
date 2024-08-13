import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const MusicOfTheSpheres = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const frequencies = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];
  const noteNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  const playNote = (frequency) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), 500);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      playSequence();
    }
  };

  const playSequence = () => {
    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        playNote(freq);
        if (index === frequencies.length - 1) {
          setIsPlaying(false);
        }
      }, index * 600);
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Music of the Spheres</h3>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {frequencies.map((freq, index) => (
          <Button
            key={freq}
            onClick={() => playNote(freq)}
            className="w-12 h-12 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white"
          >
            {noteNames[index]}
          </Button>
        ))}
      </div>
      <Button onClick={togglePlay} className="w-full">
        {isPlaying ? 'Stop' : 'Play Sequence'}
      </Button>
      <p className="mt-4 text-sm text-gray-600">
        Pythagoras believed in the "Music of the Spheres," a harmonic series of
        proportions that governed the movements of celestial bodies. This concept
        connected mathematics, music, and the cosmos.
      </p>
    </div>
  );
};

export default MusicOfTheSpheres;