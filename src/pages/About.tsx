
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Users, Award, Calendar, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Calendar size={48} />, number: "500+", label: "Events Delivered" },
    { icon: <Users size={48} />, number: "100K+", label: "Happy Guests" },
    { icon: <Award size={48} />, number: "15+", label: "Years Experience" },
    { icon: <Star size={48} />, number: "50+", label: "Premium Clients" }
  ];

  const team = [
    {
      name: "Mr. Praveen Gullaiya",
      role: "Founder & CEO",
      image: "/assets/team/praveen.jpg",
      description: "15+ years in luxury event management with expertise in automotive launches."
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "Award-winning designer specializing in premium brand experiences."
    },
    {
      name: "Emma Rodriguez",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      description: "Expert in seamless event execution and client satisfaction."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-orange-500">Exevo</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed px-6 sm:px-12">

              At Exevo Events, we bring your vision to life with bespoke event experiences crafted to perfection. 
              As a trusted luxury event management company in India, we curate immersive corporate events, brand 
              launches, exhibitions, and activations that leave a powerful impression. With a passion for innovation 
              and flawless execution, we create moments that matter — and memories that last.
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
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                At <b>Exevo Events,</b> we believe that while events may fade, unforgettable experiences live on forever. 
                We are a premier <b>event management company in India,</b> driven by a bold vision to redefine the future 
                of experiential events through creativity, precision, and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With years of expertise and a strong network of elite vendors and global partners, we deliver turnkey 
                event solutions tailored to elevate brands and captivate audiences. From high-profile <b>corporate events</b> 
                and <b>luxury product launches</b> to immersive brand activations and <b>global exhibitions,</b> our portfolio reflects excellence at every level.
              </p>
              <p className="text-lg text-gray-600">
                Whether it's a business conference, press meet, award ceremony, or a custom-crafted virtual event, our 
                team fuses aesthetics with strategy to deliver moments that inspire, engage, and endure. At Exevo, we 
                don’t just manage events—we build experiences that strengthen brands and leave a lasting impact.

              </p>
            </div>
            <div className="relative">
              <img
                  src="/assets/images/team.jpg"
                  alt="Our Story"
                  className="rounded-2xl shadow-2xl"
                />

            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Team Section */}
<section className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">About The Founder</h2>
      <p className="text-lg text-gray-500 italic max-w-2xl mx-auto mt-2">
        <b>Mr. Praveen Gullaiya</b> is the visionary founder of Exevo Events, a premium event management company celebrated for crafting high-end, experience-driven events.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
      {/* CEO Image */}
      <div className="flex justify-center">
        <img
          src="/assets/team/praveen.jpg"
          alt="Mr. Praveen Gullaiya"
          className="w-64 h-64 rounded-xl object-cover shadow-xl"
        />
      </div>

      {/* CEO Details */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Praveen Gullaiya</h3>
        <p className="text-orange-500 font-medium mb-4">Founder & CEO</p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With over 15 years in luxury event management, <b>Mr. Gullaiya</b> has been instrumental in elevating brand experiences across India. He specializes in premium automotive launches, immersive corporate experiences, and creative event execution that blends precision with innovation. His leadership continues to inspire trust among Fortune 500 clients and high-value partners.
        </p>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default About;
