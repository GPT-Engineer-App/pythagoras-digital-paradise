import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import InteractivePythagoreanTheorem from '../components/InteractivePythagoreanTheorem';
import GoldenRatioSpiral from '../components/GoldenRatioSpiral';
import MusicOfTheSpheres from '../components/MusicOfTheSpheres';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Triangle, Brain, Sigma, Music } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="py-16 container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Explore Pythagora's Legacy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Triangle className="mr-2" /> Geometry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the famous Pythagorean theorem and its applications in mathematics.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2" /> Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Pythagoras' philosophical teachings and their influence on Western thought.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sigma className="mr-2" /> Number Theory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Pythagoras' contributions to number theory and mathematical harmony.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Music className="mr-2" /> Harmonics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the connection between mathematics and music in Pythagorean tuning.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Interactive Mathematics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <InteractivePythagoreanTheorem />
              <GoldenRatioSpiral />
            </div>
            <div className="mt-8">
              <MusicOfTheSpheres />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;