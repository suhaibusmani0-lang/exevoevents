import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

import BMWArtCarPortfolio from './portfolioBlocks/BMWArtCarPortfolio';
import MercedesCClassLaunch from './portfolioBlocks/MercedesCClassLaunch';
import ShellEXCONExhibition from './portfolioBlocks/ShellEXCONExhibition';
import MicrosoftDataCenterLaunch from './portfolioBlocks/MicrosoftDataCenterLaunch';
import ECL2025Launch from './portfolioBlocks/ECL2025Launch';
import DPLOpeningLaunch from './portfolioBlocks/DPLOpeningLaunch';
import DPLLeagueExhibition from './portfolioBlocks/DPLLeagueExhibition';
import Navigation from '@/components/Navigation';

// ✅ Mapping functional components, not JSX elements
const portfolioComponents: { [key: string]: React.FC } = {
  'bmw-art-car-lounge': BMWArtCarPortfolio,
  'mercedes-c-class-launch': MercedesCClassLaunch,
  'shell-excon-exhibition': ShellEXCONExhibition,
  'microsoft-datacenter-launch': MicrosoftDataCenterLaunch,
  'ecl-2025': ECL2025Launch,
  'dpl-opening-ceremony-2025': DPLOpeningLaunch,
  'dpl-auction-2025': DPLLeagueExhibition,
};

export default function PortfolioDetail() {
  const { slug } = useParams();
  const project = portfolioData.find((p) => p.slug === slug);

  // ✅ Render custom component if available
  if (slug && portfolioComponents[slug]) {
    const Component = portfolioComponents[slug];
    return (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-grow">
      <Component />
    </main>
  </div>
);
  }

  // 🚫 Fallback if project not found
  if (!project) {
    return (
      <>
        <Navigation />
        <div className="text-center text-red-500 py-20 text-xl">
          Portfolio not found 😕
        </div>
      </>
    );
  }

  // 🪄 Render default layout
  return (
    <>
      <Navigation />
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black text-center text-white">
        <h1 className="text-5xl font-bold">{project.title}</h1>
        <p className="text-orange-400 text-lg mt-4">{project.category}</p>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-xl shadow-xl mb-12"
          />

          {project.content.split('\n\n').map((para, idx) => (
            <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">
              {para}
            </p>
          ))}

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
