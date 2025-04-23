import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Award, BookOpen, Brain } from 'lucide-react';
import FakeNewsDetectorComponent from '../components/FakeNewsDetector';
import Chatbot from '../components/Chatbot';

const FakeNewsDetector = () => {
  useEffect(() => {
    document.title = 'Fake News Detector - FactVerse';
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-6">
          <AlertTriangle className="h-10 w-10" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Fake News Detection Tool
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Our AI-powered tool helps you identify misinformation and verify facts with confidence.
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <FakeNewsDetectorComponent />
      </div>
      
      {/* How It Works Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          How Our Fact-Checking Technology Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Source Analysis
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our AI cross-references information against reputable sources and fact-checking databases.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
              <Brain className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              AI Verification
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Advanced machine learning algorithms detect patterns associated with misleading content.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Confidence Rating
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Clear confidence scores help you understand the reliability of the information.
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};

export default FakeNewsDetector;