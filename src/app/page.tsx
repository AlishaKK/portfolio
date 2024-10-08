import About from '@/components/About';
import ContactMe from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import React from 'react';

export default function Home() {
  return (
    <main className="bg-blue-850 min-h-screen py-10">
      <section className="container mx-auto p-5">
        <Hero />
      </section>
      
      <section className="container mx-auto p-5 mt-10 bg-blue-850 text-white shadow-lg rounded-lg">
        <Projects />
      </section>

      <section className="container mx-auto p-5 mt-10 bg-blue-850 text-white shadow-lg rounded-lg">
        <Skills />
      </section>

      <section className="container mx-auto p-5 mt-10 bg-blue-850 text-white shadow-lg rounded-lg">
        <ContactMe />
      </section>
      <section className="container mx-auto p-5 mt-10 bg-blue-850 text-white shadow-lg rounded-lg">
        <About />
      </section>
    </main>
  );
}
