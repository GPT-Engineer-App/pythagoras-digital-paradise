import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Triangle, Brain, Sigma } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Pythagora's Legacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;