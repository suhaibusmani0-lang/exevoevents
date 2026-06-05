import React from 'react';

export default function BMWArtCarPortfolio() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          BMW Art Car Lounge @ India Art Fair 2022
        </h1>

        {/* Hero Image */}
        <img
          src="/assets/portfolio/bmw-art-car.jpg"
          alt="BMW Art Car Lounge"
          className="rounded-xl shadow-lg w-full object-cover h-64 sm:h-80 md:h-96 mb-8"
        />

        {/* Project Info */}
        <div className="bg-gray-50 rounded-lg p-6 border mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <p><strong>Client:</strong> BMW India</p>
            <p><strong>Event Type:</strong> Experiential Art + Auto Showcase</p>
            <p><strong>Location:</strong> New Delhi</p>
            <p><strong>Date:</strong> 2022</p>
          </div>
        </div>

        {/* Objective */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Objective</h2>
          <p className="text-lg leading-relaxed">
            To support BMW’s initiative <em>“The Future is Born of Art”</em>, Exevo Events was selected to design a dynamic space where innovation met imagination. The BMW iX served as a moving canvas — spotlighting Indian contemporary artists while embodying BMW's forward-looking philosophy.
          </p>
        </div>

        {/* What We Did */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Did</h2>
          <p className="text-lg leading-relaxed mb-4">
            We managed end-to-end execution — from artist onboarding and artwork curation to spatial design and luxury guest handling. The lounge mirrored BMW’s global design ethos with Indian artistic energy. Key zones included an art-wrapped iX display, elite lounge seating, and immersive storytelling touchpoints.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Key Highlights</h2>
          <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2">
            <li>Live unveiling of BMW iX wrapped in original Indian artwork</li>
            <li>Curated lounge with mood lighting and interactive AV zones</li>
            <li>Elite guest journey design for media, art patrons, and influencers</li>
            <li>Featured in Elle Decor, Autocar, GQ, and top art media</li>
          </ul>
        </div>

        {/* CTA Block */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Want to craft a luxury experience like this?
          </h2>
          <p className="text-lg mb-2">
            Let’s turn your brand’s imagination into an immersive reality.
          </p>
          <p className="text-lg">
            📧 Email: <a href="mailto:praveen@exevoevents.in" className="text-blue-600 underline">praveen@exevoevents.in</a> <br />
            📞 Call: <a href="tel:+918800601740" className="text-blue-600 underline">+91 88006 01740</a>
          </p>
        </div>
      </div>
    </section>
  );
}
