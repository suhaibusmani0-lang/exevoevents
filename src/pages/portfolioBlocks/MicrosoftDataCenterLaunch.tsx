import React from 'react';

export default function MicrosoftDataCenterLaunch() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Microsoft Data Center Launch – Hyderabad
        </h1>

        {/* Hero Image */}
        <img
          src="/assets/portfolio/microsoft-datacenter.jpg"
          alt="Microsoft Data Center Launch Event"
          className="rounded-xl shadow-lg w-full object-cover h-64 sm:h-80 md:h-96 mb-8"
        />

        {/* Meta Info */}
        <div className="bg-gray-50 rounded-lg p-6 border mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <p><strong>Client:</strong> Microsoft India</p>
            <p><strong>Event Type:</strong> Government + Corporate Launch</p>
            <p><strong>Location:</strong> Hyderabad</p>
            <p><strong>Date:</strong> 2022</p>
          </div>
        </div>

        {/* Objective */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Objective</h2>
          <p className="text-lg leading-relaxed">
            To officially unveil Microsoft’s fourth Data Center in India, underlining the brand’s investment in cloud infrastructure, digital empowerment, and India’s tech ecosystem — in the presence of high-level government delegates, business leaders, and national media.
          </p>
        </div>

        {/* Execution */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Did</h2>
          <p className="text-lg leading-relaxed mb-4">
            Exevo Events managed the end-to-end orchestration of this landmark launch — from strategic concept planning and content direction to on-ground execution, guest protocol handling, and technical production. Working closely with Microsoft’s global brand team, we ensured brand coherence while navigating government protocols, press flow, and secure zone formatting.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Key Highlights</h2>
          <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2">
            <li>Attended by Shri Rajeev Chandrasekhar (MoS IT & Electronics)</li>
            <li>Integrated VIP security, invitation-only protocols, and custom registration</li>
            <li>Stage design, branding, and AV aligned with Microsoft brand guidelines</li>
            <li>Media briefings, digital press kits, and managed announcement flow</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Planning a corporate or government-level launch?
          </h2>
          <p className="text-lg mb-2">
            We bring precision, diplomacy, and flawless execution to every stage.
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
