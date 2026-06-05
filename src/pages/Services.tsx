import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData';
import Navigation from '../components/Navigation'; // ✅ Add this if header is separate
import Footer from '../components/Footer'; // Optional: for consistent layout
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 🔝 Top Navigation */}
      <Navigation />

      {/* ✨ Hero Section Start */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked range of premium services crafted to elevate your brand presence with unforgettable experiences and flawless execution.
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
      {/* ✨ Hero Section End */}

      {/* 🔥 Category Cards (untouched) */}
      <section className="px-6 py-12 bg-[#f9f9f9]">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((category) => (
            <Link key={category.slug} to={`/services/${category.slug}`}>
              <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="overflow-hidden rounded-md mb-4">
                  <img
                    src={category.subcategories[0].image}
                    alt={category.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-52 hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#222] mb-1">{category.title}</h3>
                <p className="text-sm text-gray-500">
                  {category.subcategories.length} Services
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 📦 Optional Footer */}
      <Footer />
    </div>
  );
};

export default Services;
