import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, this would send a request to your API
    // For now, we'll just simulate success
    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Thank You for Subscribing!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          You've been added to our newsletter. Stay tuned for the latest news and updates!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-blue-600 dark:bg-blue-800 rounded-lg p-6 text-white shadow-md w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
        <p className="text-blue-100">
          Subscribe to our newsletter for fact-checked news delivered to your inbox.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm placeholder-blue-200 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-auto"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center whitespace-nowrap"
          >
            <span>Subscribe</span>
            <Send className="ml-2 h-4 w-4" />
          </button>
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-yellow-200">
            {error}
          </p>
        )}
        
        <p className="mt-3 text-xs text-blue-200 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </motion.div>
  );
};

export default NewsletterSignup;