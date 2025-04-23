import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { NewsItem } from '../types/news';
import NewsCard from './NewsCard';

const TrendingNews = () => {
  const [trendingNews, setTrendingNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 4;

  useEffect(() => {
    // This would typically be a real API call
    // For demo purposes, we're using mock data
    const mockTrendingNews: NewsItem[] = [
      {
        source: { id: 'bbc-news', name: 'BBC News' },
        author: 'BBC News',
        title: 'Major breakthrough in renewable energy technology announced',
        description: 'Scientists have developed a new solar panel technology that increases efficiency by 40% and could revolutionize clean energy production worldwide.',
        url: 'https://example.com/article1',
        urlToImage: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        publishedAt: '2025-04-30T09:30:00Z',
        content: 'Full article content here...'
      },
      {
        source: { id: 'cnn', name: 'CNN' },
        author: 'John Smith',
        title: 'Global leaders agree on new climate accord at international summit',
        description: 'Representatives from 195 countries have reached a historic agreement to limit global warming to 1.5 degrees Celsius by implementing aggressive carbon reduction strategies.',
        url: 'https://example.com/article2',
        urlToImage: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        publishedAt: '2025-04-29T14:15:00Z',
        content: 'Full article content here...'
      },
      {
        source: { id: 'nyt', name: 'New York Times' },
        author: 'Jane Doe',
        title: 'Artificial intelligence breakthrough leads to medical diagnosis revolution',
        description: 'A new AI system has demonstrated the ability to diagnose rare diseases with 99% accuracy, potentially saving millions of lives through early detection.',
        url: 'https://example.com/article3',
        urlToImage: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        publishedAt: '2025-04-28T11:45:00Z',
        content: 'Full article content here...'
      },
      {
        source: { id: 'wapo', name: 'Washington Post' },
        author: 'Robert Johnson',
        title: 'Major cybersecurity attack thwarted by international cooperation',
        description: 'Intelligence agencies from multiple countries worked together to prevent a massive cyber attack that could have crippled critical infrastructure worldwide.',
        url: 'https://example.com/article4',
        urlToImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        publishedAt: '2025-04-27T16:20:00Z',
        content: 'Full article content here...'
      },
      {
        source: { id: 'guardian', name: 'The Guardian' },
        author: 'Emma Williams',
        title: 'Revolutionary cancer treatment shows 90% success rate in clinical trials',
        description: 'A new immunotherapy approach has demonstrated remarkable results in treating previously untreatable cancers, giving hope to millions of patients worldwide.',
        url: 'https://example.com/article5',
        urlToImage: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        publishedAt: '2025-04-26T08:10:00Z',
        content: 'Full article content here...'
      },
      {
        source: { id: 'ft', name: 'Financial Times' },
        author: 'Michael Brown',
        title: 'Global economy shows strong recovery signs as inflation rates stabilize',
        description: 'Economic indicators from major economies suggest a robust recovery phase has begun, with inflation rates dropping to manageable levels across most regions.',
        url: 'https://example.com/article6',
        urlToImage: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        publishedAt: '2025-04-25T13:40:00Z',
        content: 'Full article content here...'
      },
      {
        source: { id: 'reuters', name: 'Reuters' },
        author: 'Sarah Miller',
        title: 'Space tourism becomes reality as first commercial flight takes civilians to orbit',
        description: 'A historic milestone in space exploration has been reached as the first fully commercial spacecraft successfully took civilians on a three-day orbital journey.',
        url: 'https://example.com/article7',
        urlToImage: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750',
        publishedAt: '2025-04-24T10:05:00Z',
        content: 'Full article content here...'
      },
      {
        source: { id: 'ap', name: 'Associated Press' },
        author: 'David Anderson',
        title: 'Quantum computing breakthrough solves previously impossible calculations',
        description: 'Scientists have achieved a major milestone in quantum computing, solving complex problems that would take traditional supercomputers thousands of years to process.',
        url: 'https://example.com/article8',
        urlToImage: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        publishedAt: '2025-04-23T15:30:00Z',
        content: 'Full article content here...'
      }
    ];

    // Simulate API call delay
    setTimeout(() => {
      setTrendingNews(mockTrendingNews);
      setLoading(false);
    }, 1000);
  }, []);

  const totalPages = Math.ceil(trendingNews.length / articlesPerPage);
  const currentArticles = trendingNews.slice(
    currentPage * articlesPerPage, 
    (currentPage + 1) * articlesPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TrendingUp className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Trending News</h2>
          </motion.div>
          
          {!loading && totalPages > 1 && (
            <div className="flex space-x-2">
              <button 
                onClick={goToPrevPage}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button 
                onClick={goToNextPage}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          )}
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg shadow-md h-72 animate-pulse">
                <div className="h-40 bg-gray-300 dark:bg-gray-600 rounded-t-lg"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentArticles.map((article, idx) => (
              <NewsCard key={idx} article={article} index={idx} />
            ))}
          </div>
        )}
        
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === idx 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingNews;