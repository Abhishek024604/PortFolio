import React from 'react';
import { experience } from '../mock';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceCard = ({ item, index, isLast }) => {
  const isEducation = item.type === 'education';
  const Icon = isEducation ? GraduationCap : Briefcase;

  return (
    <div className="relative flex gap-8 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
      {/* Timeline Line & Node */}
      <div className="relative flex flex-col items-center">
        {/* Glowing Node */}
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#00E8F0] to-[#3B82F6] shadow-lg shadow-[#00E8F0]/50 group-hover:shadow-[#00E8F0]/70 transition-all duration-500">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        {/* Connecting Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 mt-4 bg-gradient-to-b from-[#00E8F0] to-transparent" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-12 group">
        <div className="relative p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-[#00E8F0] bg-white dark:bg-[#111827] hover:bg-[#00E8F0]/5 dark:hover:bg-[#00E8F0]/5 transition-all duration-500 hover:shadow-xl">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] rounded-xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
              <div>
                <h3
                  className="text-2xl font-bold mb-1 group-hover:text-[#00E8F0] transition-colors duration-300"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-lg font-medium text-gray-700 dark:text-gray-300"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {item.company}
                </p>
                <p
                  className="text-sm text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {item.location}
                </p>
              </div>
              <span
                className="inline-block px-4 py-2 text-sm font-medium bg-[#A259FF]/10 text-[#A259FF] rounded-full whitespace-nowrap"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {item.period}
              </span>
            </div>

            {/* Description */}
            <ul className="space-y-2">
              {item.description.map((desc, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E8F0] flex-shrink-0" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A259FF]/5 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 inline-block relative"
            style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-1px' }}
          >
            Experience & Education
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] transform scale-x-0 animate-expand-width" />
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-400 mt-4"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experience.map((item, index) => (
            <ExperienceCard
              key={item.id}
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
