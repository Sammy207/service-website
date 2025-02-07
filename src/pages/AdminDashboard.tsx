import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
}

export default function AdminDashboard() {
  const [services, setServices] = useState<Service[]>([]);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    category: '',
    price: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setServices([...services, { ...newService, id: Date.now() }]);
    setNewService({ title: '', description: '', category: '', price: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Admin Dashboard</h1>

      {/* Add New Service Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Add New Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={newService.title}
                onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                value={newService.category}
                onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              >
                <option value="">Select category</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="painting">Painting</option>
                <option value="cleaning">Cleaning</option>
                <option value="real-estate">Real Estate</option>
                <option value="software">Software Development</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="text"
                value={newService.price}
                onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={newService.description}
                onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Add Service
          </button>
        </form>
      </div>

      {/* Services List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Current Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{service.category}</p>
              <p className="text-gray-700 mb-2">{service.description}</p>
              <p className="font-medium text-green-600">{service.price}</p>
            </div>
          ))}
        </div>
        {services.length === 0 && (
          <p className="text-gray-500 text-center">No services added yet</p>
        )}
      </div>
    </div>
  );
}