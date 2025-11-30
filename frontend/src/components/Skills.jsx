import React, { useState } from 'react';
import { skills } from '../mock';
import { Code, Cpu, Terminal, Wrench } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skillList, color, index }) => {
  return (
    <div
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-[#00E8F0] bg-white dark:bg-[#111827] hover:shadow-xl transition-all duration-500">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${color} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3
            className="text-2xl font-bold group-hover:text-[#00E8F0] transition-colors duration-300"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {title}
          </h3>
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {skillList.map((skill, idx) => (
            <div key={idx} className="group/skill">
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-[#00E8F0] transition-colors duration-300"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {skill.name}
                </span>
                <span
                  className="text-xs font-bold text-[#A259FF]"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {skill.level}%
                </span>
              </div>
              {/* Progress Bar */}
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00E8F0] to-[#3B82F6] rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-[0_0_10px_rgba(0,232,240,0.6)]"
                  style={{
                    width: `${skill.level}%`,
                    transitionDelay: `${idx * 100}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: 'AI/ML',
      icon: Cpu,
      skillList: skills.aiml,
      color: 'from-[#00E8F0] to-[#3B82F6]'
    },
    {
      title: 'Full Stack',
      icon: Code,
      skillList: skills.fullstack,
      color: 'from-[#A259FF] to-[#7C3AED]'
    },
    {
      title: 'DSA & CP',
      icon: Terminal,
      skillList: skills.dsa,
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skillList: skills.tools,
      color: 'from-[#F59E0B] to-[#D97706]'
    }
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-gray-50 dark:bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgb(0, 232, 240) 1px, transparent 1px), linear-gradient(to bottom, rgb(0, 232, 240) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 inline-block relative"
            style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-1px' }}
          >
            Skills & Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] transform scale-x-0 animate-expand-width" />
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-400 mt-4"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skillList={category.skillList}
              color={category.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
