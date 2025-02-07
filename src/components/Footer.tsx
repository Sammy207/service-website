import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">YourComfortNG</h3>
            <p className="text-gray-600">
              Your trusted platform for professional services across Nigeria.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-green-600">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-green-600">About</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-green-600">Services</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Real Estate</li>
              <li className="text-gray-600">Plumbing</li>
              <li className="text-gray-600">Electrical</li>
              <li className="text-gray-600">Painting</li>
              <li className="text-gray-600">Software Development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="mailto:contact@yourcomfortng.com" className="text-gray-600 hover:text-green-600">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} YourComfortNG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}