
import React from 'react';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  const portfolioItems = [
    {
      title: "BMW X7 Launch Event",
      category: "Automobile Launch",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      description: "Exclusive launch event for BMW's flagship SUV with VIP guests and media coverage."
    },
    {
      title: "Corporate Gala Dinner",
      category: "Corporate Event",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      description: "Elegant gala dinner for 500+ executives with world-class entertainment."
    },
    {
      title: "Luxury Car Showcase",
      category: "VIP Event",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      description: "High-end automotive showcase featuring premium luxury vehicles."
    },
    {
      title: "Tech Conference 2024",
      category: "Corporate Event",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      description: "Three-day technology conference with international speakers and exhibitions."
    }
  ];

  return (
   <section
  id="portfolio"
  className="px-4 py-20 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white"
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the exceptional events we've created for our distinguished clientele.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  {item.category}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/portfolio"
            className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-full hover:from-orange-500 hover:to-orange-700 transition-all transform hover:scale-105 font-semibold text-lg"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
