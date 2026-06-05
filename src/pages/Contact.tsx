import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: [
        <a
      key="visit-link"
      href="https://g.co/kgs/1jM4NGp"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-orange-500 underline underline-offset-4 hover:text-orange-600 transition-colors"
    >
      House No 469, Second Floor  
      <br />
      Chirag Delhi, New Delhi (110017)
    </a>]
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: ["+91 8800601740", "+91 7348004900"]
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: ["praveen@exevoevents.in"]
    },
    {
      icon: <Clock size={24} />,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to create something extraordinary? Let's discuss your next premium event.
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

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-orange-500 mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default ContactPage;
