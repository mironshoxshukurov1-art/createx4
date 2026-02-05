import React from 'react'

export default function Aboutus3() {
  return (
    <div className="w-full bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. LOGOTIPLAR SEKSIYASI */}
      <div className="bg-gray-50 py-12 md:py-20 px-4 text-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Best jobs for you</span>
        <h2 className="text-2xl md:text-3xl font-black mt-3 mb-8 md:mb-12">Our students work here</h2>
        
        <div className="max-w-5xl mx-auto flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity">
          <img 
            src="/logos.png" 
            alt="Partner company logos" 
            className="w-full h-auto object-contain max-h-16 md:max-h-24" 
          />
        </div>
      </div>

      {/* 2. BLOG SEKSIYASI */}
      <div className="max-w-7xl mx-auto py-12 md:py-24 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-12">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Our Blog</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mt-2">Latest posts</h2>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-2.5 md:py-3 rounded font-bold text-xs md:text-sm transition-colors whitespace-nowrap">
            Go to blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Blog Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden mb-4 bg-blue-100 aspect-[4/3] flex items-center justify-center">
              <span className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                🎙️ Podcast
              </span>
              <img src="/bilmadim.png" alt="Podcast thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 text-[11px] md:text-[12px] text-gray-400 mb-2">
              <span>Marketing</span> <span className="hidden md:inline">|</span> <span>September 4, 2020</span> <span className="hidden md:inline">|</span> <span>🕒 36 min</span>
            </div>
            <h3 className="text-base md:text-lg font-bold leading-tight group-hover:text-orange-600 transition-colors">
              What is traffic arbitrage and does it really make money?
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-2 md:mt-3 line-clamp-2">
              Phasellus, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus...
            </p>
            <button className="mt-3 md:mt-4 flex items-center font-bold text-xs md:text-sm hover:text-orange-600 transition-colors">
              Listen <span className="ml-2">→</span>
            </button>
          </div>

          {/* Blog Card 2 */}
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden mb-4 bg-emerald-100 aspect-[4/3] flex items-center justify-center">
              <span className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                🎬 Video
              </span>
              <img src="/nimadirda.png" alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 text-[11px] md:text-[12px] text-gray-400 mb-2">
              <span>Management</span> <span className="hidden md:inline">|</span> <span>August 25, 2020</span> <span className="hidden md:inline">|</span> <span>🕒 45 min</span>
            </div>
            <h3 className="text-base md:text-lg font-bold leading-tight group-hover:text-orange-600 transition-colors">
              What to do and who to talk to if you want to get feedback
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-2 md:mt-3 line-clamp-2">
              Neque a, senectus consectetuer odio. In aliquet nec eu. Ultricies ac nibh urna urna sagittis...
            </p>
            <button className="mt-3 md:mt-4 flex items-center font-bold text-xs md:text-sm hover:text-orange-600 transition-colors">
              Watch <span className="ml-2">→</span>
            </button>
          </div>

          {/* Blog Card 3 */}
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden mb-4 bg-yellow-100 aspect-[4/3] flex items-center justify-center">
              <span className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                📄 Article
              </span>
              <img 
                src="/image.png" 
                alt="Article thumbnail" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 text-[11px] md:text-[12px] text-gray-400 mb-2">
              <span>Design</span> <span className="hidden md:inline">|</span> <span>August 8, 2020</span>
            </div>
            <h3 className="text-base md:text-lg font-bold leading-tight group-hover:text-orange-600 transition-colors">
              Should you choose a creative profession if you are attracted?
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-2 md:mt-3 line-clamp-2">
              Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate...
            </p>
            <button className="mt-3 md:mt-4 flex items-center font-bold text-xs md:text-sm hover:text-orange-600 transition-colors">
              Read <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SUBSCRIBE SEKSIYASI */}
      <div className="bg-orange-50 relative py-16 md:py-24 px-4 overflow-hidden flex items-center justify-center min-h-[350px] md:min-h-[400px]">
        {/* Dekorativ elementlar - faqat desktop */}
        <div className="hidden md:block absolute left-0 bottom-0 w-64 h-64 bg-red-200/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="hidden md:block absolute right-0 top-0 w-80 h-80 bg-orange-200/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10 w-full">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Don't miss anything</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mt-3 md:mt-4 mb-6 md:mb-10 leading-tight px-4">
            Subscribe to the Createx School announcements
          </h2>
          
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-stretch bg-white p-1 rounded-lg border border-gray-200 shadow-sm overflow-hidden max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Your working email" 
              className="w-full flex-grow px-4 md:px-6 py-2.5 md:py-3 focus:outline-none text-sm"
            />
            <button 
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-10 py-2.5 md:py-3 font-bold whitespace-nowrap transition-colors text-xs md:text-sm rounded-md sm:rounded-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}