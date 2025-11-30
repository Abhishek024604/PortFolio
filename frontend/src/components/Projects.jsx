import React, { useState } from 'react';
import { projects } from '../mock';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-[#00E8F0] transition-all duration-500 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Card Content */}
      <div className="relative bg-white dark:bg-[#111827] h-full transform group-hover:-translate-y-2 transition-transform duration-500">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Floating Tech Badges on Hover */}
          <div className={`absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full border border-[#00E8F0]/30"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  animationDelay: `${idx * 60}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 space-y-4">
          <h3
            className="text-2xl font-bold group-hover:text-[#00E8F0] transition-colors duration-300"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {project.title}
          </h3>

          <p
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-[#00E8F0]/10 hover:text-[#00E8F0] transition-colors duration-300"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expandable Highlights */}
          <div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 text-sm font-medium text-[#00E8F0] hover:text-[#A259FF] transition-colors duration-300"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Key Highlights
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${showDetails ? 'max-h-48 mt-3' : 'max-h-0'}`}
            >
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    <span className="text-[#00E8F0] mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <a href={project.liveUrl} className="flex-1">
              <Button
                className="w-full bg-gradient-to-r from-[#00E8F0] to-[#3B82F6] hover:shadow-[0_0_20px_rgba(0,232,240,0.4)] transition-all duration-300 text-white"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </a>
            <a href={project.codeUrl}>
              <Button
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-gray-50 dark:bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0, 232, 240) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 inline-block relative"
            style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-1px' }}
          >
            Featured Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] transform scale-x-0 animate-expand-width" />
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            A collection of projects showcasing my expertise in AI/ML, Full Stack Development, and Competitive Programming
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in-up">
          <a href="https://github.com/asingh-dev" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="px-8 py-6 border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 transition-all duration-300 font-medium text-lg"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
