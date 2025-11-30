import React from 'react';
import { personalInfo, achievements } from '../mock';
import { Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E8F0]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 inline-block relative"
            style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-1px' }}
          >
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] transform scale-x-0 animate-expand-width" />
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-400 mt-4"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Get to know more about my journey and expertise
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative group animate-fade-in-left">
            <div className="relative overflow-hidden rounded-2xl">
              {/* Glow Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Image Container */}
              <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-400 dark:text-gray-600">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E8F0]/20 to-[#A259FF]/20" />
              </div>
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-[#111827] rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-[#00E8F0]" />
                <span style={{ fontFamily: '"Inter", sans-serif' }}>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8 animate-fade-in-right">
            <p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {personalInfo.bio}
            </p>

            {/* Achievements Grid */}
            <div>
              <h3
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                <Award className="w-6 h-6 text-[#00E8F0]" />
                Achievements & Certifications
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.id}
                    className="group p-5 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-[#00E8F0] hover:bg-[#00E8F0]/5 transition-all duration-300 cursor-pointer"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4
                        className="font-bold text-lg group-hover:text-[#00E8F0] transition-colors duration-300"
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                      >
                        {achievement.title}
                      </h4>
                      <span className="text-sm font-medium text-[#A259FF] px-3 py-1 rounded-full bg-[#A259FF]/10">
                        {achievement.year}
                      </span>
                    </div>
                    <p
                      className="text-sm text-gray-600 dark:text-gray-400 mb-1"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {achievement.organization}
                    </p>
                    <p
                      className="text-sm text-gray-700 dark:text-gray-300"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
