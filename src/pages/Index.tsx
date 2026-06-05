import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import servicesData from '@/data/servicesData';
import { portfolioData } from '@/data/portfolioData'; // ✅ Imported for homepage cards

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* 🔥 Home Services Section */}
      <section className="px-6 py-12 bg-[#f9f9f9]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-orange-500">Premium</span> Services
          </h2>
          <p className="mt-2 text-gray-600 text-lg max-w-xl mx-auto">
            From intimate gatherings to grand celebrations, we craft experiences that resonate with luxury and sophistication.
          </p>
        </div>

        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex w-max">
            {[...servicesData, ...servicesData].map((category, index) => (
              <Link
                to={`/services/${category.slug}`}
                key={`${category.slug}-${index}`}
                className="inline-block w-72 mx-4 bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition transform hover:scale-105"
              >
                <img src={category.image} alt={category.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-500">{category.subcategories.length} Services</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🖼️ Portfolio Preview on Home */}
      <section className="px-6 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="mt-2 text-gray-600 text-lg max-w-xl mx-auto">
            A glimpse of the remarkable experiences we’ve designed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.slice(0, 4).map((item, index) => (
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

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition font-semibold text-lg"
          >
            View All Projects
          </Link>
        </div>
      </section>

      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
