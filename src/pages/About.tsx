import React from 'react';
import { Shield, Users, Trophy } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">About YourComfortNG</h1>
          <p className="text-xl text-gray-700">
            Your trusted platform for connecting with professional service providers across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
            <p className="text-gray-700">
              To provide reliable and professional services that enhance comfort and satisfaction in homes and businesses
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Team</h3>
            <p className="text-gray-700">
              A dedicated team of professionals committed to delivering excellence in every service
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Values</h3>
            <p className="text-gray-700">
              Quality, integrity, and customer satisfaction are at the heart of everything we do
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2024, YourComfortNG emerged from a vision to transform how people access professional services in Nigeria. We recognized the challenge of finding reliable service providers and created a platform to bridge this gap.
          </p>
          <p className="text-gray-700">
            Today, we're proud to connect thousands of customers with verified professionals, making quality service accessible to all. Our commitment to excellence and customer satisfaction continues to drive our growth and innovation.
          </p>
        </div>

        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Network</h2>
          <p className="text-lg mb-6">
            Are you a professional service provider? Partner with us to grow your business.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Become a Partner
          </button>
        </div>
      </div>
    </div>
  );
}