import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-green-600">
            YourComfortNG
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-green-600">Home</Link>
            <Link to="/about" className="text-gray-900 hover:text-green-600">About</Link>
            <Link to="/services" className="text-gray-900 hover:text-green-600">Services</Link>
            <Link to="/contact" className="text-gray-900 hover:text-green-600">Contact</Link>
            {isAuthenticated ? (
              <>
                <Link to="/admin/dashboard" className="text-gray-900 hover:text-green-600">Dashboard</Link>
                <button onClick={handleLogout} className="text-gray-900 hover:text-green-600">Logout</button>
              </>
            ) : (
              <Link to="/admin/login" className="text-gray-900 hover:text-green-600">Admin</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}