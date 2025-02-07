import React from 'react';
import { Wrench, Paintbrush, Zap, Code, Home, Sparkles } from 'lucide-react';

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
}

export default function Services() {
  const services: Service[] = [
    {
      icon: Home,
      title: "Real Estate",
      description: "Find your perfect home or property investment opportunity",
      features: [
        "Residential Properties",
        "Commercial Spaces",
        "Property Management",
        "Real Estate Consulting"
      ]
    },
    {
      icon: Wrench,
      title: "Plumbing Services",
      description: "Professional plumbing solutions for your home and business",
      features: [
        "Installation & Repairs",
        "Emergency Services",
        "Maintenance",
        "Water Systems"
      ]
    },
    {
      icon: Zap,
      title: "Electrical Services",
      description: "Expert electrical work for all your needs",
      features: [
        "Wiring Installation",
        "Repairs & Maintenance",
        "Safety Inspections",
        "Emergency Services"
      ]
    },
    {
      icon: Paintbrush,
      title: "Painting Services",
      description: "Transform your space with professional painting",
      features: [
        "Interior Painting",
        "Exterior Painting",
        "Commercial Painting",
        "Decorative Finishes"
      ]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions for your business",
      features: [
        "Web Development",
        "Mobile Apps",
        "Custom Software",
        "Technical Support"
      ]
    },
    {
      icon: Sparkles,
      title: "Cleaning Services",
      description: "Professional cleaning for homes and offices",
      features: [
        "Regular Cleaning",
        "Deep Cleaning",
        "Move-in/Move-out",
        "Commercial Cleaning"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our comprehensive range of professional services designed to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}