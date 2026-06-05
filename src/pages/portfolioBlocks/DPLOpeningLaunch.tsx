import React from 'react';

export default function DPLOpeningLaunch() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          DPL Opening Ceremony 2025
        </h1>

        {/* Hero Image */}
        <img
          src="/assets/portfolio/dpl_opening.jpg"
          alt="DPL Opening Ceremony 2025"
          className="rounded-xl shadow-lg w-full object-cover h-64 sm:h-80 md:h-96 mb-8"
        />

        {/* Project Info */}
        <div className="bg-gray-50 rounded-lg p-6 border mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <p><strong>Client:</strong> Delhi Premier League</p>
            <p><strong>Event Type:</strong> Sports Entertainment & Launch Events</p>
            <p><strong>Location:</strong> New Delhi</p>
            <p><strong>Date:</strong> 2025</p>
          </div>
        </div>

        {/* Objective */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Objective</h2>
          <p className="text-lg leading-relaxed">
            To spark mass excitement and national buzz around the DPL season opener through a dynamic entertainment showcase, <em>Exevo Events</em> was chosen to orchestrate the grand opening ceremony of the <em>DPL 2025 — Delhi Premier League</em>. The mission was to create a cultural and musical celebration that would set the tone for an unforgettable cricket season.
          </p>
        </div>

        {/* What We Did */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Did</h2>
          <p className="text-lg leading-relaxed mb-4">
            We delivered complete opening ceremony execution with live coordination of celebrity acts, pyrotechnics, stage production, and crowd handling for 20,000+ guests at a packed stadium. Our team managed artist scheduling, technical production, security coordination, and ensured seamless transitions between performances while maintaining the energy and excitement throughout the event.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Key Highlights</h2>
          <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2">
            <li>Star-studded performances by Raftaar, Sunanda Sharma, KRSNA, and Seedhe Maut.</li>
            <li>Time-synced fireworks and light choreography that lit up the entire stadium.</li>
            <li>Interactive stadium fan engagement zones and comprehensive influencer promotion.</li>
            <li>Zero downtime production with flawless transitions across all performance segments.</li>
          </ul>
        </div>

        {/* CTA Block */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Planning a spectacular opening ceremony?
          </h2>
          <p className="text-lg mb-2">
            From cultural celebrations to entertainment extravaganzas — let's create moments that captivate thousands.
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
