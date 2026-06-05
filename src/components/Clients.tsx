
import React from 'react';

const Clients = () => {
  const clients = [
    { name: "BMW", logo: "/images/bmw-logo-1997-download.jpg" },
    { name: "Hyundai", logo: "/images/hyundai-logo-2011-download.jpg" },
    { name: "KIA", logo: "/images/Kia-logo-2560x1440.jpg" },
    { name: "Mercedes Benz", logo: "/images/Mercedes-Benz-logo-2011-1920x1080.jpg" },
    { name: "Shell", logo: "/images/shell-exploration-and-production-shell-logo-vector-11563582729nhiqgcmp7s.jpg" },
    { name: "Blue Star", logo: "/images/bl8512b51d-blue-star-logo-blue-star-.jpg" },
    { name: "Kinder", logo: "/images/kinder-ferrero-logo-png_seeklogo-78574.jpg" },
    { name: "Victoria Secret", logo: "/images/pngegg.jpg" },
    { name: "Axis Bank", logo: "/images/51bb07b2d562b0536b420dfbb8c5d7b3.jpg" },
    { name: "R Bharat", logo: "/images/id8FPqG-Du_logos.jpg" },
    { name: "Kito", logo: "/images/KitoCrosby_HOR_Gradient_POS_RGB.jpg" },
    { name: "PepsiCo", logo: "/images/download-pepsico-black-logo-png-735811697037754bx417yvktt.jpg" }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-black to-[#0f0f1b]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-orange-500">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We've had the privilege of creating exceptional experiences for some of the world's most prestigious brands.
          </p>
        </div>

        {/* Scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-slide2 whitespace-nowrap">
            {clients.concat(clients).map((client, index) => (
              <div
                key={index}
                className="min-w-[160px] h-[100px] flex items-center justify-center bg-white/10 rounded-xl p-3 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-orange-500/30"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            + Many more industry leaders who trust us with their most important events
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slide2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide2 {
          animation: slide2 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
