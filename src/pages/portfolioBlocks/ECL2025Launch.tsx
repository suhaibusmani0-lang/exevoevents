import React from 'react';

export default function ECL2025Launch() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          ECL 2025 - Entertainers Cricket League
        </h1>

        {/* Hero Image */}
        <img
          src="/assets/portfolio/ecl_2025.jpg"
          alt="ECL 2025 Laucnh"
          className="rounded-xl shadow-lg w-full object-cover h-64 sm:h-80 md:h-96 mb-8"
        />

        {/* Project Info */}
        <div className="bg-gray-50 rounded-lg p-6 border mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <p><strong>Client:</strong> ECL</p>
            <p><strong>Event Type:</strong> Experiential Art + Cricket Management</p>
            <p><strong>Location:</strong> New Delhi</p>
            <p><strong>Date:</strong> 2025</p>
          </div>
        </div>

        {/* Objective */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Objective</h2>
          <p className="text-lg leading-relaxed">
            To celebrate the high-octane world of celebrity cricket, <em>Exevo Events</em> was selected to architect the grand experience behind <em>ECL 2025 — Entertainers Cricket League</em>. From player coordination and broadcast planning to match-day logistics and crowd engagement, the stadium transformed into a living canvas — spotlighting seamless management while embodying our commitment to unforgettable moments.
        </p>

        </div>

        {/* What We Did */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Did</h2>
          <p className="text-lg leading-relaxed mb-4">
            We managed end-to-end execution — from celebrity team coordination and talent onboarding to stadium layout, security oversight, and VIP guest handling. The arena reflected Exevo’s flair for large-scale sports entertainment with digital precision and fan-focused energy. Key zones included branded hospitality lounges, custom-built team dugouts, and dynamic digital displays that brought the ECL 2025 experience to life.
        </p>

        </div>

        {/* Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Key Highlights</h2>
          <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2">
                <li>From celebrity team onboarding to final award ceremony, every element was flawlessly managed and timed.</li>
                <li>Multi-camera setups, branded digital visuals, and real-time social buzz turned ECL 2025 into a content magnet.</li>
                <li>Bespoke dugouts, influencer lounges, and interactive fan zones elevated the live experience.</li>
                <li>Strategic brand placements and celebrity collaborations amplified reach and added aspirational value.</li>
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
