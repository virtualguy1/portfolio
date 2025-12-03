import React from 'react';

interface HeroProps {
  name: string;
  title: string;
  summary: string;
}

export const Hero: React.FC<HeroProps> = ({ name, title, summary }) => {
  return (
    <section className="mb-12 text-left">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">{name}</h1>
      <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-2xl">
        {summary}
      </p>
    </section>
  );
};