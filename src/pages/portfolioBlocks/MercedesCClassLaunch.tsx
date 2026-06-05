import React from 'react';

export default function MercedesCClassLaunch() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Mercedes-Benz C-Class Launch
        </h1>

        {/* Hero Image */}
        <img
          src="/assets/portfolio/mercedes-c-class.jpg"
          alt="Mercedes-Benz C-Class Launch"
          className="rounded-xl shadow-lg w-full object-cover h-64 sm:h-80 md:h-96 mb-8"
        />

        {/* Event Meta */}
        <div className="bg-gray-50 rounded-lg p-6 border mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <p><strong>Client:</strong> Mercedes-Benz India</p>
            <p><strong>Event Type:</strong> Dual City Product Launch</p>
            <p><strong>Locations:</strong> Chandigarh & Chennai</p>
            <p><strong>Date:</strong> 2022</p>
          </div>
        </div>

        {/* Objective */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Objective</h2>
          <p className="text-lg leading-relaxed">
            To unveil the new generation Mercedes-Benz C-Class across two metro cities while delivering a seamless brand experience that amplified luxury, precision engineering, and innovation — synonymous with Mercedes-Benz.
          </p>
        </div>

        {/* Execution */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Did</h2>
          <p className="text-lg leading-relaxed mb-4">
            Exevo Events orchestrated parallel launch experiences in Chandigarh and Chennai — managing complete stage design, immersive brand installations, media flow, test drive zones, lighting, and hospitality. Our creative and logistics teams ensured each touchpoint reflected Mercedes’ legacy while adapting to city-specific needs.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Key Highlights</h2>
          <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2">
            <li>Synchronized launch in two cities — executed flawlessly</li>
            <li>Immersive C-Class reveal zones with LED walk-throughs</li>
            <li>Custom-built test-drive lounge for influencers & VIP customers</li>
            <li>Hospitality and brand styling aligned with Mercedes-Benz global standards</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Planning a premium auto launch?
          </h2>
          <p className="text-lg mb-2">
            We specialize in bringing iconic machines to life — with visuals, precision, and emotion.
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
