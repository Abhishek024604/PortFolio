import React, { useState } from 'react';
import { personalInfo } from '../mock';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50 dark:bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(162, 89, 255) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 inline-block relative"
            style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-1px' }}
          >
            Get In Touch
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] transform scale-x-0 animate-expand-width" />
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-400 mt-4"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Let's collaborate on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in-left">
            <div>
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#00E8F0] to-[#3B82F6] group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1" style={{ fontFamily: '"Inter", sans-serif' }}>Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-900 dark:text-white hover:text-[#00E8F0] transition-colors duration-300 font-medium"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#A259FF] to-[#7C3AED] group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1" style={{ fontFamily: '"Inter", sans-serif' }}>Location</p>
                    <p className="text-gray-900 dark:text-white font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 hover:scale-110 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in-right">
            <div className="relative p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#111827]/50 backdrop-blur-xl">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] rounded-2xl blur opacity-10" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 focus:border-[#00E8F0] focus:ring-2 focus:ring-[#00E8F0]/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 focus:border-[#00E8F0] focus:ring-2 focus:ring-[#00E8F0]/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 focus:border-[#00E8F0] focus:ring-2 focus:ring-[#00E8F0]/20 transition-all duration-300"
                    placeholder="Project Collaboration"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 focus:border-[#00E8F0] focus:ring-2 focus:ring-[#00E8F0]/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-gradient-to-r from-[#00E8F0] to-[#3B82F6] hover:shadow-[0_0_30px_rgba(0,232,240,0.5)] transition-all duration-300 text-white font-medium text-lg rounded-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
