
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop"
          alt="Event Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-wide">
          Luxury Events
          <span className="block bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 bg-clip-text text-transparent mt-2">
            Redefined
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Creating extraordinary experiences for automotive launches, corporate events,
          and VIP celebrations that leave lasting impressions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:brightness-110 hover:scale-105 transition-all flex items-center gap-2"
          >
            Start Your Event Journey
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/portfolio"
            className="border border-white/70 px-8 py-4 text-white rounded-full backdrop-blur-sm bg-white/10 font-semibold text-lg hover:bg-white hover:text-black hover:shadow-xl transition-all"
          >
            View Our Portfolio
          </Link>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 1.2s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default Hero;
