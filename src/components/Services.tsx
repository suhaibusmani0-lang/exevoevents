import React from 'react';
import servicesData from '../data/servicesData';

const Services: React.FC = () => {
  return (
    <section className="services px-4 py-10 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
      {servicesData.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-indigo-500 inline-block text-gray-700">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {category.subcategories.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{service.name}</h4>
                  <p className="text-sm text-gray-500">High-quality, professional service</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
