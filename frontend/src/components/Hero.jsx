import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mock';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 232, 240, 0.3)';
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 232, 240, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E8F0]/5 via-transparent to-[#A259FF]/5 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Heading with Glow Effect */}
        <div className="relative inline-block mb-6">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2 animate-fade-in-up"
            style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-1px' }}
          >
            {personalInfo.name}
          </h1>
          <h1
            className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight blur-2xl opacity-30 text-[#00E8F0]"
            style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-1px' }}
            aria-hidden="true"
          >
            {personalInfo.name}
          </h1>
        </div>

        {/* Title with Gradient */}
        <h2
          className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] bg-clip-text text-transparent animate-fade-in-up animation-delay-200"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          {personalInfo.title}
        </h2>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-600">
          <Button
            onClick={scrollToContact}
            className="group relative px-8 py-6 bg-gradient-to-r from-[#00E8F0] to-[#3B82F6] hover:shadow-[0_0_30px_rgba(0,232,240,0.5)] transition-all duration-300 text-white font-medium text-lg rounded-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>

          <a href={personalInfo.resumeUrl} download>
            <Button
              variant="outline"
              className="px-8 py-6 border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 transition-all duration-300 font-medium text-lg rounded-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-800">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 hover:scale-110 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#00E8F0] rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
