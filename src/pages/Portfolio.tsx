import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import Navigation from '@/components/Navigation';
import Footer from '../components/Footer'; // Optional: for consistent layout
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Portfolio = () => {
  return (
    <>
      <Navigation />

      {/* 🔥 New Hero Section (Like Services Page Header) */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Our <span className="text-orange-500">Portfolio</span> 
          </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Elevating brands through unforgettable event experiences.  Explore more of our creative work — from immersive brand activations to premium corporate showcases, each event is crafted with purpose and passion.
        </p>
            <div className="mt-10 flex justify-center space-x-8">
  <a
    href="https://www.facebook.com/share/1Aej2XxvUV/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="text-blue-600 hover:text-orange-500 transition-transform transform hover:scale-110 duration-300"
  >
    <FaFacebookF size={28} />
  </a>
  <a
    href="https://www.instagram.com/exevo.events/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-pink-500 hover:text-orange-500 transition-transform transform hover:scale-110 duration-300"
  >
    <FaInstagram size={28} />
  </a>
  <a
    href="https://www.linkedin.com/company/96960847/admin/dashboard/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-blue-500 hover:text-orange-500 transition-transform transform hover:scale-110 duration-300"
  >
    <FaLinkedinIn size={28} />
  </a>
</div>


        
       </div>
      </section>

      {/* 🔽 Existing Portfolio Grid Section — untouched */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the exceptional events we've created for our distinguished clients. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.map((item, index) => (
              <Link
                key={index}
                to={`/portfolio/${item.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
