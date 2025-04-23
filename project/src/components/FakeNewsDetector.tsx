import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Check, X, Loader2, Info } from 'lucide-react';

type DetectionResult = {
  isFake: boolean;
  confidence: number;
  explanation: string;
  sources?: string[];
};

const FakeNewsDetector = () => {
  const [newsText, setNewsText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsText.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);
    
    // In a real app, this would be an API call to a machine learning service
    // Here we're simulating the analysis with a timeout and mock response
    setTimeout(() => {
      // This is just demo logic
      const isFakeNews = newsText.toLowerCase().includes('miracle cure') || 
                        newsText.toLowerCase().includes('conspiracy') ||
                        newsText.toLowerCase().includes('shocking truth') ||
                        Math.random() > 0.7; // Random element to demo both outcomes
      
      const mockResult: DetectionResult = {
        isFake: isFakeNews,
        confidence: isFakeNews ? 92 : 85,
        explanation: isFakeNews
          ? "This content contains sensationalist language and makes claims without citing credible sources. Several statements contradict established scientific consensus."
          : "The information appears to be factually accurate and aligns with reporting from multiple credible sources. The claims are supported by evidence and expert opinions.",
        sources: isFakeNews 
          ? ["Similar claims have been debunked by Fact-Checker.org", "The World Health Organization has published contrary evidence"]
          : ["Verified by Reuters Fact Check", "Consistent with CDC guidelines"]
      };
      
      setResult(mockResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Fake News Detector
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Paste any news article, social media post, or claim to analyze its credibility using our advanced AI.
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <textarea
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
              placeholder="Paste news article or claim here..."
              className="w-full h-40 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isAnalyzing}
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isAnalyzing || !newsText.trim()}
            className={`w-full py-3 rounded-lg font-medium transition-all ${
              isAnalyzing || !newsText.trim()
                ? 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isAnalyzing ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Analyzing...
              </span>
            ) : (
              'Analyze Text'
            )}
          </button>
        </form>
        
        {/* Analysis in Progress */}
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4"
          >
            <div className="flex items-center">
              <div className="h-12 w-12 mr-4 flex-shrink-0">
                <div className="animate-pulse flex space-x-1 justify-center items-center h-full">
                  <div className="h-3 w-2 bg-blue-400 dark:bg-blue-500 rounded"></div>
                  <div className="h-6 w-2 bg-blue-600 dark:bg-blue-400 rounded"></div>
                  <div className="h-4 w-2 bg-blue-500 dark:bg-blue-500 rounded"></div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-300">AI Analysis in Progress</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">Our AI is checking for misinformation patterns...</p>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Results Display */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mt-6 rounded-lg p-6 ${
              result.isFake 
                ? 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
                : 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800'
            }`}
          >
            <div className="flex items-start">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4 ${
                result.isFake 
                  ? 'bg-red-100 dark:bg-red-800'
                  : 'bg-green-100 dark:bg-green-800'
              }`}>
                {result.isFake ? (
                  <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-300" />
                ) : (
                  <Check className="h-6 w-6 text-green-600 dark:text-green-300" />
                )}
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold ${
                  result.isFake 
                    ? 'text-red-800 dark:text-red-300'
                    : 'text-green-800 dark:text-green-300'
                }`}>
                  {result.isFake ? 'Likely False Information' : 'Likely Accurate Information'}
                </h3>
                
                <div className="mt-2 flex items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        result.isFake 
                          ? 'bg-red-600 dark:bg-red-500'
                          : 'bg-green-600 dark:bg-green-500'
                      }`}
                      style={{ width: `${result.confidence}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {result.confidence}% confidence
                  </span>
                </div>
                
                <p className={`mt-3 text-sm ${
                  result.isFake 
                    ? 'text-red-700 dark:text-red-400'
                    : 'text-green-700 dark:text-green-400'
                }`}>
                  {result.explanation}
                </p>
                
                {result.sources && result.sources.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sources:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 pl-2">
                      {result.sources.map((source, index) => (
                        <li key={index}>{source}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Tips */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Tips for Spotting Fake News:</h4>
              <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Check if the story is reported by multiple credible sources</li>
                <li>• Be wary of sensationalist headlines or emotional language</li>
                <li>• Look for cited sources and expert quotes</li>
                <li>• Check the publication date and website URL</li>
                <li>• Reverse image search suspicious photos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeNewsDetector;