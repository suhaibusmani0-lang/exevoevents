import React from 'react';

export default function DPLLeagueExhibition() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          DPL Auction 2025 — Delhi Premier League
        </h1>

        {/* Hero Image */}
        <img
          src="/assets/portfolio/dpl_league.jpg"
          alt="DPL Auction 2025"
          className="rounded-xl shadow-lg w-full object-cover h-64 sm:h-80 md:h-96 mb-8"
        />

        {/* Project Info */}
        <div className="bg-gray-50 rounded-lg p-6 border mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <p><strong>Client:</strong> Delhi Premier League</p>
            <p><strong>Event Type:</strong> Sports Auction + Live Broadcast</p>
            <p><strong>Location:</strong> New Delhi</p>
            <p><strong>Date:</strong> 2025</p>
          </div>
        </div>

        {/* Objective */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Objective</h2>
          <p className="text-lg leading-relaxed">
            To replicate the excitement and professionalism of the IPL auction for Delhi's local cricket league, <em>Exevo Events</em> was entrusted with creating a high-stakes showcase that would ensure franchise owners and players experienced the grandeur of professional cricket auctions. The goal was to establish DPL as a premier local cricket platform with national visibility.
          </p>
        </div>

        {/* What We Did */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Did</h2>
          <p className="text-lg leading-relaxed mb-4">
            From staging and broadcast design to digital integration and press handling, our team created a seamless high-energy auction format that made headlines. We managed franchise bidding systems, live player statistics displays, AV production, LED content creation, and coordinated VIP hospitality alongside comprehensive press coverage to ensure maximum impact.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Key Highlights</h2>
          <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2">
            <li>Professional franchise bidding system with live player stats and real-time updates.</li>
            <li>Complete AV and LED content production for broadcast-quality coverage.</li>
            <li>Dedicated VIP and press zones with premium hospitality services.</li>
            <li>Integrated digital fan engagement platforms that amplified online reach and participation.</li>
          </ul>
        </div>

        {/* CTA Block */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to create a professional sports auction?
          </h2>
          <p className="text-lg mb-2">
            From local leagues to national tournaments, let's bring the excitement of professional sports to your event.
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
