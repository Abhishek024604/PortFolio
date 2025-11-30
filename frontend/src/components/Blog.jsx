import React from 'react';
import { blogPosts } from '../mock';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const BlogCard = ({ post, index }) => {
  return (
    <article
      className="group relative rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-[#00E8F0] bg-white dark:bg-[#111827] hover:shadow-xl transition-all duration-500 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      <div className="relative">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-[#00E8F0] to-[#3B82F6] text-white rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span style={{ fontFamily: '"Inter", sans-serif' }}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span style={{ fontFamily: '"Inter", sans-serif' }}>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-xl font-bold line-clamp-2 group-hover:text-[#00E8F0] transition-colors duration-300"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {post.excerpt}
          </p>

          {/* Read More Button */}
          <Button
            variant="ghost"
            className="group/btn p-0 h-auto text-[#00E8F0] hover:text-[#A259FF] hover:bg-transparent font-medium"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E8F0]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 inline-block relative"
            style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-1px' }}
          >
            Latest Articles
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E8F0] to-[#A259FF] transform scale-x-0 animate-expand-width" />
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-400 mt-4"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Insights on DSA, AI/ML, and Full Stack Development
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button
            variant="outline"
            className="px-8 py-6 border-2 border-gray-300 dark:border-gray-700 hover:border-[#00E8F0] hover:bg-[#00E8F0]/10 transition-all duration-300 font-medium text-lg"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
