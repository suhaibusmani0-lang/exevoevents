import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to regular object for easier handling
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      event_type: formData.get('event_type') as string,
      message: formData.get('message') as string,
    };
    
    try {
      // Try FormSubmit.co (most reliable option)
      const response = await fetch('https://formsubmit.co/praveen@exevoevents.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || 'Not provided',
          'Event Type': data.event_type,
          message: data.message,
          _captcha: 'false',
          _template: 'table',
          _subject: 'New Event Inquiry from Exevo Website'
        })
      });

      if (response.ok) {
        toast({
          title: "Inquiry Submitted Successfully!",
          description: "We'll get back to you within 24 hours to discuss your event requirements.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Fallback - open email client
      openEmailClient(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openEmailClient = (data: any) => {
    const subject = encodeURIComponent('New Event Inquiry from Exevo Website');
    const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Event Type: ${data.event_type}

Message:
${data.message}

---
Sent from Exevo Events Website Contact Form
    `);
    
    const mailtoLink = `mailto:praveen@exevoevents.in?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your email client should open with the inquiry pre-filled. Please send the email to complete your submission.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create Something <span className="text-orange-500">Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your next event? Get in touch with our team of experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Exevo?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>15+ years of experience in luxury event management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Specialized expertise in automotive and corporate events</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Trusted by Fortune 500 companies and luxury brands</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>End-to-end event management and execution</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                <p>📧 <a href="mailto:praveen@exevoevents.in" className="text-orange-400 hover:text-orange-500">praveen@exevoevents.in</a></p>
                <p>📞 <a href="tel:+918800601740" className="text-orange-400 hover:text-orange-500">+91 8800601740</a>, <a href="tel:+917348004900" className="text-orange-400 hover:text-orange-500">+91 7348004900</a></p>
                <a
                  href="https://g.co/kgs/1jM4NGp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 underline underline-offset-4 hover:text-orange-500 transition-colors"
                >
                  <p>🏢 House No 469, Second Floor</p>
                  <p>    Chirag Delhi, New Delhi (110017)</p>
                </a>
              </div>
            </div>
          </div>
          
          <form
            onSubmit={handleFormSubmit}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="eventType" className="block text-white text-sm font-medium mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="event_type"
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select Event Type</option>
                  <option value="Automobile Launch">Automobile Launch</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Exhibition & Trade Show">Exhibition & Trade Show</option>
                  <option value="VIP Party & Activation">VIP Party & Activation</option>
                  <option value="Virtual & Hybrid Events">Virtual & Hybrid Events</option>
                  <option value="MICE (Travel & Logistics)">MICE (Travel & Logistics)</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Event Details & Requirements *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Tell us about your event vision, expected guests, budget range, and any specific requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all transform hover:scale-105 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
            
            <p className="text-gray-400 text-sm mt-4 text-center">
              Having trouble? Call us directly at <a href="tel:+918800601740" className="text-orange-400 hover:text-orange-500">+91 8800601740</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
