import React from 'react';

export default function ShellEXCONExhibition() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Shell EXCON Exhibition, Bangalore
        </h1>

        {/* Hero Image */}
        <img
          src="/assets/portfolio/shell-excon.jpg"
          alt="Shell EXCON Exhibition Stall"
          className="rounded-xl shadow-lg w-full object-cover h-64 sm:h-80 md:h-96 mb-8"
        />

        {/* Event Meta */}
        <div className="bg-gray-50 rounded-lg p-6 border mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <p><strong>Client:</strong> Shell India</p>
            <p><strong>Event Type:</strong> B2B Trade Exhibition</p>
            <p><strong>Location:</strong> Bangalore (EXCON 2022)</p>
            <p><strong>Date:</strong> 2022</p>
          </div>
        </div>

        {/* Objective */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Objective</h2>
          <p className="text-lg leading-relaxed">
            To position Shell as South Asia’s leading B2B lubricant innovator, by creating an immersive, future-forward exhibition presence at EXCON — engaging OEMs, institutional buyers, and the broader construction industry community.
          </p>
        </div>

        {/* Execution */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Did</h2>
          <p className="text-lg leading-relaxed mb-4">
            Exevo Events designed and executed two distinct high-visibility stalls for Shell, combining sleek industrial branding with live engagement features. From structural fabrication and lighting rigs to hands-on tech demo pods, we enabled multi-channel interaction across product education, dealer activation, and B2B outreach — all aligned with Shell's global identity.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Key Highlights</h2>
          <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2">
            <li>2 custom-built immersive pavilions active for 5 days</li>
            <li>Live demonstrations of advanced lubrication systems</li>
            <li>Curated lounge zones for OEM meets and tech briefings</li>
            <li>High recall visibility among 100K+ visitors at EXCON</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Launching a product or hosting an exhibition soon?
          </h2>
          <p className="text-lg mb-2">
            Let’s create a booth experience that doesn’t just inform — it inspires.
          </p>
          <p className="text-lg">
            📧 Email: <a href="mailto:praveen@exevoevents.in" className="text-blue-600 underline">praveen@exevoevents.in</a><br />
            📞 Call: <a href="tel:+918800601740" className="text-blue-600 underline">+91 88006 01740</a>
          </p>
        </div>
      </div>
    </section>
  );
}
