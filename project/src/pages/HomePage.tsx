import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, TrendingUp, Globe2, Award } from 'lucide-react';
import Hero from '../components/Hero';
import TrendingNews from '../components/TrendingNews';
import WeatherWidget from '../components/WeatherWidget';
import Robot3DModel from '../components/Robot3DModel';
import NewsletterSignup from '../components/NewsletterSignup';
import Chatbot from '../components/Chatbot';

const HomePage = () => {
  useEffect(() => {
    document.title = 'FactVerse - Let\'s know the truth';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News Content - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            {/* 3D Robot and Feature Description */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  AI-Powered Fact Checking
                </h2>
                <a 
                  href="/fake-news-detector" 
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  Learn more →
                </a>
              </div>
              
              <Robot3DModel />
              
              <div className="mt-6 text-center">
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                  Our state-of-the-art AI robot uses advanced machine learning to analyze news articles, 
                  social media posts, and claims to help you identify misinformation and fake news. 
                  Click on the robot to activate our Fact Checker.
                </p>
              </div>
            </motion.section>
            
            {/* Featured Categories */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Featured Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="/category/world" className="group">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1098662/pexels-photo-1098662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                      alt="World News"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <Globe2 className="h-8 w-8 mb-2" />
                        <h3 className="text-xl font-bold">World News</h3>
                        <p className="text-sm text-gray-300">Global events shaping our future</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/category/technology" className="group">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                      alt="Technology"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <TrendingUp className="h-8 w-8 mb-2" />
                        <h3 className="text-xl font-bold">Technology</h3>
                        <p className="text-sm text-gray-300">Latest in tech and innovation</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.section>
            
            {/* Trending News Section */}
            <TrendingNews />
            
            {/* Awards and Recognition */}
            <motion.section
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Awards & Recognition
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
                  <Award className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Best News Platform 2025
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Recognized for excellence in digital journalism
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
                  <Newspaper className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Innovation in Media
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Leading the way in AI-powered fact-checking
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
                  <Globe2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Global Impact Award
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Promoting truth in digital media worldwide
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
          
          {/* Sidebar - 1/3 width on desktop */}
          <div className="space-y-8">
            {/* Weather Widget */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Weather
              </h3>
              <WeatherWidget />
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Stay Updated
              </h3>
              <NewsletterSignup />
            </div>
            
            {/* Latest Videos */}
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white p-6 border-b border-gray-200 dark:border-gray-700">
                Latest Videos
              </h3>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <a href="#" className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Breaking: Major Climate Agreement Reached
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    World leaders announce groundbreaking climate initiative
                  </p>
                </a>
                <a href="#" className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Tech Innovation: AI Breakthrough
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Revolutionary AI technology transforms healthcare
                  </p>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/fake-news-detector" 
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    Fact Checker Tool
                  </a>
                </li>
                <li>
                  <a 
                    href="/category/politics" 
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    Politics News
                  </a>
                </li>
                <li>
                  <a 
                    href="/category/technology" 
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    Technology Updates
                  </a>
                </li>
                <li>
                  <a 
                    href="/category/science" 
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    Science Breakthroughs
                  </a>
                </li>
                <li>
                  <a 
                    href="/contact" 
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};

export default HomePage;