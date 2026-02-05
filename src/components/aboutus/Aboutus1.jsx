import React from "react";

export default function AboutUs1() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 overflow-x-hidden">
      {/* TOP */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p className="text-sm text-gray-400 uppercase mb-2">About us</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Creatx Online School
          </h1>

          <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
            Creatx Online School is a leader in online studying. We have lots of
            courses and programs from the main market experts.
          </p>

          <p className="text-gray-500 mb-6 md:mb-8">
            We provide relevant approaches to online learning, internships and
            employment in the largest companies around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition text-sm md:text-base">
              Explore events
            </button>
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm md:text-base">
              Browse courses
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 lg:mt-0">
          <img
            src="/illustration (8).png"
            className="w-full max-w-md"
            alt="Creatx Online School Illustration"
          />
        </div>
      </div>

      {/* VIDEO + STATS */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center mt-12 md:mt-16 lg:mt-24">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/image (77).png"
            className="w-full"
            alt="Course video preview"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <button 
              className="w-14 h-14 md:w-16 md:h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg cursor-pointer hover:scale-105 hover:bg-red-600 transition"
              aria-label="Play video"
            >
              ▶
            </button>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <Stat number="1200" text="students graduated" />
          <Stat number="84" text="completed courses" />
          <Stat number="16" text="qualified tutors" />
          <Stat number="5" text="years of experience" />
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="mt-16 md:mt-28 text-center">
        <p className="text-sm text-gray-400 uppercase mb-2">
          We always stand for
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-14">Our core values</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <Value
            icon="/ic-structure.png"
            title="Structured Approach"
            desc="Aenean urna dictum adipiscing nec, cras quisque nunc."
          />
          <Value
            icon="/ic-chat.png"
            title="Professional Feedback"
            desc="Quam faucibus commodo ac facilisis."
          />
          <Value
            icon="/ic-target.png"
            title="Efficiency"
            desc="Viverra scelerisque consequat net."
          />
          <Value
            icon="/ic-calendar.png"
            title="Flexible Schedule"
            desc="Sed ut perspiciatis unde omnis."
          />
        </div>
      </div>
    </section>
  );
}

/* COMPONENTS */

function Stat({ number, text }) {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      <span className="text-3xl md:text-4xl font-bold text-red-500">{number}</span>
      <p className="text-gray-600 text-sm md:text-base">{text}</p>
    </div>
  );
}

function Value({ icon, title, desc }) {
  return (
    <div className="p-6 md:p-8 border rounded-xl text-center hover:shadow-xl transition-all duration-300 group">
      <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-5 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
        <img
          src={icon}
          className="w-7 h-7 md:w-8 md:h-8 object-contain"
          alt={`${title} icon`}
        />
      </div>

      <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}