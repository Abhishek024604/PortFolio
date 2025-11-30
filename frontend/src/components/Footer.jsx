import React from 'react';
import { personalInfo } from '../mock';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-white dark:bg-[#0D0D0D] border-t-2 border-gray-200 dark:border-gray-800">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00E8F0] via-[#A259FF] to-[#00E8F0]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              {personalInfo.name.split(' ').map(n => n[0]).join('')}<span className="text-[#00E8F0]">.</span>
            </h3>
            <p
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Building intelligent, scalable, and high-performance systems for the future.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-bold mb-4"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#00E8F0] transition-colors duration-300"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg font-bold mb-4"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-gray-600 dark:text-gray-400 hover:text-[#00E8F0] transition-colors duration-300"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {personalInfo.email}
              </a>
              <p
                className="text-gray-600 dark:text-gray-400"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              © {currentYear} {personalInfo.name}. Made with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              using React & FastAPI
            </p>
            <div className="flex gap-6 text-sm">
              <button
                className="text-gray-600 dark:text-gray-400 hover:text-[#00E8F0] transition-colors duration-300"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Privacy Policy
              </button>
              <button
                className="text-gray-600 dark:text-gray-400 hover:text-[#00E8F0] transition-colors duration-300"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
