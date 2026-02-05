import React, { useState } from 'react';
import { FileText, PlayCircle, Mic, ChevronDown, Search } from 'lucide-react';

const BlogFilterBar = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [category, setCategory] = useState('all themes');

  const tabs = [
    { name: 'All', icon: null },
    { name: 'Articles', icon: <FileText size={18} /> },
    { name: 'Videos', icon: <PlayCircle size={18} /> },
    { name: 'Podcasts', icon: <Mic size={18} /> },
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-600 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-3 md:p-4">
        
        {/* Left Side: Content Type Tabs */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 transition-all duration-200 border rounded-md font-medium whitespace-nowrap text-sm md:text-base flex-shrink-0
                ${activeTab === tab.name 
                  ? 'border-red-500 text-red-500 ring-1 ring-red-500' 
                  : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Right Side: Category & Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 w-full lg:w-auto">
          
          {/* Dropdown Selector */}
          <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
            <span className="font-bold text-slate-800 text-sm md:text-base whitespace-nowrap">Blog category</span>
            <div className="relative group flex-1 sm:flex-none">
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded px-3 md:px-4 py-2 pr-8 md:pr-10 focus:outline-none focus:border-slate-400 cursor-pointer text-slate-500 text-sm md:text-base w-full"
              >
                <option value="all themes">all themes</option>
                <option value="tech">Technology</option>
                <option value="lifestyle">Lifestyle</option>
              </select>
              <ChevronDown className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" size={16} />
            </div>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:max-w-xs">
            <input
              type="text"
              placeholder="Search blog..."
              className="w-full border border-slate-200 rounded px-3 md:px-4 py-2 pr-9 md:pr-10 focus:outline-none focus:border-slate-400 placeholder:text-slate-300 text-sm md:text-base"
            />
            <Search className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFilterBar;