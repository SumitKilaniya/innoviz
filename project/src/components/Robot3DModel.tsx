import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const Robot3DModel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[600px] bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl overflow-hidden shadow-2xl">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
          <motion.div 
            className="w-16 h-16 border-4 border-t-transparent border-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="mt-4 text-lg">Loading 3D Model...</p>
        </div>
      )}
      
      {/* Mobile Fallback */}
      {isMobile ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-6">
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-16 h-16 text-white"
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4" />
              <line x1="8" y1="16" x2="8" y2="16" />
              <line x1="16" y1="16" x2="16" y2="16" />
            </motion.svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">AI Fact Checker</h3>
          <p className="mb-6">Our advanced AI can analyze news articles and detect fake information with high accuracy.</p>
          <Link 
            to="/fake-news-detector" 
            className="btn bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
          >
            Try Fact Checker
          </Link>
        </div>
      ) : (
        /* 3D Spline Model - placeholder for where a real 3D model would be included */
        <>
          <div 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              opacity: isLoading ? 0 : 1, 
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <Spline 
              scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
              onLoad={() => setIsLoading(false)} 
            />
          </div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">AI Fact Checking Robot</h3>
              <p className="text-sm mb-4">Our advanced AI robot can analyze news articles and detect misinformation with over 95% accuracy. Click to try it!</p>
              <Link 
                to="/fake-news-detector" 
                className="btn bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm text-sm py-2"
              >
                Start Fact Checking
              </Link>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default Robot3DModel;