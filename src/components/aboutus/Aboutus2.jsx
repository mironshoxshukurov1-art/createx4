import React from 'react'

export default function Aboutus2() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 font-sans bg-white selection:bg-red-100 overflow-x-hidden">
  
      {/* 1. KURSLAR RO'YXATI (GRID) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-24">
        
        {/* Kurs Kartochkalari */}
        {[
          { label: "Marketing", color: "bg-emerald-400", img: "image (78).png" },
          { label: "Management", color: "bg-blue-600", img: "image (79).png" },
          { label: "HR & Recruiting", color: "bg-orange-500", img: "image (82).png" },
          { label: "Design", color: "bg-pink-500", img: "image (83).png" },
          { label: "Development", color: "bg-indigo-600", img: "image (84).png" }
        ].map((course, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="h-40 md:h-48 overflow-hidden">
              <img src={course.img} alt={course.label} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-8">
              <span className={`${course.color} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider`}>
                {course.label}
              </span>
              <p className="mt-3 md:mt-4 text-gray-500 text-sm leading-relaxed">
                Odio posuere netus quisque faucibus lectus arcu donec, Eget dictum eu viverra faucibus. Viverra scelerisque consequat
              </p>
              <button className="mt-4 md:mt-6 flex items-center text-xs md:text-[13px] font-bold text-slate-800 hover:text-red-500 transition-colors group">
                Check courses <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}

        {/* Bo'sh Kartochka (Coming Soon) */}
        <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center p-8 md:p-12 text-center min-h-[200px]">
          <p className="text-gray-700 font-bold leading-tight text-sm md:text-base">
            New studying program<br />coming soon...
          </p>
        </div>
      </div>

      {/* 2. O'QUV JARAYONI QISMI (TIMELINE) */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16 pt-8 md:pt-10 border-t border-gray-50">
        
        <div className="flex-1 w-full">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Studying Process</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mt-3 mb-8 md:mb-12 lg:mb-16">
            That's how we do it!
          </h2>
          
          {/* Vertikal Timeline Steplar */}
          <div className="space-y-0">
            {[
              { step: "1", title: "Watching online video lectures", desc: "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque." },
              { step: "2", title: "Passing test", desc: "Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam." },
              { step: "3", title: "Curator's feedback", desc: "Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis." },
              { step: "4", title: "Corrections if needed", desc: "Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor." }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10 pb-8 md:pb-12 border-l-2 border-gray-100 last:border-0 last:pb-0">
                {/* Qizil nuqta */}
                <div className="absolute -left-[5px] md:-left-[6px] top-1 w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full shadow-[0_0_0_3px_white] md:shadow-[0_0_0_4px_white]"></div>
                
                <span className="text-[10px] font-bold text-gray-400 uppercase">Step {item.step}</span>
                <h4 className="text-base md:text-lg font-extrabold text-slate-800 mt-1">{item.title}</h4>
                <p className="mt-2 text-gray-500 text-xs md:text-[13px] leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end lg:sticky lg:top-10">
          <div className="relative max-w-sm md:max-w-md w-full">
            <img 
              src="/illustration (7).png" 
              alt="Success Illustration" 
              className="w-full drop-shadow-2xl"
            />
            {/* Dekorativ blur faqat desktopda */}
            <div className="hidden lg:block absolute -z-10 -right-20 -bottom-10 w-64 h-64 bg-yellow-50 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>

      </div>
    </div>
  )
}