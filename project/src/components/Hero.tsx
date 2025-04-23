import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, AlertTriangle, Bot } from 'lucide-react';

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "Find the truth among the noise",
    "Verify facts with AI technology",
    "Separate truth from fiction",
    "Get reliable information instantly"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-700 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              FactVerse: The Source of Truth
            </h1>
            
            <div className="h-16 mb-4">
              <motion.p 
                key={currentPhrase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-blue-200"
              >
                {phrases[currentPhrase]}
              </motion.p>
            </div>
            
            <p className="text-lg mb-8 max-w-lg">
              Get reliable news and use our advanced AI tools to verify information, detect fake news, and stay informed with confidence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/fake-news-detector" 
                className="btn bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
              >
                <AlertTriangle className="mr-2 h-5 w-5" />
                Detect Fake News
              </Link>
              <Link 
                to="/chatbot" 
                className="btn bg-white text-blue-800 hover:bg-blue-50 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
              >
                <Bot className="mr-2 h-5 w-5" />
                Ask AI Assistant
              </Link>
            </div>
          </motion.div>
          
          {/* Search and Featured News */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl"
          >
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for news, topics, or sources..."
                className="w-full bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 pl-10 pr-4 py-3 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-2 h-6 bg-amber-400 rounded-full mr-2"></span> 
                Breaking News
              </h3>
              <ul className="space-y-4">
                {[1, 2, 3].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (idx * 0.1) }}
                    className="border-b border-white/20 pb-3 last:border-0"
                  >
                    <Link to="#" className="block hover:bg-white/10 p-2 rounded transition-colors">
                      <h4 className="font-medium leading-tight mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h4>
                      <div className="flex justify-between text-xs text-blue-200">
                        <span>Politics</span>
                        <span>10 minutes ago</span>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L60,117.3C120,107,240,85,360,90.7C480,96,600,128,720,128C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,150L1380,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"
            className="dark:fill-gray-900"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;