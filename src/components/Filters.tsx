import React from 'react';
import { Search, Filter } from 'lucide-react';

export function Filters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 space-y-4 lg:space-y-0 lg:flex lg:flex-wrap lg:gap-4">
      <div className="w-full lg:flex-1 lg:min-w-[200px]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search phases, projects..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
          <option value="">All Projects</option>
          <option value="mobile-app">Mobile App</option>
          <option value="web-platform">Web Platform</option>
          <option value="desktop-app">Desktop App</option>
        </select>
        
        <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
          <option value="">All Phases</option>
          <option value="ideation">Ideation</option>
          <option value="research">Research</option>
          <option value="planning">Planning</option>
          <option value="development">Development</option>
          <option value="testing">Testing</option>
          <option value="launch">Launch</option>
          <option value="maintenance">Maintenance</option>
        </select>
        
        <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
          <option value="">Progress</option>
          <option value="not-started">Not Started</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
}